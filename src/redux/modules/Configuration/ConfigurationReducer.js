import Types from "../../ActionConstants"

const initialState = {
    empAuthInfo: {
        loading: false,
        data: {
            empNo: '',
            deptName: '',
            empName: '',
            empPosition: '',
            empAuthority: ''
        }
    },
    bizHourInfo: {
        loading: false,
        data: {
            deptName: '',
            bhGetInto: '',
            bhGetOff: ''
        }
    }
}
const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case Types.GET_AUTH:
            return {
                ...state,
                empAuthInfo: {
                    ...state.empAuthInfo,
                    loading: true,
                    data: payload
                }
            }
        case Types.GET_AUTH_SUCCESS:
            return {
                ...state,
                empAuthInfo: {
                    ...state.empAuthInfo,
                    loading: false,
                    data: payload
                }
            }
        case Types.GET_AUTH_FAILURE:
            return {
                ...state,
                empAuthInfo: {
                    ...state.empAuthInfo,
                    loading: false,
                    data: {
                        error: payload
                    }
                }
            }
        case Types.GET_BIZ_HOUR:
            return {
                ...state,
                bizHourInfo: {
                    ...state.bizHourInfo,
                    loading: true,
                    data: payload
                }
            }
        case Types.GET_BIZ_HOUR_SUCCESS:
            return {
                ...state,
                bizHourInfo: {
                    ...state.bizHourInfo,
                    loading: false,
                    data: payload
                }
            }
        case Types.GET_BIZ_HOUR_FAILURE:
            return {
                ...state,
                bizHourInfo: {
                    ...state.bizHourInfo,
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

export default reducer;