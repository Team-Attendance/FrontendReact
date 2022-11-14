import axios from "axios";


const client = axios.create();

// localhost
client.defaults.baseURL= "http://localhost:8080/";

// 인터셉터 설정
client.interceptors.response.use(
  (response) => {
    // 요청 성공 시 특정 작업 수행
    return response;
  },
  (error) => {
    // 요청 실패 시 특정 작업 수행
    // 400 ~ 500
    if (error.response.status === 400) {
      console.error(error);
      window.location.href = "/";
    }
    if (error.response.status === 401) {
      window.location.href = "/";
    }
    if (error.response.status === 403) {
      // alert("접근 권한이 없습니다");
      window.location.href = "/";
    }
    if (error.response.status === 500){
      // alert("이미")
        }
    return Promise.reject(error);
  }
);

export default client;