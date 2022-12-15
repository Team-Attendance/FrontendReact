import axios from "axios"
import { API_URL } from "../utils/constants/Config"

export const getWeeklyBizTime = (empNo) => {
    return axios.get(`${API_URL}/report/weekliybiztime/${empNo}`)
}

export const getMonthlyOdd = (empNo, year) => {
    return axios.get(`${API_URL}/report/monthliyodd/${empNo}/${year}`)
}

