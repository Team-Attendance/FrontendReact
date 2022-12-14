import axios from "axios"
import {API_URL} from "../utils/constants/Config"

export const getAllOddApproval = (year) => {
    return axios.get(`${API_URL}/approval/odd/all/${year}`)
}
export const searchOddApproval = (option, query, year) => {
    return axios.get(`${API_URL}/approval/odd/${option}=${query}/${year}`)
}
export const updateOddApproval = (data) => {
    return axios.put(`${API_URL}/approval/odd/update/`, data)
}
export const countApproval = (year) => {
    return axios.get(`${API_URL}/approval/odd/count/${year}`)
}
export const getOddRequest = (empNo, year) => {
    return axios.get(`${API_URL}/approval/odd/request/${empNo}/${year}`)
}