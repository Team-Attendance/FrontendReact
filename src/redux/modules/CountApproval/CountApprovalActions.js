import Types from "../../ActionConstants"
import * as LeaveApprovalAPI from "../../../api/LeaveApprovalAPI"
import * as OddApprovalAPI from "../../../api/OddApprovalAPI"

const CountApprovalActions = {
    countLeaveApproval: (year) => async(dispatch) => {
        dispatch({type: Types.GET_APPROVAL_COUNT})

        try {
            const countApproval = await LeaveApprovalAPI.countApproval(year)

            dispatch({
                type: Types.GET_APPROVAL_COUNT_SUCCESS,
                payload: countApproval.data
            })
        } catch(error){
            dispatch({
                type: Types.GET_APPROVAL_COUNT_FAILURE,
                payload: error.toString()
            })
        }
    },
    countOddApproval: (year) => async(dispatch) => {
        dispatch({type: Types.GET_APPROVAL_COUNT})

        try {
            const countApproval = await OddApprovalAPI.countApproval(year)

            dispatch({
                type: Types.GET_APPROVAL_COUNT_SUCCESS,
                payload: countApproval.data
            })
        } catch(error){
            dispatch({
                type: Types.GET_APPROVAL_COUNT_FAILURE,
                payload: error.toString()
            })
        }
    }
}

export default CountApprovalActions