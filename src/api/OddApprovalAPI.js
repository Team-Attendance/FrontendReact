import axios from "axios"
import {API_URL} from "../utils/constants/Config"

export const getAllOddApproval = (deptName, year) => {
    return axios.get(`${API_URL}/approval/odd/all/${deptName}/${year}`)
}
export const searchOddApproval = (option, query, deptName, year) => {
    return axios.get(`${API_URL}/approval/odd/${option}=${query}/${deptName}/${year}`)
}
export const updateOddApproval = (data) => {
    return axios.put(`${API_URL}/approval/odd/update/`, data)
}
export const countApproval = (deptName, year) => {
    return axios.get(`${API_URL}/approval/odd/count/${deptName}/${year}`)
}
export const getOddRequest = (empNo, year) => {
    return axios.get(`${API_URL}/approval/odd/request/${empNo}/${year}`)
}