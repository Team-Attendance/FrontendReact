import Types from "../../ActionConstants"
import * as LeaveApprovalAPI from "../../../api/LeaveApprovalAPI"
import * as OddApprovalAPI from "../../../api/OddApprovalAPI"
import * as EmpAPI from "../../../api/EmpAPI"

const CountApprovalActions = {
    countLeaveApproval: (deptName, year) => async(dispatch) => {
        dispatch({type: Types.GET_APPROVAL_COUNT})

        try {
            const countApproval = await LeaveApprovalAPI.countApproval(deptName, year)

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
    countOddApproval: (deptName, year) => async(dispatch) => {
        dispatch({type: Types.GET_APPROVAL_COUNT})

        try {
            const countApproval = await OddApprovalAPI.countApproval(deptName, year)

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
    countEmpOdd: (empNo, year) => async(dispatch) => {
        dispatch({type: Types.GET_APPROVAL_COUNT})

        try {
            const countApproval = await EmpAPI.countOdd(empNo, year)

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