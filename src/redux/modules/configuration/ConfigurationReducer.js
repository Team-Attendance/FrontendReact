import Types from "../../ActionConstants"

const initialState = {
    empAuthInfo: {
        loading: false,
        data: {
            empNo: '',
            deptName: '',
            empName: '',
            empPosition: '',
            empAuthority:''
        }
    },

    adminAuthInfo: {
        loading: false,
        data: {
            empNo: '',
            deptName: '',
            empName: '',
            empPosition: '',
            empAuthority:''
        }
    },
    empBizInfo: {
        loading: false,
        data: {
            deptNo:'',            
            deptName: '',
            bhGetInto: '',
            bhGetOff: ''
        }
    },
    updateEmpBizInfo: {
        loading: false,
        data: {
            deptNo:'',            
            deptName: '',
            bhGetInto: '',
            bhGetOff: ''
        }
    },
    empAllAuthInfo: {
        loading: false,
        data: {
            empNo: '',
            deptName: '',
            empName: '',
            empPosition: '',
            empAuthority:''
        }
    },


    
}
const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case Types.GET_CONFIG:
            return {
                ...state,
                empAuthInfo: {
                    ...state.empAuthInfo,
                    loading: true,
                    data: payload
                }
            }
        case Types.GET_CONFIG_SUCCESS:
            return {
                ...state,
                empAuthInfo: {
                    ...state.empAuthInfo,
                    loading: false,
                    data: payload
                }
            }
        case Types.GET_CONFIG_FAILURE:
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
            
                case Types.GET_CONFIG_RESULT:
                    return {
                        ...state,
                        adminAuthInfo: {
                            ...state.adminAuthInfo,
                            loading: true,
                            data: payload
                        }
                    }
                case Types.GET_CONFIG_RESULT_SUCCESS:
                    return {
                        ...state,
                        adminAuthInfo: {
                            ...state.adminAuthInfo,
                            loading: false,
                            data: payload
                        }
                    }
                case Types.GET_CONFIG_RESULT_FAILURE:
                    return {
                        ...state,
                        adminAuthInfo: {
                            ...state.adminAuthInfo,
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
                    case Types.GET_CONFIG_BIZ_MODI:
                        return {
                            ...state,
                            updateEmpBizInfo: {
                                ...state.updateEmpBizInfo,
                                loading: true,
                                data: payload
                            }
                        }
                    case Types.GET_CONFIG_BIZ_MODI_SUCCESS:
                        return {
                            ...state,
                            updateEmpBizInfo: {
                                ...state.updateEmpBizInfo,
                                loading: false,
                                data: payload
                            }
                        }
                    case Types.GET_CONFIG_BIZ_MODI_FAILURE:
                        return {
                            ...state,
                            updateEmpBizInfo: {
                                ...state.updateEmpBizInfo,
                                loading: false,
                                data: {
                                    error: payload
                                }
                            }
                        }
                    case Types.GET_CONFIG_ALL:
                        return {
                            ...state,
                            empAllAuthInfo: {
                                ...state.empAllAuthInfo,
                                loading: true,
                                data: payload
                            }
                        }
                    case Types.GET_CONFIG_ALL_SUCCESS:
                        return {
                            ...state,
                            empAllAuthInfo: {
                                ...state.empAllAuthInfo,
                                loading: false,
                                data: payload
                            }
                        }
                    case Types.GET_CONFIG_ALL_FAILURE:
                        return {
                            ...state,
                            empAllAuthInfo: {
                                ...state.empAllAuthInfo,
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