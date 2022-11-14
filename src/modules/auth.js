import produce from "immer";
import { createAction, handleActions } from "redux-actions";


const CHANGE_FIELD = "auth/CHANGE_FIELD";
const CHANGE_FIELDS = "auth/CHANGE_FIELDS";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";
const CHANGE_INPUT = "auth/CHANGE_INPUT";

export const changeField = createAction(
  CHANGE_FIELD,
  ({form, key, value}) => ({
    form, //login
    key,  //emp_no, emp_pwd
    value,  // 살제 바꾸려는 값
  })
);

export const changeFields = createAction(CHANGE_FIELDS);
export const initializerForm = createAction(INITIALIZE_FORM, (form) => form);
export const changeInput = createAction(CHANGE_INPUT);

const initialState = {
  login:{
    emp_no:"",
    emp_pwd:"",
  },
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),
      [CHANGE_FIELDS]: (state, { payload: {form,key} }) => ({
        ...state,
        [form]: key
      }),  
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [CHANGE_INPUT]: (state, { payload: {form, input} }) => ({
      ...state,
      [form]:input,
    }),
  },
  initialState
);

export default auth;