import axios from "axios"
import { API_URL } from "../utils/constants/Config"

export const getAllLeaveApproval = () => {
    return axios.get(`${API_URL}/leave-approval/all`)
}
export const getLeaveApproval = (option,query) => {
    return axios.get(`${API_URL}/leave-approval/${option}=${query}`)
}

export const updateLeaveApproval = (empNo, state) => {
    return axios.put(`${API_URL}/${empNo}/${state}`)
}