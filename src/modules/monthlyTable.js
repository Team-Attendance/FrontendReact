import axios from 'axios';
import { handleActions } from 'redux-actions'
import { deleteHyphen, formatDate, formatFulldate, formatHyphenFulldate, monthCalendar } from './cal_function';

// 액션 타입 정의 -> 액션 생성 함수 생성 -> 초기 상태 및 리듀서 함수 만들기

// 액션 타입
//               모듈 이름 / 액션 이름
const SETMONTHLYDATA = 'monthlyTable/SETMONTHLYDATA'
const UPDATEMONTHLYDATA = 'monthlyTable/UPDATEMONTHLYDATA'
const ERROR = 'monthlyTable/ERROR';

// 액션 생성 함수
// export는 여러개 가능
// export const setCalendar = () => ({ type: SETCALENDAR });
export const error = () => ({ type: ERROR });

// 초기 상태값 설정(리덕스에서 관리 할 상태 정의)
const initialState = {
  data: null,
  year: 0,
  month: 0,
};

export const setMonthlyData = (empNo) => dispatch => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  const monthCal = monthCalendar(year, month);

  axios.get(process.env.REACT_APP_API_URL+'/monthly-data', {
    params: {
      empNo: empNo,
      year: year,
      month: month + 1
    }
  }).then(
    (response) => {

      monthCal.forEach(monthElement => {

        response.data.monthlyData.forEach(MonthlyDataElement => {

          if ((deleteHyphen(monthElement.date) === formatFulldate(formatDate(MonthlyDataElement.emp_time_date))) || (deleteHyphen(monthElement.date) === formatFulldate(formatDate(MonthlyDataElement.odd_biz_date)))) {

            if (MonthlyDataElement.bh_get_into != null) {
              monthElement.bh_get_into = MonthlyDataElement.bh_get_into;
            } 

            if (MonthlyDataElement.bh_get_off != null) {
              monthElement.bh_get_off = MonthlyDataElement.bh_get_off;
            }

            if (MonthlyDataElement.emp_get_into != null) {
              monthElement.emp_get_into = MonthlyDataElement.emp_get_into;
            }

            if (MonthlyDataElement.emp_get_off != null) {
              monthElement.emp_get_off = MonthlyDataElement.emp_get_off;
            }

            if (MonthlyDataElement.odd_biz_adj != null) {
              switch (MonthlyDataElement.odd_biz_adj) {
                case 0:
                  monthElement.odd_biz_adj = "대기";
                  break;
                case 1:
                  monthElement.odd_biz_adj = "승인";
                  break;
                case 2:
                  monthElement.odd_biz_adj = "반려";
                  break;
                default:
                  break;
              }
            }

            if (MonthlyDataElement.odd_biz_type != null) {
              if (monthElement.state === "지각" || monthElement.state === "조퇴") {
                monthElement.state = "지각, 조퇴";
              }else{
                monthElement.state = MonthlyDataElement.odd_biz_type;
              }
            } else {
              monthElement.state = "정상";
            }

          }
        });

        response.data.empLeave.forEach(leaveDataElement => {
          let leaveStartDate = formatFulldate(formatDate(leaveDataElement.leaveStartDate));
          let leaveEndDate = formatFulldate(formatDate(leaveDataElement.leaveEndDate));
          if ((leaveStartDate <= deleteHyphen(monthElement.date)) && (deleteHyphen(monthElement.date) <= leaveEndDate)) {
            monthElement.leave_state = leaveDataElement.leaveType;

          }
        })

        
        monthElement.date += `(${monthElement.day})`;
      });

      
      dispatch({
        type: SETMONTHLYDATA,
        data: monthCal,
        year: year,
        month: month + 1,
      })
    }
  )
};


export const updateMonthlyData = (empNo, year, month, direction) => dispatch => {

  let calYear;
  let calMonth;

  calYear = year;

  direction === 'prev' ? calMonth = ((month) - 1) : calMonth = ((month) + 1);


  calMonth--;

  const monthCal = monthCalendar(calYear, calMonth);

  switch (calMonth) {
    case 12:
      calYear += 1;
      calMonth = 1;
      break;
    case -1:
      calYear -= 1;
      calMonth = 12;
      break;
    default:
      calMonth += 1;
      break;
  }

  axios.get(process.env.REACT_APP_API_URL+'/monthly-data', {
    params: {
      empNo: empNo,
      year: calYear,
      month: calMonth
    }
  }).then(
    (response) => {

      monthCal.forEach(monthElement => {

        response.data.monthlyData.forEach(MonthlyDataElement => {

          if ((deleteHyphen(monthElement.date) === formatFulldate(formatDate(MonthlyDataElement.emp_time_date))) || (deleteHyphen(monthElement.date) === formatFulldate(formatDate(MonthlyDataElement.odd_biz_date)))) {

            if (MonthlyDataElement.bh_get_into != null) {
              monthElement.bh_get_into = MonthlyDataElement.bh_get_into;
            }

            if (MonthlyDataElement.bh_get_off != null) {
              monthElement.bh_get_off = MonthlyDataElement.bh_get_off;
            }

            if (MonthlyDataElement.emp_get_into != null) {
              monthElement.emp_get_into = MonthlyDataElement.emp_get_into;
            }

            if (MonthlyDataElement.emp_get_off != null) {
              monthElement.emp_get_off = MonthlyDataElement.emp_get_off;
            }

            if (MonthlyDataElement.odd_biz_adj != null) {
              switch (MonthlyDataElement.odd_biz_adj) {
                case 0:
                  monthElement.odd_biz_adj = "대기";
                  break;
                case 1:
                  monthElement.odd_biz_adj = "승인";
                  break;
                case 2:
                  monthElement.odd_biz_adj = "반려";
                  break;
                default:
                  break;
              }
            }

            if (MonthlyDataElement.odd_biz_type != null) {
              if (monthElement.state === "지각" || monthElement.state === "조퇴") {
                monthElement.state = "지각, 조퇴";
              }else{
                monthElement.state = MonthlyDataElement.odd_biz_type;
              }
            } else {
              monthElement.state = "정상";
            }

          }
        });

        response.data.empLeave.forEach(leaveDataElement => {
          let leaveStartDate = formatFulldate(formatDate(leaveDataElement.leaveStartDate));
          let leaveEndDate = formatFulldate(formatDate(leaveDataElement.leaveEndDate));
          if ((leaveStartDate <= deleteHyphen(monthElement.date)) && (deleteHyphen(monthElement.date) <= leaveEndDate)) {
            monthElement.leave_state = leaveDataElement.leaveType;
          }
        })

        
        monthElement.date += `(${monthElement.day})`;
      });

      dispatch({
        type: UPDATEMONTHLYDATA,
        data: monthCal,
        year: calYear,
        month: calMonth,
      })
    }
  )
};

// v2 리듀서 함수(handleActions 함수 사용)
const monthlyTable = handleActions(
  {
    [SETMONTHLYDATA]: (state, action) => ({ ...state, data: action.data, year: action.year, month: action.month }),
    [UPDATEMONTHLYDATA]: (state, action) => ({ ...state, data: action.data, year: action.year, month: action.month }),
  },
  initialState,
)

// export default는 한개만 가능
export default monthlyTable;