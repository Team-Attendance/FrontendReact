import axios from "axios";
import { API_URL } from "../utils/constants/Config";

export const getResultEmp = () => {
    return axios.get(`${API_URL}/empconfiguration/result`)    
}

export const getAuthEmp = () => {
    return axios.get(`${API_URL}/empconfiguration/auth`)
}

export const getAllAuthotityEmp = () => {
    return axios.get(`${API_URL}/empconfiguration/all`)
}

export const getEmpBiz = () => {
    return axios.get(`${API_URL}/empconfiguration/bizhour`)
}
