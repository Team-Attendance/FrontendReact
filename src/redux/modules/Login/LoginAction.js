import axios from "axios";

const LoginAction = axios.create();

// linux
LoginAction.defaults.baseURL = process.env.REACT_APP_API_URL;
LoginAction.defaults.headers.common["Authorization"] =
    "Bearer " + sessionStorage.getItem("ACCESS_TOKEN");

// 인터셉터 설정
LoginAction.interceptors.response.use(
    (response) => {
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

export default LoginAction;