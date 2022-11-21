import axios from "axios";
import { API_URL } from "../utils/constants/Config";

export const getAllEmp = () => {
    return axios.get(`${API_URL}/emp-list/all`)
}

export const getEmp = (option, query) => {
    return axios.get(`${API_URL}/emp-list/${option}=${query}`)
}
