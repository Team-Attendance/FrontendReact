import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// 액션 타입 정의 -> 액션 생성 함수 생성 -> 초기 상태 및 리듀서 함수 만들기

// 액션 타입
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경
const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크 해제 함
const REMOVE = 'todos/REMOVE'; // todo를 제거함

// v1 액션 생성 함수 시작
// export const changeInput = input => ({
//   type: CHANGE_INPUT,
//   input
// });

// let id = 3; // insert가 호출될 때마다 1씩 더해짐

// export const insert = text => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false
//   }
// });

// export const toggle = id => ({
//   type: TOGGLE,
//   id
// });

// export const remove = id => ({
//   type: REMOVE,
//   id
// });
// v1 액션 생성 함수 끝


// v2 액션 생성 항수 시작
export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3;
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

// v2 액션 생성 항수 끝


// 초기 상태
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false
    }
  ]
};

// v1 리듀서 함수
// function todos(state = initialState, action){
//   switch(action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo)
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map(todo => 
//           todo.id === action.id ? {...todo, done: !todo.done} : todo
//           )
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter(todo => todo.id !== action.id)
//       };
//     default:
//       return state;
//   }
// }

// v2 리듀서 함수
// const todos = handleActions(
//   {
//     [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input: input }),
//     [INSERT]: (state, { payload: todo }) => ({
//       ...state,
//       todos: state.todos.concat(todo),
//     }),
//     [TOGGLE]: (state, { payload: id }) => ({
//       ...state,
//       todos: state.todos.map(todo =>
//         todo.id === id ? { ...todo, done: !todo.done } : todo,
//       ),
//     }),
//     [REMOVE]: (state, { payload: id }) =>({
//       ...state,
//       todos: state.todos.filter(todo => todo.id !== id),
//     }),
//   },
//   initialState,
// );


// v3 리듀서 함수 + immer
const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => 
      produce(state, draft => {
        draft.input = input;
      }),

    [INSERT]: (state, { payload: todo }) =>
      produce(state, draft => {
        draft.todos.push(todo);
      }),

    [TOGGLE]: (state, { payload: id }) =>
      produce(state, draft => {
        const todo = draft.todos.find(todo => todo.id === id);
        todo.done = !todo.done;
      }),

    [REMOVE]: (state, { payload: id }) =>
      produce(state, draft => {
        const index = draft.todos.findIndex(todo => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState,
);
export default todos;