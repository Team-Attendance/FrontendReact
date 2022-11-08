import { createAction, handleActions } from 'redux-actions'

// 액션 타입 정의 -> 액션 생성 함수 생성 -> 초기 상태 및 리듀서 함수 만들기

// 액션 타입
//               모듈 이름 / 액션 이름
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
// export는 여러개 가능
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기 상태값 설정(리덕스에서 관리 할 상태 정의)
const initialState = {
  number: 0
};

// v1 리듀서 함수
// function counter(state = initialState, action) {
//   switch(action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1
//       };
//     default:
//       return state;
//   }
// }

// v2 리듀서 함수(handleActions 함수 사용)
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({number: state.number + 1}),
    [DECREASE]: (state, action) => ({number: state.number - 1}),
  },
  initialState,
)

// export default는 한개만 가능
export default counter;