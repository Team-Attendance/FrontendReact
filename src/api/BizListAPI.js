import axios from "axios"
import { API_URL } from "../utils/constants/Config"


export const getEmpinfo = (empNo) =>{
    return axios.get(`${API_URL}/emp/emp-info/${empNo}`)
}