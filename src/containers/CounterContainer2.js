// 컨테이너 컴포넌트(리덕스 스토어와 연동된 컴포넌트) + Hooks
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";


// v1
// const CounterContainer2 = () => {
//   const number = useSelector(state => state.counter.number);
//   const dispatch = useDispatch();

//   return (
//     <Counter
//      number={number}
//      onIncrease={() => dispatch(increase())}
//      onDecrease={() => dispatch(decrease())}
//      />
//   );
// };


// v2 useCallback 사용(권장)
const CounterContainer2 = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};


export default CounterContainer2;