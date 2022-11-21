import Types from "../../ActionConstants"
import * as OddApprovalAPI from "../../../api/OddApprovalAPI"

const OddApprovalActions = {
    getAllOddApproval: () => async(dispatch) => {
        dispatch({type: Types.GET_ODD_APPROVAL})

        try {
            const oddApproval = await OddApprovalAPI.getAllOddApproval()

            dispatch({
                type: Types.GET_ODD_APPROVAL_SUCCESS,
                payload: oddApproval.data
            })
        } catch(error){
            dispatch({
                type: Types.GET_ODD_APPROVAL_FAILURE,
                payload: error.toString()
            })
        }
    },
    searchOddApproval: (option, query) => async(dispatch) => {
        dispatch({type: Types.GET_ODD_APPROVAL})

        try {
            const oddApproval = await OddApprovalAPI.getOddApproval(option, query)

            dispatch({
                type: Types.GET_ODD_APPROVAL_SUCCESS,
                payload: oddApproval.data
            })
        } catch(error){
            dispatch({
                type: Types.GET_ODD_APPROVAL_FAILURE,
                payload: error.toString()
            })
        }
    }
}

export default OddApprovalActions