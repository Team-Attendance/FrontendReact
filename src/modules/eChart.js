import axios from 'axios';
import { handleActions } from 'redux-actions'

// 액션 타입 정의 -> 액션 생성 함수 생성 -> 초기 상태 및 리듀서 함수 만들기

// 액션 타입
//               모듈 이름 / 액션 이름
const UPDATE = 'eChart/UPDATE';
const ERROR = 'eChart/ERROR';

// 액션 생성 함수
// export는 여러개 가능
export const update = () => ({ type: UPDATE });
export const error = () => ({ type: ERROR });

// 초기 상태값 설정(리덕스에서 관리 할 상태 정의)
const initialState = {
  data: null,
};




export const getChartData = (empNo, year, month) =>  dispatch => {

  axios.get(process.env.REACT_APP_API_URL+'/emp-main-data', {
    params: {
      empNo: empNo,
      year: year,
      month: month
    }
  }).then(
    (response) => {
      dispatch({
        type: UPDATE, 
        data: response.data
      })
    }
  ).catch(error => {
    dispatch({
      type: ERROR,
      data: error
    });

    // error 를 throw 하여, 이 함수가 실행 된 다음에 다시한번 catch 를 할 수 있게 합니다.
    throw (error);
  })

}


// v2 리듀서 함수(handleActions 함수 사용)
const eChart = handleActions(
  {
    [UPDATE]: (state, action) => ({ ...state, data: action.data}),
  },
  initialState,
)

// export default는 한개만 가능
export default eChart;