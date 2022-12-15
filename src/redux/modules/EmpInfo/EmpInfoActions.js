import * as EmpAPI from "../../../api/EmpAPI"
import Types from "../../ActionConstants"
import {empEmailCheck} from "../../../api/EmpAPI";

const EmpInfoActions = {
    getEmpinfo: (empNo) => async (dispatch) => {

        dispatch({type: Types.GET_EMPINFO})
        try {
            const empInfo = await EmpAPI.getEmpinfo(empNo)
            dispatch({
                type: Types.GET_EMPINFO_SUCCESS,
                payload: empInfo.data
            })
        } catch (error) {
            dispatch({
                type: Types.GET_EMPINFO_FAILURE,
                payload: error.toString()
            })
        }
    },
    getAllEmps: () => async (dispatch) => {
        dispatch({type: Types.GET_EMP})

        try {
            const emp = await EmpAPI.getAllEmp()

            dispatch({
                type: Types.GET_EMP_SUCCESS,
                payload: emp.data
            })
        } catch (error) {
            dispatch({
                type: Types.GET_EMP_FAILURE,
                payload: error.toString()
            })
        }
    },
    updateEmpInfoByAdmin: (data) => async (dispatch) => {
        dispatch({type: Types.GET_EMPINFO_UPDATE})

        try {
            const updateEmp = await EmpAPI.updateEmpInfoByAdmin(data)

            dispatch({
                type: Types.GET_EMPINFO_UPDATE_SUCCESS,
                payload: updateEmp.data
            })
        } catch (error) {
            dispatch({
                type: Types.GET_EMPINFO_UPDATE_FAILURE,
                payload: error.toString()
            })
        }
        },
    empEmailCheck: (empEmail) => async(dispatch) =>{
        dispatch({ type: Types.GET_EMPEMAIL})

        try {
            const empEmailCheck = await EmpAPI.empEmailCheck(empEmail)

            dispatch({
                type: Types.GET_EMPEMAIL_SUCCESS,
                payload: empEmailCheck.data
            })
        } catch(error) {
            dispatch({
                type: Types.GET_EMPEMAIL_FAILURE,
                payload: error.toString()
            })
        }
    },
    countLeave: (empNo, year) => async (dispatch) => {
        dispatch({type: Types.GET_LEAVE_COUNT})

        try {
            const countLeave = await EmpAPI.countLeave(empNo, year)

            dispatch({
                type: Types.GET_LEAVE_COUNT_SUCCESS,
                payload: countLeave.data
            })
        } catch (error) {
            dispatch({
                type: Types.GET_LEAVE_COUNT_FAILURE,
                payload: error.toString()
            })
        }
    }
}

export default EmpInfoActions;