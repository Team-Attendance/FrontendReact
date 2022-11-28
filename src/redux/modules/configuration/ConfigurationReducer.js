import Types from "../../ActionConstants"

const initialState = {
    empAllInfo: {
        loading: false,
        data: {
            empNo: '',
            deptName: '',
            empPwd: '',
            empName: '',
            empPosition: '',
           
        }
    },

    empAllsInfo: {
        loading: false,
        data: {
            empNo: '',
            deptName: '',
            empPwd: '',
            empName: '',
            empPosition: '',
            
        }
    },
    empBizInfo: {
        loading: false,
        data: {
            
            deptName: '',
            bhGetInto: '',
            bhGetOff: '',
            
        }
    }
    
}
const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case Types.GET_CONFIG:
            return {
                ...state,
                empAllInfo: {
                    ...state.empAllInfo,
                    loading: true,
                    data: payload
                }
            }
        case Types.GET_CONFIG_SUCCESS:
            return {
                ...state,
                empAllInfo: {
                    ...state.empAllInfo,
                    loading: false,
                    data: payload
                }
            }
        case Types.GET_CONFIG_FAILURE:
            return {
                ...state,
                empAllInfo: {
                    ...state.empAllInfo,
                    loading: false,
                    data: {
                        error: payload
                    }
                }
            }
            
                case Types.GET_CONFIG_RESULT:
                    return {
                        ...state,
                        empAllsInfo: {
                            ...state.empAllsInfo,
                            loading: true,
                            data: payload
                        }
                    }
                case Types.GET_CONFIG_RESULT_SUCCESS:
                    return {
                        ...state,
                        empAllsInfo: {
                            ...state.empAllsInfo,
                            loading: false,
                            data: payload
                        }
                    }
                case Types.GET_CONFIG_RESULT_FAILURE:
                    return {
                        ...state,
                        empAllsInfo: {
                            ...state.empAllsInfo,
                            loading: false,
                            data: {
                                error: payload
                            }
                        }
                    }
                    case Types.GET_CONFIG_BIZ:
                    return {
                        ...state,
                        empBizInfo: {
                            ...state.empBizInfo,
                            loading: true,
                            data: payload
                        }
                    }
                case Types.GET_CONFIG_BIZ_SUCCESS:
                    return {
                        ...state,
                        empBizInfo: {
                            ...state.empBizInfo,
                            loading: false,
                            data: payload
                        }
                    }
                case Types.GET_CONFIG_BIZ_FAILURE:
                    return {
                        ...state,
                        empBizInfo: {
                            ...state.empBizInfo,
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