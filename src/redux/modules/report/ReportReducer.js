import Types from "../../ActionConstants"

const initialState = {
    EmpLeavInfo: {
        loading: false,
        data: {          
            leaveAdjDate: '',
            leaveType: '',
            leaveStartDate: '',
            leaveEndDate: '',
            leaveAdjApproDate: '',
            leaveAdjAppro: ''
        }
    },
    EmpOddInfo: {
        loading: false,
        data: {
            oddBizAdjDate: '',
            oddBizType: '',
            oddBizDate: '',
            oddBizAdjState: '',
            oddBizAdjAppro: ''
        }
    },

    EmpInfo: {
        loading: false,
        data: {          
            data:null
        }
    },

  
    
}
const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case Types.GET_REPORT_LEAVE:
            return {
                ...state,
                EmpLeavInfo: {
                    ...state.EmpLeavInfo,
                    loading: true,
                    data: payload
                }
            }
        case Types.GET_REPORT_LEAVE_SUCCESS:
            return {
                ...state,
                EmpLeavInfo: {
                    ...state.EmpLeavInfo,
                    loading: false,
                    data: payload
                }
            }
        case Types.GET_REPORT_LEAVE_FAILURE:
            return {
                ...state,
                EmpLeavInfo: {
                    ...state.EmpLeavInfo,
                    loading: false,
                    data: {
                        error: payload
                    }
                }
            }
            case Types.GET_REPORT_ODD:
                return {
                    ...state,
                    EmpOddInfo: {
                        ...state.EmpOddInfo,
                        loading: true,
                        data: payload
                    }
                }
            case Types.GET_REPORT_ODD_SUCCESS:
                return {
                    ...state,
                    EmpOddInfo: {
                        ...state.EmpOddInfo,
                        loading: false,
                        data: payload
                    }
                }
            case Types.GET_REPORT_ODD_FAILURE:
                return {
                    ...state,
                    EmpOddInfo: {
                        ...state.EmpOddInfo,
                        loading: false,
                        data: {
                            error: payload
                        }
                    }
                }
                case Types.GET_REPORT_EMP:
                    return {
                        ...state,
                        EmpInfo: {
                            ...state.EmpInfo,
                            loading: true,
                            data: payload
                        }
                    }
                case Types.GET_REPORT_EMP_SUCCESS:
                    return {
                        ...state,
                        EmpInfo: {
                            ...state.EmpInfo,
                            loading: false,
                            data: payload
                        }
                    }
                case Types.GET_REPORT_EMP_FAILURE:
                    return {
                        ...state,
                        EmpInfo: {
                            ...state.EmpInfo,
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