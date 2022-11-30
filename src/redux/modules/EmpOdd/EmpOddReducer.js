import Types from "../../ActionConstants"

const initialState = {
    empOddInfo: {
        loading: false,
        data: {
            empNo: '',
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
        case Types.GET_EMP_ODD:
            return  {
                ...state,
                empOddInfo: {
                    ...state.empOddInfo,
                    loading: true,
                    data: payload
                }
            }
        case Types.GET_EMP_ODD_SUCCESS:
            return  {
                ...state,
                empOddInfo: {
                    ...state.empOddInfo,
                    loading: false,
                    data: payload
                }
            }
        case Types.GET_EMP_ODD_FAILURE:
            return  {
                ...state,
                empOddInfo: {
                    ...state.empOddInfo,
                    loading: false,
                    error: payload
                }
            }
        default:
            return state
    }
}

export default reducer