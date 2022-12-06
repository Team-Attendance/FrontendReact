import Types from "../../ActionConstants"

const initialState = {
    WeekliyInfo: {
        loading: false,
        data: {
            empTimeDate:'',
	        empNo:'',
	        workMinutefrom:''
        }
    },
    MonthliyInfo: {
        loading: false,
        data: {
            oddBizHourCount:''
        }
    }
  
    
}
const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case Types.GET_REPORT_WEEKLIY:
            return  {
                ...state,
                WeekliyInfo: {
                    ...state.WeekliyInfo,
                    loading: true,
                    data: payload
                }
            }
        case Types.GET_REPORT_WEEKLIY_SUCCESS:
            return  {
                ...state,
                WeekliyInfo: {
                    ...state.WeekliyInfo,
                    loading: false,
                    data: payload
                }
            }
        case Types.GET_REPORT_WEEKLIY_FAILURE:
            return  {
                ...state,
                WeekliyInfo: {
                    ...state.WeekliyInfo,
                    loading: false,
                    error: payload
                }
            }
            case Types.GET_REPORT_MONTHLIY:
            return  {
                ...state,
                MonthliyInfo: {
                    ...state.MonthliyInfo,
                    loading: true,
                    data: payload
                }
            }
        case Types.GET_REPORT_MONTHLIY_SUCCESS:
            return  {
                ...state,
                MonthliyInfo: {
                    ...state.MonthliyInfo,
                    loading: false,
                    data: payload
                }
            }
        case Types.GET_REPORT_MONTHLIY_FAILURE:
            return  {
                ...state,
                MonthliyInfo: {
                    ...state.MonthliyInfo,
                    loading: false,
                    error: payload
                }
            }
        default:
            return state
    }
}

export default reducer;