import Types from "../../ActionConstants";
import * as ReportAPI from "../../../api/ReportAPI";


const ReportAction = {
    getEmpLeave: () => async(dispatch) =>{
        dispatch({ type: Types.GET_REPORT_LEAVE})
    
        try {
            const configgg = await ReportAPI.getEmpLeave();
            
            dispatch({
                type: Types.GET_REPORT_LEAVE_SUCCESS,
                payload: configgg.data
            })
        } catch(error) {
            dispatch({
                type: Types.GET_REPORT_LEAVE_FAILURE,
                payload: error.toString()
            })
        }
    },
   
    getEmpOdd: () => async(dispatch) =>{
        dispatch({ type: Types.GET_REPORT_ODD})
    
        try {
            const configggg = await ReportAPI.getEmpOdd();
            
            dispatch({
                type: Types.GET_REPORT_ODD_SUCCESS,
                payload: configggg.data
            })
        } catch(error) {
            dispatch({
                type: Types.GET_REPORT_ODD_FAILURE,
                payload: error.toString()
            })
        }
    },
    getEmpInfo: () => async(dispatch) =>{
        dispatch({ type: Types.GET_REPORT_EMP})
    
        try {
            const configgggg = await ReportAPI.getEmpInfo();
            
            dispatch({
                type: Types.GET_REPORT_EMP_SUCCESS,
                payload: configgggg.data
            })
        } catch(error) {
            dispatch({
                type: Types.GET_REPORT_EMP_FAILURE,
                payload: error.toString()
            })
        }
    }

   
   
}

export default ReportAction;
