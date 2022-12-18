import Types from "../../ActionConstants";
import * as ConfigurationAPI from "../../../api/ConfigurationAPI";


const ConfigurationActions = {
    getBizHour: (deptName) => async (dispatch) => {
        dispatch({type: Types.GET_BIZ_HOUR})

        try {
            const config = await ConfigurationAPI.getBizHour(deptName);

            dispatch({
                type: Types.GET_BIZ_HOUR_SUCCESS,
                payload: config.data
            })
        } catch (error) {
            dispatch({
                type: Types.GET_BIZ_HOUR_FAILURE,
                payload: error.toString()
            })
        }
    },
    getEmpAuth: (deptName) => async (dispatch) => {
        dispatch({type: Types.GET_AUTH})

        try {
            const config = await ConfigurationAPI.getEmpAuth(deptName);

            dispatch({
                type: Types.GET_AUTH_SUCCESS,
                payload: config.data
            })
        } catch (error) {
            dispatch({
                type: Types.GET_AUTH_FAILURE,
                payload: error.toString()
            })
        }
    },
    searchEmpAuth: (option, query, deptName) => async (dispatch) => {
        dispatch({type: Types.GET_AUTH})

        try {
            const config = await ConfigurationAPI.searchEmpAuth(option, query, deptName);

            dispatch({
                type: Types.GET_AUTH_SUCCESS,
                payload: config.data
            })
        } catch (error) {
            dispatch({
                type: Types.GET_AUTH_FAILURE,
                payload: error.toString()
            })
        }
    },
}

export default ConfigurationActions;
