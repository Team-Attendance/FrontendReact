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

    searchEmp: (option, query) => async(dispatch) => {
        dispatch({type: Types.GET_EMP})

        try {
            const emp = await EmpAPI.getEmp(option, query)

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