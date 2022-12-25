import Types from "../../ActionConstants"
import * as LeaveApprovalAPI from "../../../api/LeaveApprovalAPI"
import {getLeaveRequestByState} from "../../../api/LeaveApprovalAPI";

const LeaveApprovalActions = {
    getAllLeaveApproval: (deptName, year) => async(dispatch) => {
        dispatch({type: Types.GET_LEAVE_APPROVAL})

        try {
            const leaveApproval = await LeaveApprovalAPI.getAllLeaveApproval(deptName, year)

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
    getLeaveApprovalByState: (state, deptName, year) => async(dispatch) => {
        dispatch({type: Types.GET_LEAVE_APPROVAL})

        try {
            const leaveApproval = await LeaveApprovalAPI.getLeaveApprovalByState(state, deptName, year)

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
    searchLeaveApproval: (option, query, deptName, year) => async(dispatch) => {
        dispatch({type: Types.GET_LEAVE_APPROVAL})

        try {
            const leaveApproval = await LeaveApprovalAPI.searchLeaveApproval(option, query, deptName, year)

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
    getLeaveRequestByState: (state, empNo, year) => async(dispatch) => {
        dispatch({type: Types.GET_LEAVE_APPROVAL})

        try {
            const leaveApproval = await LeaveApprovalAPI.getLeaveRequestByState(state, empNo, year)

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