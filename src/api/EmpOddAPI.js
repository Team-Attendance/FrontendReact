import axios from "axios"
import { API_URL } from "../utils/constants/Config"

export const getOddRequest = (empNo) => {
    return axios.get(`${API_URL}/emp-odd/${empNo}`)
}