import axios from "axios"
import {API_URL} from "../utils/constants/Config"

export const getAllLeaveApproval = (deptName, year) => {
    return axios.get(`${API_URL}/approval/leave/all/${deptName}/${year}`)
}
export const getLeaveApprovalByState = (state, deptName, year) => {
    return axios.get(`${API_URL}/approval/leave/state/${state}/${deptName}/${year}`)
}
export const searchLeaveApproval = (option, query, deptName, year) => {
    return axios.get(`${API_URL}/approval/leave/${option}=${query}/${deptName}/${year}`)
}
export const updateLeaveApproval = (data) => {
    return axios.put(`${API_URL}/approval/leave/update/`, data)
}
export const countApproval = (deptName, year) => {
    return axios.get(`${API_URL}/approval/leave/count/${deptName}/${year}`)
}
export const getLeaveRequest = (empNo, year) => {
    return axios.get(`${API_URL}/approval/leave/request/${empNo}/${year}`)
}
export const getLeaveRequestByState = (state, empNo, year) => {
    return axios.get(`${API_URL}/approval/leave/request/state=${state}/${empNo}/${year}`)
}