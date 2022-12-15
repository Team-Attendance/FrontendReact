import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {
    empInfo,
    empInfoDetail,
    leaveApprovalInfo,
    oddApprovalInfo,
    empAllAuthInfo,
    empAuthInfo,
    adminAuthInfo,
    empBizInfo,
    countInfo,
    WeeklyInfo,
    empInfoDetailUpdate,
    countLeave,
    MonthliyInfo
} from './modules';
import leaveModal from '../modules/leaveModal';
import auth from './modules/Login/auth';
import calendarStatus from '../modules/calendarStatus';
import calendar from '../modules/calendar';
import deptCalendar from '../modules/deptCalendar';
import eChart from '../modules/eChart';
import pto from '../modules/pto';
import adminMain from '../modules/adminMain';
import monthlyTable from '../modules/monthlyTable';

const middlewares = [thunk];

// 리듀서 합치기
const reducers = combineReducers({
    empInfo,
    leaveApprovalInfo,
    leaveModal,
    calendarStatus,
    calendar,
    deptCalendar,
    oddApprovalInfo,
    auth,
    empInfoDetail,
    empAllAuthInfo,
    empAuthInfo,
    adminAuthInfo,
    empBizInfo,
    eChart,
    pto,
    countInfo,
    adminMain,
    monthlyTable,
    WeeklyInfo,
    empInfoDetailUpdate,
    countLeave,
    MonthliyInfo
});

let store;

// 개발환경일때만 적용되는것들
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);

    // 스토어 구성을 할때 WidthDevTools에 합친다. 개발환경
    store = createStore(
        reducers,
        composeWithDevTools(applyMiddleware(...middlewares))
    )
} else {
    store = createStore(
        reducers,
        compose(applyMiddleware(...middlewares))
    ) // 배포환경
}

export default store; // 전