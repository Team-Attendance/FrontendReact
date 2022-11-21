import axios from "axios"
import { API_URL } from "../utils/constants/Config"

export const getAllOddApproval = () => {
    return axios.get(`${API_URL}/odd-approval/all`)
}
export const getOddApproval = (option,query) => {
    return axios.get(`${API_URL}/odd-approval/${option}=${query}`)
}