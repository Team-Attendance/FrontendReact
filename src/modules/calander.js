import axios from 'axios';
import { handleActions } from 'redux-actions'
import { initCalander, moveMonth } from './cal_function';

// 액션 타입 정의 -> 액션 생성 함수 생성 -> 초기 상태 및 리듀서 함수 만들기

// 액션 타입
//               모듈 이름 / 액션 이름
const SETCALANDER = 'calander/SETCALANDER';
const UPDATECALANDER = 'calander/UPDATECALANDER';

const ERROR = 'calander/ERROR';

// 액션 생성 함수
// export는 여러개 가능
// export const setCalander = () => ({ type: SETCALANDER });
export const error = () => ({ type: ERROR });

// 초기 상태값 설정(리덕스에서 관리 할 상태 정의)
const initialState = {
  calander: null,
  data: null,
  year: 0,
  month: 0,
  nowDate : null,
};

export const setCalander = (empNo) => dispatch => {
  const calander = initCalander();
  
  axios.get('/calander-data', {
    params: {
      empNo: empNo,
      year: calander[6][0].thisYear,
      month: calander[6][1].thisMonth + 1
    }
  }).then(
    (response) => {
      dispatch({
        type: SETCALANDER,
        calander: calander.filter( (week, index) => {if(index < 6) return week}), 
        data: response.data,
        year: calander[6][0].thisYear,
        month: calander[6][1].thisMonth + 1,
        nowDate: calander[6][2].nowDate
      })
    }
  )
};

export const updateCalander = (empNo, year, month, direction, nowDate) => dispatch => {
   console.log("updateCalander : " + empNo, year, month, direction, nowDate);
  const calander = moveMonth (year, month, direction, nowDate);
  // const calander = moveMonth (2022, 10, 'prev', '2022-11-18');

  
  axios.get('/calander-data', {
    params: {
      empNo: empNo,
      year: calander[6][0].thisYear,
      month: calander[6][1].thisMonth + 1
    }
  }).then(
    (response) => {
      dispatch({
        type: UPDATECALANDER,
        calander: calander.filter( (week, index) => {if(index < 6) return week}), 
        data: response.data,
        year: calander[6][0].thisYear,
        month: calander[6][1].thisMonth + 1,
        nowDate: calander[6][2].nowDate
      })
    }
  )
};

// v2 리듀서 함수(handleActions 함수 사용)
const calander = handleActions(
  {
    [SETCALANDER]: (state, action) => ({ ...state, calander: action.calander, data: action.data, year: action.year, month: action.month, nowDate: action.nowDate }),
    [UPDATECALANDER]: (state, action) => ({ ...state, calander: action.calander, data: action.data, year: action.year, month: action.month, nowDate: action.nowDate }),
  },
  initialState,
)

// export default는 한개만 가능
export default calander;