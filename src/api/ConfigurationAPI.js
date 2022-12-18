import axios from "axios";
import { API_URL } from "../utils/constants/Config";

export const getBizHour = (deptName) => {
    return axios.get(`${API_URL}/config/bizhour/${deptName}`)
}

export const getEmpAuth = (deptName) => {
    return axios.get(`${API_URL}/config/auth/${deptName}`)
}
export const searchEmpAuth = (option, query, deptName) => {
    return axios.get(`${API_URL}/config/auth/search/${option}=${query}/${deptName}`)
}

export const updateBizHour = (data) => {
    return axios.put(`${API_URL}/config/update/bizhour/`, data)
}

export const updateEmpAuth = (data) => {
    return axios.put(`${API_URL}/config/update/auth/`, data)
}