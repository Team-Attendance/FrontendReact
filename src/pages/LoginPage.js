import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginProc from "../components/LoginProc";
import { changeField, changeFields } from "../redux/modules/Login/auth";
import * as api from "../api/EmpAPI";



const LoginPage = () => {


  const [error, setError] = useState(null);
  const [iderr, setIderr] = useState();
  const [tab, setTab] = useState("tab1");

  const dispatch = useDispatch();

  const { login } = useSelector(({ auth }) => {
    return {
      login: auth.login
    };
  });

  const loginInit = {
    empNo: "",
    empPwd: "",
  };

  useEffect(() => {
    dispatch(changeFields({ form: 'login', key: loginInit }));
  }, [dispatch]);


  // 로그인 인풋
  const onLoginChange = (e) => {
    e.preventDefault();

    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };


  // 로그인 submit
  const onLogin = async (e) => {
    e.preventDefault();
    const { empNo, empPwd } = login;

    const data = {
      "empNo": empNo,
      "empPwd": empPwd,
    };

    api.Login(data).then((res) => {
      if (res.data.empToken) {
        localStorage.setItem("ACCESS_TOKEN", res.data.empToken);
        localStorage.setItem("empNo", res.data.empNo);
        localStorage.setItem("deptName", res.data.deptName);
        localStorage.setItem("empName", res.data.empName);
        localStorage.setItem("empPosition", res.data.empPosition);
        localStorage.setItem("empAuthority", res.data.empAuthority);

        console.log('로그인 성공')
        setTimeout(() => {
          window.location.href = "/emp/main";
        }, 1500)
      } else {
        console.log('로그인 실패')
        setTimeout(() => {
          window.location.reload();
        }, 1800)
      }
    })
  }

  const onTab = (e) => {
    dispatch(changeFields({ form: 'login', key: loginInit }));
    setIderr();
    setError();
    setTab(e.target.value);
  }

  return (
    <div style={{width:'100%', height:'100vh', display: 'flex'}}>
      <div style={{width:'50%', height:'100%', backgroundImage: 'url("/user.jpg")', backgroundSize: 'cover'}}>

      </div>
      <div style={{width:'50%', height:'100%', margin: '0 auto'}}>
        <LoginProc
          login={login}
          onLoginChange={onLoginChange}
          onLogin={onLogin}
          error={error}
          iderr={iderr}
          tab={tab}
          onTab={onTab}
        />
      </div>

    </div>
  );

};

export default LoginPage;