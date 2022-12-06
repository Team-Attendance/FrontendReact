import axios from "axios";
import { API_URL } from "../utils/constants/Config";
import LoginAction from "../redux/modules/Login/LoginAction";

export const Login = (logindata) =>
    LoginAction({
    url: "login",
    method: "post",
    data: logindata,
  })

export const getAllEmp = () => {
    return axios.get(`${API_URL}/emp-list/all`)
}

export const getEmp = (option, query) => {
    return axios.get(`${API_URL}/emp-list/${option}=${query}`)
}

export const postEmpRegist = (data) =>{
    return axios.post(`${API_URL}/admin/emp-registration`, data)
}

export const getEmpinfo = (empNo) =>{
    return axios.get(`${API_URL}/emp/emp-info/${empNo}`)
}

export const updateEmpInfoByAdmin = (data) => {
    return axios.post(`${API_URL}/report/empinfo-modify`, data)
}