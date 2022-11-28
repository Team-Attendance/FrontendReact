// 파일이름을 index.js로 설정하면 불러올 때 디렉터리 이름까지만 입력하여 불러올 수 있음
// ex) import rootReducer from './modules'

import { combineReducers } from 'redux'
import auth from '../redux/modules/Login/auth';
import leaveModal from './leaveModal';
import calanderStatus from './calanderStatus';

// 루트 리듀서
const rootReducer = combineReducers({
  auth,
  leaveModal,
  calanderStatus
});

export default rootReducer;