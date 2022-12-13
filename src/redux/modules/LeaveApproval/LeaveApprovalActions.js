import Types from "../../ActionConstants"
import * as LeaveApprovalAPI from "../../../api/LeaveApprovalAPI"

const LeaveApprovalActions = {
    getAllLeaveApproval: () => async(dispatch) => {
        dispatch({type: Types.GET_LEAVE_APPROVAL})

        try {
            const leaveApproval = await LeaveApprovalAPI.getAllLeaveApproval()

            dispatch({
                type: Types.GET_LEAVE_APPROVAL_SUCCESS,
                payload: leaveApproval.data
            })
        } catch(error){
            dispatch({
                type: Types.GET_LEAVE_APPROVAL_FAILURE,
                payload: error.toString()
            })
        }
    },
    searchLeaveApproval: (option, query) => async(dispatch) => {
        dispatch({type: Types.GET_LEAVE_APPROVAL})

        try {
            const leaveApproval = await LeaveApprovalAPI.searchLeaveApproval(option, query)

            dispatch({
                type: Types.GET_LEAVE_APPROVAL_SUCCESS,
                payload: leaveApproval.data
            })
        } catch(error){
            dispatch({
                type: Types.GET_LEAVE_APPROVAL_FAILURE,
                payload: error.toString()
            })
        }
    },
    getLeaveRequest: (empNo, year) => async(dispatch) => {
        dispatch({type: Types.GET_LEAVE_APPROVAL})

        try {
            const leaveApproval = await LeaveApprovalAPI.getLeaveRequest(empNo, year)

            dispatch({
                type: Types.GET_LEAVE_APPROVAL_SUCCESS,
                payload: leaveApproval.data
            })
        } catch(error){
            dispatch({
                type: Types.GET_LEAVE_APPROVAL_FAILURE,
                payload: error.toString()
            })
        }
    },

}

export default LeaveApprovalActions