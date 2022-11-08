 import { bindActionCreators } from 'redux';
import { useMemo } from "react";
import { useDispatch } from "react-redux";

export default function useActions(actions, deps) {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actions)){
        return actions.map(a => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : deps
  );
}