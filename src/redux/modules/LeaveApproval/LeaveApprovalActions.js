import Types from "../../ActionConstants"
import * as LeaveApprovalAPI from "../../../api/LeaveApprovalAPI"

const LeaveApprovalActions = {
    getAllLeaveApproval: (year) => async(dispatch) => {
        dispatch({type: Types.GET_LEAVE_APPROVAL})

        try {
            const leaveApproval = await LeaveApprovalAPI.getAllLeaveApproval(year)

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
    searchLeaveApproval: (option, query, year) => async(dispatch) => {
        dispatch({type: Types.GET_LEAVE_APPROVAL})

        try {
            const leaveApproval = await LeaveApprovalAPI.searchLeaveApproval(option, query, year)

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