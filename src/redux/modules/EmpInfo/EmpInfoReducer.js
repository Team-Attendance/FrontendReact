import Types from "../../ActionConstants";

const initialState = {
    empInfoDetail: {
        loading: false,
        data: {
            empNo: '',
            deptName: '',
            empName: '',
            empPwd: '',
            empPosition: '',
            empEmail: '',
            empBirth: '',
            empCellPhone: '',
            empOfficePhone: '',
            empContactList: '',
            empFirstDayOfWork:''
        }
    },
    empInfoDetailUpdate: {
        loading: false,
        data: {
            empNo: '',
            deptName: '',
            empName: '',
            empPwd: '',
            empPosition: '',
            empEmail: '',
            empBirth: '',
            empCellPhone: '',
            empOfficePhone: '',
            empContactList: '',
            empFirstDayOfWork:''
        }
    }
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case Types.GET_EMPINFO:
            return {
                ...state,
                empInfoDetail: {
                    ...state.empInfoDetail,
                    loading: true,
                    data: payload
                }
            }
        case Types.GET_EMPINFO_SUCCESS:
            return {
                ...state,
                empInfoDetail: {
                    ...state.empInfoDetail,
                    loading: false,
                    data: payload
                }
            }
        case Types.GET_EMPINFO_FAILURE:
            return {
                ...state,
                empInfoDetail: {
                    ...state.empInfoDetail,
                    loading: false,
                    data: {
                        error: payload
                    }
                }
            }
        case Types.GET_EMPINFO_UPDATE:
            return {
                ...state,
                empInfoDetailUpdate: {
                    ...state.empInfoDetailUpdate,
                    loading: true,
                    data: payload
                }
            }
        case Types.GET_EMPINFO_UPDATE_SUCCESS:
            return {
                ...state,
                empInfoDetailUpdate: {
                    ...state.empInfoDetailUpdate,
                    loading: false,
                    data: payload
                }
            }
        case Types.GET_EMPINFO_UPDATE_FAILURE:
            return {
                ...state,
                empInfoDetailUpdate: {
                    ...state.empInfoDetailUpdate,
                    loading: false,
                    data: {
                        error: payload
                    }
                }
            }
        default:
            return state
    }
}

export default reducer