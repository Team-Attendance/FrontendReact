import Types from "../../ActionConstants"

const initialState = {
    leaveApprovalInfo: {
        loading: false,
        data: {
            empNo: '',
            empName: '',
            empPosition: '',
            leaveAdjDate: '',
            leaveType: '',
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
        case Types.GET_LEAVE_APPROVAL:
            return  {
                ...state,
                leaveApprovalInfo: {
                    ...state.leaveApprovalInfo,
                    loading: true,
                    data: payload
                }
            }
        case Types.GET_LEAVE_APPROVAL_SUCCESS:
            return  {
                ...state,
                leaveApprovalInfo: {
                    ...state.leaveApprovalInfo,
                    loading: false,
                    data: payload
                }
            }
        case Types.GET_LEAVE_APPROVAL_FAILURE:
            return  {
                ...state,
                leaveApprovalInfo: {
                    ...state.leaveApprovalInfo,
                    loading: false,
                    error: payload
                }
            }
        default:
            return state
    }
}

export default reducer