import Types from "../../ActionConstants"

const initialState = {
    oddApprovalInfo: {
        loading: false,
        data: {
            empNo: '',
            empName: '',
            empPosition: '',
            oddBizAdjDate: '',
            oddBizType: '',
            oddBizAdjDetail: '',
            oddBizDate: '',
            oddBizAdjState: '',
            oddBizAdjApproDate: '',
            oddBizAdjAppro: ''
        }
    }
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case Types.GET_ODD_APPROVAL:
            return  {
                ...state,
                oddApprovalInfo: {
                    ...state.oddApprovalInfo,
                    loading: true,
                    data: payload
                }
            }
        case Types.GET_ODD_APPROVAL_SUCCESS:
            return  {
                ...state,
                oddApprovalInfo: {
                    ...state.oddApprovalInfo,
                    loading: false,
                    data: payload
                }
            }
        case Types.GET_ODD_APPROVAL_FAILURE:
            return  {
                ...state,
                oddApprovalInfo: {
                    ...state.oddApprovalInfo,
                    loading: false,
                    error: payload
                }
            }
        default:
            return state
    }
}

export default reducer