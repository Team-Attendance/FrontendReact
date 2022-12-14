import axios from "axios"
import {API_URL} from "../utils/constants/Config"

export const getAllLeaveApproval = (year) => {
    return axios.get(`${API_URL}/approval/leave/all/${year}`)
}
export const searchLeaveApproval = (option, query, year) => {
    return axios.get(`${API_URL}/approval/leave/${option}=${query}/${year}`)
}
export const updateLeaveApproval = (data) => {
    return axios.put(`${API_URL}/approval/leave/update/`, data)
}
export const countApproval = (year) => {
    return axios.get(`${API_URL}/approval/leave/count/${year}`)
}
export const getLeaveRequest = (empNo, year) => {
    return axios.get(`${API_URL}/approval/leave/request/${empNo}/${year}`)
}