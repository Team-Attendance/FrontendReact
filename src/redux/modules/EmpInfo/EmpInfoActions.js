import * as EmpAPI from "../../../api/EmpAPI"
import Types from "../../ActionConstants"

const EmpInfoActions = {
  getInfoDetail: (empNo) => async(dispatch)=>{
    
    dispatch({type: Types.GET_EMPINFO})
    try {
        const empInfo = await EmpAPI.getEmpinfo(empNo)
        dispatch({
            type: Types.GET_EMPINFO_SUCCESS,
            payload: empInfo.data
        })
    } catch(error) {
      dispatch({
          type: Types.GET_EMPINFO_FAILURE,
          payload: error.toString()
      })
    }  

    
  },
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
    }
}

export default EmpInfoActions;