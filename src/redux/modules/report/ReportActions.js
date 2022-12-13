import Types from "../../ActionConstants";
import * as ReportAPI from "../../../api/ReportAPI";


const ReportActions= {
    getWeeklyBizTime: (empNo) => async(dispatch) =>{
        dispatch({ type: Types.GET_REPORT_WEEKLIY})
    
        try {
            const configgg = await ReportAPI.getWeeklyBizTime(empNo);
            
            dispatch({
                type: Types.GET_REPORT_WEEKLIY_SUCCESS,
                payload: configgg.data
            })
        } catch(error) {
            dispatch({
                type: Types.GET_REPORT_WEEKLIY_FAILURE,
                payload: error.toString()
            })
        }
    },
   
    getMonthlyOdd: () => async(dispatch) =>{
        dispatch({ type: Types.GET_REPORT_MONTHLIY})
    
        try {
            const configggg = await ReportAPI.getMonthlyOdd();
            
            dispatch({
                type: Types.GET_REPORT_MONTHLIY_SUCCESS,
                payload: configggg.data
            })
        } catch(error) {
            dispatch({
                type: Types.GET_REPORT_MONTHLIY_FAILURE,
                payload: error.toString()
            })
        }
    }
   
}

export default ReportActions;
