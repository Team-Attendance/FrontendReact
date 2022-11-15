// 파일이름을 index.js로 설정하면 불러올 때 디렉터리 이름까지만 입력하여 불러올 수 있음
// ex) import rootReducer from './modules'

import { combineReducers } from 'redux'
import auth from './auth';
import leaveModal from './leaveModal';


// 루트 리듀서
const rootReducer = combineReducers({
  auth,
  leaveModal
});

export default rootReducer;