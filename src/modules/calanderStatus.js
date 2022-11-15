
import { handleActions } from 'redux-actions'

// 액션 타입 정의 -> 액션 생성 함수 생성 -> 초기 상태 및 리듀서 함수 만들기

// 액션 타입
//               모듈 이름 / 액션 이름
const UPDATE = 'calanderStatus/UPDATE';

// 액션 생성 함수
// export는 여러개 가능
export const update = () => ({ type: UPDATE });

// 초기 상태값 설정(리덕스에서 관리 할 상태 정의)
const initialState = {
  data: null
};

// const getUpdateData = async (empNo, year, month) => {
//   axios.get('/calander-data', {
//     params: {
//         year: 2022,
//         month: 10,
//         empNo: 1
//     }
// })
//     .then((Response) => {
//         console.log(Response.data)
//         return Response.data;
//     })
// };







// export const getPost = (postId) => dispatch => {
//   // 먼저, 요청이 시작했다는것을 알립니다
//   dispatch({type: GET_POST_PENDING});

//   // 요청을 시작합니다
//   // 여기서 만든 promise 를 return 해줘야, 나중에 컴포넌트에서 호출 할 때 getPost().then(...) 을 할 수 있습니다
//   return getPostAPI(postId).then(
//       (response) => {
//           // 요청이 성공했을경우, 서버 응답내용을 payload 로 설정하여 GET_POST_SUCCESS 액션을 디스패치합니다.
//           dispatch({
//               type: GET_POST_SUCCESS,
//               payload: response
//           })
//       }
//   ).catch(error => {
//       // 에러가 발생했을 경우, 에로 내용을 payload 로 설정하여 GET_POST_FAILURE 액션을 디스패치합니다.
//       dispatch({
//           type: GET_POST_FAILURE,
//           payload: error
//       });
//       // error 를 throw 하여, 이 함수가 실행 된 다음에 다시한번 catch 를 할 수 있게 합니다.
//       throw(error);
//   })

// }




























// export const getPosts = (empNo, year, month) => async dispatch => {
//   try {
//     const posts = await getUpdateData(empNo, year, month); // API 호출
//     dispatch({ type: UPDATE, posts }); // 성공
//   } catch (e) {
//     // dispatch({ type: GET_POSTS_ERROR, error: e }); // 실패
//   }
// };



// v2 리듀서 함수(handleActions 함수 사용)
const leaveModal = handleActions(
  {
    [UPDATE]: (state, action) => ({...state ,view: true}),
  },
  initialState,
)

// export default는 한개만 가능
export default leaveModal;