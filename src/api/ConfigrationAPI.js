import axios from "axios";
import { API_URL } from "../utils/constants/Config";

export const getresultEmp = () => {
    return axios.get(`${API_URL}/empconfiguration/result`)    
}

export const getAllEmp = () => {
    return axios.get(`${API_URL}/empconfiguration/auth`)
}
