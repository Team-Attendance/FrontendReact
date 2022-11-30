import Types from "../../ActionConstants"
import * as EmpOddAPI from "../../../api/EmpOddAPI"

const EmpOddActions = {
    getOddRequest: (empNo) => async(dispatch) => {
        dispatch({type: Types.GET_EMP_ODD})

        try{
            const empOdd = await EmpOddAPI.getOddRequest(empNo)

            dispatch({
                type: Types.GET_EMP_ODD_SUCCESS,
                payload: empOdd.data
            })
        } catch(error){
            dispatch({
                type:Types.GET_EMP_ODD_FAILURE,
                payload: error.toString()
            })
        }
    }
}

export default EmpOddActions