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
    }, 
    getAllAuthotityEmp: () => async(dispatch) =>{
        dispatch({ type: Types.GET_CONFIG_ALL})
    
        try {
            const configgg = await ConfigurationAPI.getAllAuthotityEmp();
            
            dispatch({
                type: Types.GET_CONFIG_ALL_SUCCESS,
                payload: configgg.data
            })
        } catch(error) {
            dispatch({
                type: Types.GET_CONFIG_ALL_FAILURE,
                payload: error.toString()
            })
        }
    },
    updateBhTime: (data) => async(dispatch) =>{
        dispatch({ type: Types.GET_CONFIG_BIZ_MODI})
    
        try {
            const configgg = await ConfigurationAPI.updateBhTime(data);
            
            dispatch({
                type: Types.GET_CONFIG_BIZ_MODI_SUCCESS,
                payload: configgg.data
            })
        } catch(error) {
            dispatch({
                type: Types.GET_CONFIG_BIZ_MODI_FAILURE,
                payload: error.toString()
            })
        }
    },
    modifyEmpAuthority: (update) => async(dispatch) =>{
        dispatch({ type: Types.GET_CONFIG_ALL})
    
        try {
            const configgg = await ConfigurationAPI.modifyEmpAuthority(update);
            
            dispatch({
                type: Types.GET_CONFIG_ALL_SUCCESS,
                payload: configgg.data
            })
        } catch(error) {
            dispatch({
                type: Types.GET_CONFIG_ALL_FAILURE,
                payload: error.toString()
            })
        }
    }
}

export default ConfigurationActions;
