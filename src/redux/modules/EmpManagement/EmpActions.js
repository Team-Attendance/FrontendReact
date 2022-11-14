import * as EmpAPI from "../../../api/EmpAPI"
import Types from "../../ActionConstants";

const EmpActions = {
    getAllEmps: () => async(dispatch) =>{
        dispatch({ type: Types.GET_EMP})
    
        try {
            const emp = await EmpAPI.getAllEmp()

            dispatch({
                type: Types.GET_EMP_SUCCESS,
                payload: emp.data
            })
        } catch(error) {
            dispatch({
                type: Types.GET_EMP_FAILURE,
                payload: error.toString()
            })
        }
    },

    searchEmpByName: (empName) => async(dispatch) => {
        dispatch({type: Types.GET_EMP})

        try {
            const emp = await EmpAPI.getEmpByName(empName)

            dispatch({
                type: Types.GET_EMP_SUCCESS,
                payload: emp.data
            })
        } catch(error) {
            dispatch({
                type: Types.GET_EMP_FAILURE,
                payload: error.toString()
            })
        }
    },

    searchEmpByNum: (empNo) => async(dispatch) => {
        dispatch({type: Types.GET_EMP})

        try {
            const emp = await EmpAPI.getEmpByNum(empNo)

            dispatch({
                type: Types.GET_EMP_SUCCESS,
                payload: emp.data
            })
        } catch(error) {
            dispatch({
                type: Types.GET_EMP_FAILURE,
                payload: error.toString()
            })
        }
    }
}

export default EmpActions