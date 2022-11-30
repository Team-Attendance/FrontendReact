import Types from "../../ActionConstants"
import * as EmpLeaveAPI from "../../../api/EmpLeaveAPI"

const EmpLeaveActions = {

    getLeaveRequest: (empNo) => async(dispatch) => {
        dispatch({type: Types.GET_EMP_LEAVE})

        try{
            const empLeave = await EmpLeaveAPI.getLeaveRequest(empNo)

            dispatch({
                type: Types.GET_EMP_LEAVE_SUCCESS,
                payload: empLeave.data
            })
        } catch(error){
            dispatch({
                type:Types.GET_EMP_LEAVE_FAILURE,
                payload: error.toString()
            })
        }
    }
}

export default EmpLeaveActions