import axios from "axios"
import { API_URL } from "../utils/constants/Config"

export const getLeaveRequest = (empNo) => {
    return axios.get(`${API_URL}/emp-leave/${empNo}`)
}