import '../css/Login.scss';


const LoginProc = ({
   onLogin, login, empnoErr, iderr,
   onLoginChange,
  }) => {
  /*로그인 페이지 로그아웃처리*/
    sessionStorage.clear();
    localStorage.clear();


  return (
    <div className='loginForm'>
      <div lgin-h1>AMATEUR10</div>
      <div className='forWrap' >
        <form onSubmit={onLogin}>

          <input className='user-id' type="text"  name="empNo" placeholder="사원번호" autoComplete="off" onChange={onLoginChange} value={login.empNo} autoFocus/>
          <input className='user-pw' type="password" name="empPwd" placeholder="비밀번호" onChange={onLoginChange} value={login.empPwd} required="reqired"  />

          <button className='login-submit' type="submit" class="login-submit" value="LOGIN" >로그인</button>
          <div className='forGet'>
            <span>로그인 불가 시 전산팀에게 문의 바랍니다.</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginProc;