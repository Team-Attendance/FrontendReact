// 컨테이너 컴포넌트(리덕스 스토어와 연동된 컴포넌트) + Hooks
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import LeaveModal from "../components/LeaveModal";
import { open, close } from "../modules/leaveModal";



// v2 useCallback 사용(권장)
const LeaveModalContainer = () => {
  const data = useSelector(state => state.leaveModal.data);
  const view = useSelector(state => state.leaveModal.view);

  const dispatch = useDispatch();
  const onOpen = useCallback(() => dispatch(open()), [dispatch]);
  const onClose = useCallback(() => dispatch(close()), [dispatch]);

  return (
    <LeaveModal data={data} view={view} onOpen={onOpen} onClose={onClose}/>
  );
};


export default LeaveModalContainer;