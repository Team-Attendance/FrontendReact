import axios from "axios";
import { API_URL } from "../utils/constants/Config";

export const getAllEmp = () => {
    return axios.get(`${API_URL}/emp-list/all`)
}

export const getEmpByName = (empName) => {
    return axios.get(`${API_URL}/emp-list/name=${empName}`)
}
export const getEmpByNum = (empNo) => {
    return axios.get(`${API_URL}/emp-list/no=${empNo}`)
}
