import {useEffect, useRef, useState} from "react";
import {postEmpRegist} from "../../api/EmpAPI";
import '../../css/empInfo.scss'

const EmpRegistModal = ({closeModal, props}) => {

    const [deptName, setDeptName] = useState();
    const handleDeptName = (e) => {
        setDeptName(e.target.value);
    }

    const [empName, setEmpName] = useState();
    const handleEmpName = (e) => {
        setEmpName(e.target.value);
    }

    const [empPwd, setEmpPwd] = useState();
    const handleEmpPwd = (e) => {
        setEmpPwd(e.target.value);
    }

    const [empPosition, setEmpPosition] = useState();
    const handleEmpPosition = (e) => {
        setEmpPosition(e.target.value);
    }

    const [empEmail, setEmpEmail] = useState();

    function  handleDupl(e){

    }
    const handleEmpEmail = (e) => {
        setEmpEmail(e.target.value+"@douzon.com");
    }

    const [empBirth, setEmpBirth] = useState();
    const handleEmpBirth = (e) => {
        setEmpBirth(e.target.value);
    }

    const [empFirstDayOfWork, setEmpFirstDayOfWork] = useState();
    const handleEmpFirstDayOfWork = (e) => {
        setEmpFirstDayOfWork(e.target.value);
    }

    const [empCellPhone, setEmpCellPhone] = useState();
    const cPhoneRef = useRef();
    const handleEmpCellPhone = (e) => {
        // 숫자가 아닌 문자 공백으로 변경
        const value = cPhoneRef.current.value.replace(/\D+/g,"");
        const numLength = 11;
        let result;
        result ="";
        // 자동 하이픈
        for( let i = 0; i < value.length && i < numLength; i++ ){
            switch (i){
                case 3:
                    result += "-";
                    break;
                case 7:
                    result += "-";
                    break;
                default:
                    break;
            }
            result += value[i];
        }
        cPhoneRef.current.value = result;
        setEmpCellPhone(e.target.value);
    }

    function handleRegist(e) {
        e.preventDefault();
        const data = {
            "deptName": deptName,
            "empName": empName,
            "empPwd": empPwd,
            "empPosition": empPosition,
            "empEmail": empEmail,
            "empBirth": empBirth,
            "empCellPhone": empCellPhone,
            "empFirstDayOfWork": empFirstDayOfWork
        };
        postEmpRegist(data);
        closeModal();
    }

    return (
        <div className="empInfo">
            <div>
                <h1 className="infoTitle"><span>사원 등록</span>
                </h1>
            </div>
            <div className="infoBox">
                <div className="infoContent">
                    <div className="infoUl">
                        <li className="infoLi">
                            <div className="infoLabel"> 부서명</div>
                            <select className="infoInput" name='deptName' required='부서를 선택하세요'  onChange={handleDeptName}>
                                <option value={'none'}>부서</option>
                                <option value={'인사'}>인사</option>
                                <option value={'인사'}>영업</option>
                                <option value={'회계'}>회계</option>
                                <option value={'경영지원'}>경영지원</option>
                                <option value={'개발'}>개발</option>
                            </select>
                        </li>
                        <li className="infoLi">
                            <div className="infoLabel"> 사원이름</div>
                            <input className="infoInput" type="text" name='empName' placeholder='사원이름'
                                    required onChange={handleEmpName}></input>
                        </li>
                        <li className="infoLi">
                            <div className="infoLabel"> 비밀번호</div>
                            <input className="infoInput" type="password" name='empPwd' placeholder='비밀번호'
                                   required onChange={handleEmpPwd}></input>
                        </li>

                        <li className="infoLi">
                            <div className="infoLabel"> 직급</div>
                            <select className="infoInput" name='empPosition'
                                    required onChange={handleEmpPosition}>
                                <option value={'none'}>직급</option>
                                <option value={'수석연구원'}>수석연구원</option>
                                <option value={'책임연구원'}>책임연구원</option>
                                <option value={'선임연구원'}>선임연구원</option>
                                <option value={'연구원'}>연구원</option>
                                <option value={'연구보조원'}>연구보조원</option>
                            </select>
                        </li>
                        <li className="infoLi">
                            <div className="infoLabel"> QR</div>
                            <input className="infoInputemail" type="file" name=''></input>
                        </li>
                        <li className="infoLi">
                            <div className="infoLabel"> 사원 사진</div>
                            <input className="infoInputemail" type="file" name=''></input>
                        </li>

                        <li className="infoLi">
                            <div className="infoLabel"> 메일주소 ID</div>
                            <input className="infoInputemail" type="email" name='empEmail' placeholder='이메일아이디'
                                   required onChange={handleEmpEmail}></input>
                            <button className="duplBtn" onClick={handleDupl()}>중복확인</button>
                            <div>@douzone.com</div>
                        </li>

                        <li className="infoLi">
                            <div className="infoLabel"> 생년월일</div>
                            <input className="infoInput" type="date" name='empBirth'
                                   required onChange={handleEmpBirth}></input>
                        </li>
                        <li className="infoLi">
                            <div className="infoLabel"> 입사일</div>
                            <input className="infoInput" type="date" name='empFirstDayOfWork'
                                   required onChange={handleEmpFirstDayOfWork}></input>
                        </li>
                        <li className="infoLi">
                            <div className="infoLabel"> 휴대폰번호</div>
                            <input className="infoInput" type="tel" name='empCellPhone' placeholder='숫자만 입력하세요'
                                   maxLength='13' value={empCellPhone} ref={cPhoneRef} required
                                   onChange={handleEmpCellPhone}></input>
                        </li>
                        <li className="infoLi">
                            <div className="infoLabel"> 사내번호</div>
                            <input className="infoInput" name='empOfficePhone' placeholder='사원입력'  readOnly></input>
                        </li>
                        <li className="infoLi">
                            <div className="infoLabel"> 비상연락</div>
                            <input className="infoInput" name='empContactList' placeholder='사원입력' readOnly></input>
                        </li>

                        <div className="button">
                            <button className="handleBtn" onClick={handleRegist}
                                    name='empRegistSubmit' disabled={!(deptName&&empName&&empPwd&&empPosition&&empEmail&&empBirth&&empFirstDayOfWork&&empCellPhone)}>
                                <a href="/admin/emp-management" > 등록</a>
                            </button>
                            <button className="handleBtn" value='취소' name='empRegistclose' onClick={closeModal}> 취소
                            </button>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
}

export default EmpRegistModal;