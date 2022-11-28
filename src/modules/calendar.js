import axios from 'axios';
import { handleActions } from 'redux-actions'
import { initCalendar, moveMonth } from './cal_function';

// 액션 타입 정의 -> 액션 생성 함수 생성 -> 초기 상태 및 리듀서 함수 만들기

// 액션 타입
//               모듈 이름 / 액션 이름
const SETCALENDAR = 'calendar/SETCALENDAR';
const UPDATECALENDAR = 'calendar/UPDATECALENDAR';

const ERROR = 'calendar/ERROR';

// 액션 생성 함수
// export는 여러개 가능
// export const setCalendar = () => ({ type: SETCALENDAR });
export const error = () => ({ type: ERROR });

// 초기 상태값 설정(리덕스에서 관리 할 상태 정의)
const initialState = {
  calendar: null,
  data: null,
  year: 0,
  month: 0,
  nowDate: null,
};

export const setCalendar = (empNo) => dispatch => {
  const calendar = initCalendar();

  axios.get('/calendar-data', {
    params: {
      empNo: empNo,
      year: calendar[6][0].thisYear,
      month: calendar[6][1].thisMonth + 1
    }
  }).then(
    (response) => {
      dispatch({
        type: SETCALENDAR,
        calendar: calendar.filter((week, index) => index < 6 ),
        data: response.data,
        year: calendar[6][0].thisYear,
        month: calendar[6][1].thisMonth + 1,
        nowDate: calendar[6][2].nowDate
      })
    }
  )
};

export const updateCalendar = (empNo, year, month, direction, nowDate) => dispatch => {
  const calendar = moveMonth(year, month, direction, nowDate);

  axios.get('/calendar-data', {
    params: {
      empNo: empNo,
      year: calendar[6][0].thisYear,
      month: calendar[6][1].thisMonth + 1
    }
  }).then(
    (response) => {
      dispatch({
        type: UPDATECALENDAR,
        calendar: calendar.filter((week, index) => index < 6 ),
        data: response.data,
        year: calendar[6][0].thisYear,
        month: calendar[6][1].thisMonth + 1,
        nowDate: calendar[6][2].nowDate
      })
    }
  )
};

// v2 리듀서 함수(handleActions 함수 사용)
const calendar = handleActions(
  {
    [SETCALENDAR]: (state, action) => ({ ...state, calendar: action.calendar, data: action.data, year: action.year, month: action.month, nowDate: action.nowDate }),
    [UPDATECALENDAR]: (state, action) => ({ ...state, calendar: action.calendar, data: action.data, year: action.year, month: action.month, nowDate: action.nowDate }),
  },
  initialState,
)

// export default는 한개만 가능
export default calendar;