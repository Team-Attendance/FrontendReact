import Types from "../../ActionConstants"
import * as LeaveApprovalAPI from "../../../api/LeaveApprovalAPI"

const LeaveApprovalActions = {
    getAllLeaveRequest: () => async(dispatch) => {
        dispatch({type: Types.GET_LEAVE_APPROVAL})

        try {
            const leaveApproval = await LeaveApprovalAPI.getAllLeaveRequest()

            dispatch({
                type: Types.GET_LEAVE_APPROVAL_SUCCESS,
                payload: leaveApproval.data
            })
        } catch(error){
            dispatch({
                type: Types.GET_EMP_FAILURE,
                payload: error.toString()
            })
        }
    }
}

export default LeaveApprovalActions