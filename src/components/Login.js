import styled from "styled-components";

const LoginForm = styled.div`
  width: 500px;
  border: 1px solid gray;
  padding: 30px 50px;

  & h1{
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
`

const FormWrap = styled.div`
  margin: 30px 0;

  & .user-id{
    width: 100%;
    padding: 15px 30px;
    fontSize: 0.8rem;
    margin-bottom: 15px;
    outline: none;
    border: 1px solid lightgray;
  }

  & .user-pw{
    width: 100%;
    padding: 15px 30px;
    fontSize: 0.8rem;
    margin-bottom: 45px;
    outline: none;
    border: 1px solid lightgray;
  }

  & .login-submit{
    width:100%;
    padding: 15px 0;
    fontSize: 0.8rem;
    margin-bottom: 5px;
    background-color: white;
    outline: none;
    border: 1px solid lightgray;
    cursor: pointer;
    transition: 0.2s;

    &:hover{
      color: white;
      background-color: lightgray;
    }
  }
`
const Forget = styled.div`
  text-align: center;

  & span{
    font-size: 0.7rem;
    color: gray;
  }
`


export function Login(){

  return (
        <LoginForm>
          <h1>AMATEUR10</h1>
          <FormWrap>
            <form action="#" method="post">
              <input type="text" class="emp_no" placeholder="사원번호"/>
              <input type="text" class="emp_pwd" placeholder="비밀번호"/>

              <input type="submit" class="login-submit" value="login"/>
              <Forget>
                <span>로그인 불가 시 근태 담당자에게 문의 바랍니다.</span>
              </Forget>
            </form>
          </FormWrap>
        </LoginForm>
  );
}

export default Login;