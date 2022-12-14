import axios from "axios";
import {API_URL} from "../utils/constants/Config";
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

export const postEmpRegist = (data) => {
    return axios({
        headers: {
            "Content-Type": "multipart/form-data",
        },
        url: `${API_URL}/admin/emp-registration`,
        method: "POST",
        data: data
    })
}

export const getEmpinfo = (empNo) => {
    return axios.get(`${API_URL}/emp/emp-info/${empNo}`)
}

export const updateEmpInfoByAdmin = (data) => {
    return axios.post(`${API_URL}/report/empinfo-modify`, data)
}

export const empEmailCheck = (empEmail) => {
    return axios.post(`${API_URL}/emp/findemail`, empEmail)
}

export const empPwdCheck = (data) => {
    return axios.post(`${API_URL}/emp/empinfo-pwdchange`, data)
}

export const empPVChange = (data) => {
    return axios.post(`${API_URL}/emp/empinfo-modify`, data)
}


export const countLeave = (empNo, year) => {
    return axios.get(`${API_URL}/emp/leave/${empNo}/${year}`)
}

export const countOdd = (empNo, year) => {
    return axios.get(`${API_URL}/emp/odd/${empNo}/${year}`)
}

export const postAdmUpdate = (data) => {
    return axios.post(`${API_URL}/report/empinfo-modify`, data)
}

// export const postAdmUpdate = (data) => {
//     return axios({
//         headers: {
//             "Content-Type": "multipart/form-data",
//         },
//         url: `${API_URL}/report/empinfo-modify`,
//         method: "POST",
//         data: data
//     })
// }