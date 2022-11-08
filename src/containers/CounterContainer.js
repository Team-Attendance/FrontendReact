// 컨테이너 컴포넌트(리덕스 스토어와 연동된 컴포넌트)
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";
import { bindActionCreators } from 'redux'


const CounterContainer = ({number, increase, decrease}) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// v1 : mapStateToProps, mapDispatchToProps을 내부에 미리 선언하고 사용
// const mapStateToProps = state => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = dispatch => ({
//   // 임시 함수
//   increase: () => {
//     // console.log('increase');
//     dispatch(increase());
//   },
//   decrease: () => {
//     // console.log('decrease');
//     dispatch(decrease());
//   },
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CounterContainer);

// v2 : mapStateToProps, mapDispatchToProps를 connect 함수 내부에 익명 함수 형태로 선언
// export default connect(
//   state => ({
//     number: state.counter.number,
//   }),
//   dispatch => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//   })
// )(CounterContainer);

// v3 : mapStateToProps, mapDispatchToProps를 connect 함수 내부에 익명 함수 형태로 선언 및 bindActionCreators 유틸 함수 사용
export default connect(
  state => ({
    number: state.counter.number,
  }),
  dispatch => bindActionCreators(
    {
      increase,
      decrease,
    },
    dispatch,
  ),
)(CounterContainer);