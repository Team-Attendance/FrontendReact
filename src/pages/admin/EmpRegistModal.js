import {useRef, useState} from "react";
import '../../css/EmpReg.scss'
import * as api from "../../api/EmpAPI";

const EmpRegistModal = ({closeModal, props}) => {
    // 초기 값 세팅
    const [deptName, setDeptName] = useState();
    const [empName, setEmpName] = useState();
    const [empPwd, setEmpPwd] = useState();
    const [empPosition, setEmpPosition] = useState();
    const [empEmail, setEmpEmail] = useState('');
    const [empBirth, setEmpBirth] = useState();
    const [empFirstDayOfWork, setEmpFirstDayOfWork] = useState();
    const [empCellPhone, setEmpCellPhone] = useState('');
    const [dupleEmail, setDupleEmail] = useState()
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    let  regExp = /[ \{\}\[\]\/?,;:|\)*~`!^\-_+┼<>\#$%&\'\"\\\(\=]/gi;

    const handleDeptName = (e) => {
        setDeptName(e.target.value);
    }
    const handleEmpName = (e) => {
        setEmpName(e.target.value);
    }
    const handleEmpPwd = (e) => {
        setEmpPwd(e.target.value);
    }
    const handleEmpPosition = (e) => {
        setEmpPosition(e.target.value);
    }
    const handleEmpEmail = (e) => {
        if(regExp.test(e.target.value)){
            alert('특수문자가 포함됐습니다.');
        }
        setEmpEmail(e.target.value);
    }

    const handleDupl=(e)=>{
        e.preventDefault();
        const data = { "empEmail":empEmail+"@douzone.com" }
        console.log("data "+data.empEmail);
        api.empEmailCheck(data).then((res)=>{
           if(res.data == true) {
               alert("중복된 이메일입니다.");
               setEmpEmail('');
               emailRef.current.focus();
           }else{
               alert("사용가능한 메일주소입니다.");
           }
           setDupleEmail(res.data);
        })
    }
    const handleEmpBirth = (e) => {
        setEmpBirth(e.target.value);
    }
    const handleEmpFirstDayOfWork = (e) => {
        setEmpFirstDayOfWork(e.target.value);
    }

    const handleEmpCellPhone = (e) => {
        // 숫자가 아닌 문자 공백으로 변경
        const value = phoneRef.current.value.replace(/\D+/g,"");
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
        phoneRef.current.value = result;
        setEmpCellPhone(e.target.value);
    }

    function handleRegist(e) {
        e.preventDefault();
        if(deptName == null){
            alert("부서를 선택해주세요");
        }else if(regExp.test(empName) || empName == null){
            alert("정확한 이름을 입력해주세요");
            nameRef.current.focus();
        }else if(empPwd == null){
            alert("비밀번호를 입력해주세요");
        }else if(empPosition == null){
            alert("직급을 해주세요");
        }else if(dupleEmail==true || regExp.test(empEmail)){
            alert("이메일 형식이 맞지 않습니다.");
            setEmpEmail('');
            emailRef.current.focus();
        }else if(empBirth == null){
            alert("생년월일을 입력해주세요");
        }else if(empFirstDayOfWork == null){
            alert("입사일을 입력해주세요");
        }else if(empCellPhone.length < 13){
           alert("정확한 휴대폰 번호를 입력해주세요");
           phoneRef.current.focus();
        } else {
            const data = {
                "deptName": deptName,
                "empName": empName,
                "empPwd": empPwd,
                "empPosition": empPosition,
                "empEmail": `${empEmail}@douzone.com`,
                "empBirth": empBirth,
                "empCellPhone": empCellPhone,
                "empFirstDayOfWork": empFirstDayOfWork
            };
            api.postEmpRegist(data).then((res)=>{
               let result = res.data;
               if(result == true){
                   alert("사원등록이 완료 됐습니다.");
                   window.location.href="/admin/emp-management";
               }
            });
        }


    }

    return (
        <div className="emp-reg">
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
                                    ref={nameRef} onChange={handleEmpName}></input>
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
                            <div className="infoLabel"> 사원 사진</div>
                            <input className="infoInputfile" type="file" name=''></input>
                        </li>

                        <li className="infoLi">
                            <div className="infoLabel"> 메일주소 ID</div>
                            <input className="infoInputemail" type="email" name='empEmail' placeholder='이메일아이디'
                                   ref={emailRef} value={empEmail} onChange={handleEmpEmail}></input>
                            <div>@douzone.com</div>
                            <button onClick={handleDupl}>중복확인</button>
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
                                   maxLength='13' value={empCellPhone} ref={phoneRef}
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

                        {}
                        <div className="button">
                            <button className="handleBtn" onClick={handleRegist}
                                    name='empRegistSubmit'>
                                등록
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