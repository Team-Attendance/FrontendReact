import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginProc from "../components/LoginProc";
import { changeField, changeFields } from "../redux/modules/Login/auth";
import * as api from "../api/EmpAPI";
import Swal from "sweetalert2";



const LoginPage = () => {
    const [tab,setTab]=useState("tab1");
    const dispatch = useDispatch();
    const { login } = useSelector(({ auth }) => {
        return {
            login: auth.login
        };
    });

    const loginInit = {
        empNo: "",
        empPwd : "",
    };

    useEffect(()=> {
        dispatch(changeFields({form:'login', key:loginInit}));
    }, [dispatch]);


    // 로그인 인풋
    const onLoginChange = (e) => {
        e.preventDefault();
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: "login",
                key:name,
                value,
            })
        );
    };


    // 로그인 submit
    const onLogin = async(e) =>{
        e.preventDefault();
        const { empNo, empPwd } = login;
        const data = {
            "empNo": empNo,
            "empPwd" : empPwd,
        };

        api.Login(data).then((res) => {
            if(res.data.empNo){
                localStorage.setItem("ACCESS_TOKEN", res.data.empToken);
                sessionStorage.setItem("empNo", res.data.empNo);
                sessionStorage.setItem("deptName", res.data.deptName);
                sessionStorage.setItem("empName", res.data.empName);
                sessionStorage.setItem("empPosition", res.data.empPosition);
                sessionStorage.setItem("empAuthority", res.data.empAuthority);

                if(res.data.empAuthority === 'ROLE_ADMIN') {
                    window.location.href = "/admin/main";
                }else if(res.data.empAuthority === 'ROLE_EMP') {
                    window.location.href = "/emp/main";
                }
            }else{
                Swal.fire({ title: '로그인에 실패했습니다.',
                    confirmButtonText: '닫기',
                    confirmButtonColor: '#3085d6',
                    icon: 'error'
                }).then((result) => {
                    if(result.isConfirmed){
                        window.location.href = "/";
                    }
                });

            }
        })
    }

    const onTab = (e) => {
        dispatch(changeFields({form:'login', key:loginInit}));
        setTab(e.target.value);
    }

  return (
      <div style={{width:'100%', height:'100vh', display: 'flex'}}>
          <div style={{width:'50%', height:'100%', backgroundImage: 'url("./background.jpg")', backgroundSize: 'cover'}}>

          </div>
          <div style={{width:'50%', height:'100%', margin: '0 auto'}}>
              <LoginProc
                  login={ login }
                  onLoginChange = { onLoginChange }
                  onLogin = { onLogin }
                  tab={tab}
                  onTab={onTab}
              />
          </div>
      </div>
  );

};

export default LoginPage;