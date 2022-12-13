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

export const updateBhTime = (data) => {
    return axios.post(`${API_URL}/empconfiguration/bizhour/post`, data)
}

export const modifyEmpAuthority = (update) => {
    return axios.post(`${API_URL}/empconfiguration/authority/post`, update)
}