import { handleActions } from 'redux-actions'

// 액션 타입 정의 -> 액션 생성 함수 생성 -> 초기 상태 및 리듀서 함수 만들기

// 액션 타입
//               모듈 이름 / 액션 이름
const OPEN = 'leaveModal/OPEN';
const CLOSE = 'leaveModal/CLOSE';

// 액션 생성 함수
// export는 여러개 가능
export const open = () => ({ type: OPEN });
export const close = () => ({type: CLOSE});



export const openAsync = () => dispatch => {
  setTimeout(() => {
      dispatch(open());
  }, 1000);
};



// 초기 상태값 설정(리덕스에서 관리 할 상태 정의)
const initialState = {
  data: null,
  view: false
};


// v2 리듀서 함수(handleActions 함수 사용)
const leaveModal = handleActions(
  {
    [OPEN]: (state, action) => ({...state ,view: true}),
    [CLOSE]: (state, action) => ({...state ,view: false}),
  },
  initialState,
)

// export default는 한개만 가능
export default leaveModal;