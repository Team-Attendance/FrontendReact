import axios from "axios"
import { API_URL } from "../utils/constants/Config"

export const getEmpLeave = () => {
    return axios.get(`${API_URL}/leave-approval/all`)
}

export const getEmpOdd = () => {
    return axios.get(`${API_URL}/odd-approval/all`)
}

export const getEmpInfo = (empNo) =>{
    return axios.get(`${API_URL}/report/empno=${empNo}`)
}