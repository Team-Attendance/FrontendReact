import Types from "../../ActionConstants"

const initialState = {
    empLeaveInfo: {
        loading: false,
        data: {
            empNo: '',
            leaveAdjDate: '',
            leaveType: '',
            leaveDetail: '',
            leaveStartDate: '',
            leaveEndDate: '',
            leaveAdjState: '',
            leaveAdjApproDate: '',
            leaveAdjAppro: ''
        }
    }
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case Types.GET_EMP_LEAVE:
            return  {
                ...state,
                empLeaveInfo: {
                    ...state.empLeaveInfo,
                    loading: true,
                    data: payload
                }
            }
        case Types.GET_EMP_LEAVE_SUCCESS:
            return  {
                ...state,
                empLeaveInfo: {
                    ...state.empLeaveInfo,
                    loading: false,
                    data: payload
                }
            }
        case Types.GET_EMP_LEAVE_FAILURE:
            return  {
                ...state,
                empLeaveInfo: {
                    ...state.empLeaveInfo,
                    loading: false,
                    error: payload
                }
            }
        default:
            return state
    }
}

export default reducer