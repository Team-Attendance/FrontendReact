import '../../css/EmpPwdModiModal.scss';
import {useRef, useState} from "react";
import * as api from "../../api/EmpAPI";
import Swal from "sweetalert2";

const EmpPwdModiModal =({closeModal}) => {
    const [pwd, setPwd] = useState('');
    const existPwd = useRef();
    const chgPwd= useRef();
    const chckPwd= useRef();
    let empNo = sessionStorage.getItem("empNo");
    const pwd_reg = "^[~!@#$%^&*()_+|<>?:{}a-z0-9A-Z]{8,16}$";
    const [empPwdB , setEmpPwdB] = useState([{}]);
    const [error, setError] = useState();


    // 비밀번호 인치 확인
    const handleChgPwd = (e)=>{
        e.preventDefault();
        if( e.target.value.length < 8){
            setError("8자리 미만입니다.");
        }else {
            setError("8자리 이상입니다.");
        }
        setPwd(e.target.value);

    }
    const handleChckPwd = (e)=>{
        e.preventDefault();
        chckPwd.current = e.target.value;
        setEmpPwdB(pwd === chckPwd.current);
        if(pwd === chckPwd.current){
            setError("비밀번호 일치");
        }else{
            setError("비밀번호 불일치");
        }
    }

    // 비밀번호 수정
    const onChangeCheck = (e) => {
        e.preventDefault();
        if(empPwdB && chgPwd.current != null && chckPwd.current != null){
            const data = {
                "empNo" : empNo,
                "existPwd" : existPwd.current,
                "empPwd" : chgPwd.current
            }
            api.empPwdCheck(data).then((res)=>{
                if(res.data){
                    Swal.fire({ title: '비밀번호가 변경되었습니다.',
                        confirmButtonText: '닫기',
                        confirmButtonColor: '#3085d6',
                        icon: 'success'
                    });
                    window.location.href="/emp/emp-info";
                }else {
                    Swal.fire({ title: '비밀번호가 일치하지 않습니다.',
                        confirmButtonText: '닫기',
                        confirmButtonColor: '#3085d6',
                        icon: 'error'
                    })
                }
            })
        }else {
           setError("비밀번호를 정확히 입력하지 않았습니다.");
        }
    }

    return(
        <div className="pwd-modify">
            <div>
                <h1 className="pwdTitle">비밀번호 수정</h1>
            </div>
            <div className="infoBox">
                <div className="infoContent">
                    <div className="infoUl">
                        <li className="infoLi">
                            <div className="infoLabel"> 현재 비밀번호</div>
                            <input className="infoInput" type="password"
                                    placeholder="현재 비밀번호"
                                   onChange={(e)=>{ existPwd.current=e.target.value; }}/>
                        </li>
                        <li className="infoLi">
                            <div className="infoLabel"> 변경할 비밀번호</div>
                            <input className="infoInput" name="changePwd" type="password" pattern={pwd_reg}
                                    maxLength='13' placeholder="변경할 비밀번호" onChange={handleChgPwd}/>
                        </li>
                        <li className="infoLi">
                            <div className="infoLabel"> 변경 비밀번호 확인</div>
                            <input className="infoInput" type="password"  pattern={pwd_reg}
                                   maxLength='13' placeholder="비밀번호 확인" onChange={handleChckPwd} />
                        </li>
                        <li style={{padding: '7px 0'}}> 변경 비밀번호 일치 여부  {error}</li>

                        <div className="button">
                            <button className="handleBtn" value='닫기'  onClick={closeModal}> 취소
                            </button>
                            <button className="handleBtn" onClick={onChangeCheck}>
                                수정
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default EmpPwdModiModal;