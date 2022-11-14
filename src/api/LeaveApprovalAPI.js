import axios from "axios"
import { API_URL } from "../utils/constants/Config"

export const getAllLeaveRequest = () => {
    return axios.get(`${API_URL}/leave-approval/all`)
}