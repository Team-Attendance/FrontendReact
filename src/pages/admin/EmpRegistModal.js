import {useRef, useState, useCallback} from "react";
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


    let  regExp = /[ {}[\]/?,;:|)*~`!^\-_+┼<>#$%&'"\\(=]/gi;

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
        api.empEmailCheck(data).then((res)=>{
           if(res.data) {
               alert("중복된 이메일입니다.");
               setEmpEmail('');
               emailRef.current.focus();
           }else if(empEmail ===''){
               alert("이메일아이디가 입력되지 않았습니다.");
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
        result = "";
        // 자동 하이픈
        for (let i = 0; i < value.length && i < numLength; i++) {
            switch (i) {
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
    // 이미지
    const inputRef = useRef(null)
    const [empImage, setEmpImage] = useState();
    const onUploadImage = useCallback((e) => {
        if (!e.target.files) {
            return;
        }
        setEmpImage(e.target.files[0])
    }, []);


    const onUploadImageButtonClick = useCallback(() => {
        if (!inputRef.current) {
            return;
        }
        inputRef.current.click();
    }, []);


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

        }else if(dupleEmail|| empEmail==null || empEmail===''|| regExp.test(empEmail)){
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
            let formData = new FormData()

            formData.append("deptName", deptName)
            formData.append("empName", empName)
            formData.append("empPwd", empPwd)
            formData.append("empPosition", empPosition)
            formData.append("empEmail", `${empEmail}@douzone.com`)
            formData.append("empBirth", empBirth)
            formData.append("empCellPhone", empCellPhone)
            formData.append("empFirstDayOfWork", empFirstDayOfWork)
            formData.append("empPhoto", empImage)

            api.postEmpRegist(formData).then((res)=>{
               let result = res.data;
               if(result){
                   alert("사원등록이 완료 됐습니다.");
                   window.location.href="/admin/report";
                   closeModal();
               }
            });
        }

    }

    return (
        <div className="emp-reg">
            <div>
                <h1 className="reginfoTitle"><span>사원 등록</span>
                </h1>
            </div>
            <div className="reginfoBox">
                <div className="reginfoContent">
                    <div className="reginfoUl">
                        <li className="reginfoLi">
                            <div className="reginfoLabel"> 부서명</div>
                            <select className="reginfoInput" name='deptName' required='부서를 선택하세요'
                                    onChange={handleDeptName}>
                                <option value={'none'}>부서</option>
                                <option value={'인사'}>인사</option>
                                <option value={'인사'}>영업</option>
                                <option value={'회계'}>회계</option>
                                <option value={'경영지원'}>경영지원</option>
                                <option value={'개발'}>개발</option>
                            </select>
                        </li>
                        <li className="reginfoLi">
                            <div className="reginfoLabel"> 사원이름</div>
                            <input className="reginfoInput" type="text" name='empName' placeholder='사원이름'
                                    ref={nameRef} onChange={handleEmpName}></input>
                        </li>
                        <li className="reginfoLi">
                            <div className="reginfoLabel"> 비밀번호</div>
                            <input className="reginfoInput" type="password" name='empPwd' placeholder='비밀번호'
                                   required onChange={handleEmpPwd}></input>
                        </li>

                        <li className="reginfoLi">
                            <div className="reginfoLabel"> 직급</div>
                            <select className="reginfoInput" name='empPosition'
                                    required onChange={handleEmpPosition}>
                                <option value={'none'}>직급</option>
                                <option value={'수석연구원'}>수석연구원</option>
                                <option value={'책임연구원'}>책임연구원</option>
                                <option value={'선임연구원'}>선임연구원</option>
                                <option value={'연구원'}>연구원</option>
                                <option value={'연구보조원'}>연구보조원</option>
                            </select>
                        </li>
                        <li className="reginfoLi">
                            <div className="reginfoLabel"> 사원 사진</div>
                            <input className="reginfoInputfile" type="file" accept="image/*" ref={inputRef}
                                   onChange={onUploadImage} style={{display: 'none'}}/>
                            <button onClick={onUploadImageButtonClick}>이미지 등록</button>
                            {empImage &&
                                <img alt={''} src={URL.createObjectURL(empImage)} />
                            }
                        </li>

                        <li className="reginfoLi">
                            <div className="reginfoLabel"> 메일주소 ID</div>
                            <input className="reginfoInputemail" type="email" name='empEmail' placeholder='이메일아이디'
                                   ref={emailRef} value={empEmail} onChange={handleEmpEmail}></input>
                            <div>@douzone.com</div>
                            <button onClick={handleDupl}>중복확인</button>
                        </li>

                        <li className="reginfoLi">
                            <div className="reginfoLabel"> 생년월일</div>
                            <input className="reginfoInput" type="date" name='empBirth'
                                   required onChange={handleEmpBirth}></input>
                        </li>
                        <li className="reginfoLi">
                            <div className="reginfoLabel"> 입사일</div>
                            <input className="reginfoInput" type="date" name='empFirstDayOfWork'
                                   required onChange={handleEmpFirstDayOfWork}></input>
                        </li>
                        <li className="reginfoLi">
                            <div className="reginfoLabel"> 휴대폰번호</div>
                            <input className="reginfoInput" type="tel" name='empCellPhone' placeholder='숫자만 입력하세요'
                                   maxLength='13' value={empCellPhone} ref={phoneRef}
                                   onChange={handleEmpCellPhone}></input>
                        </li>
                        <li className="reginfoLi">
                            <div className="reginfoLabel"> 사내번호</div>
                            <input className="reginfoInput" name='empOfficePhone' placeholder='사원입력' readOnly></input>
                        </li>
                        <li className="reginfoLi">
                            <div className="reginfoLabel"> 비상연락</div>
                            <input className="reginfoInput" name='empContactList' placeholder='사원입력' readOnly></input>
                        </li>

                        <div className="regbutton">
                            <button className="reghandleBtn" onClick={handleRegist}
                                    name='empRegistSubmit'>
                                등록
                            </button>
                            <button className="reghandleBtn" value='취소' name='empRegistclose' onClick={closeModal}> 취소
                            </button>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
}

export default EmpRegistModal;