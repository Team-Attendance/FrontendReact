import Types from "../../ActionConstants";

const initialState = {
    empInfo: {
        loading: false,
        data: {
            empNo: '',
            deptName: '',
            empPwd: '',
            empName: '',
            empPosition: '',
            empPhoto: '',
            empEmail: '',
            empBirth: '',
            empCellPhone: '',
            empOfficePhone: '',
            empContactList: '',
            empFirstDayOfWork: '',
            empLastDayOfWork: '',
            empQrcode: ''
        }
    }
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case Types.GET_EMP:
            return {
                ...state,
                empInfo: {
                    ...state.empInfo,
                    loading: true,
                    data: payload
                }
            }
        case Types.GET_EMP_SUCCESS:
            return {
                ...state,
                empInfo: {
                    ...state.empInfo,
                    loading: false,
                    data: payload
                }
            }
        case Types.GET_EMP_FAILURE:
            return {
                ...state,
                empInfo: {
                    ...state.empInfo,
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