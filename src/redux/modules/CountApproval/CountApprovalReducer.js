import Types from "../../ActionConstants"

const initialState = {
    countInfo: {
        loading: false,
        data: {
            unprocessed: '',
            allCount: ''
        }
    }
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case Types.GET_APPROVAL_COUNT:
            return  {
                ...state,
                countInfo: {
                    ...state.countInfo,
                    loading: true,
                    data: payload
                }
            }
        case Types.GET_APPROVAL_COUNT_SUCCESS:
            return  {
                ...state,
                countInfo: {
                    ...state.countInfo,
                    loading: false,
                    data: payload
                }
            }
        case Types.GET_APPROVAL_COUNT_FAILURE:
            return  {
                ...state,
                countInfo: {
                    ...state.countInfo,
                    loading: false,
                    error: payload
                }
            }
        default:
            return state
    }
}

export default reducer