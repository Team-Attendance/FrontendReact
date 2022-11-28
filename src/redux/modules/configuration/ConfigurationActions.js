import Types from "../../ActionConstants";
import * as ConfigurationAPI from "../../../api/ConfigurationAPI";


const ConfigurationActions = {
    getAuthEmp: () => async(dispatch) =>{
        dispatch({ type: Types.GET_CONFIG_RESULT})
    
        try {
            const config = await ConfigurationAPI.getAuthEmp();
            
            dispatch({
                type: Types.GET_CONFIG_RESULT_SUCCESS,
                payload: config.data
            })
        } catch(error) {
            dispatch({
                type: Types.GET_CONFIG_RESULT_FAILURE,
                payload: error.toString()
            })
        }
    },

    getResultEmp: () => async(dispatch) =>{
        dispatch({ type: Types.GET_CONFIG})
    
        try {
            const configs = await ConfigurationAPI.getResultEmp();
            
            dispatch({
                type: Types.GET_CONFIG_SUCCESS,
                payload:configs.data
            })
        } catch(error) {
            dispatch({
                type: Types.GET_CONFIG_FAILURE,
                payload: error.toString()
            })
        }
    },
    getEmpBiz: () => async(dispatch) =>{
        dispatch({ type: Types.GET_CONFIG_BIZ})
    
        try {
            const configg = await ConfigurationAPI.getEmpBiz();
            
            dispatch({
                type: Types.GET_CONFIG_BIZ_SUCCESS,
                payload: configg.data
            })
        } catch(error) {
            dispatch({
                type: Types.GET_CONFIG_BIZ_FAILURE,
                payload: error.toString()
            })
        }
    }
}

export default ConfigurationActions;
