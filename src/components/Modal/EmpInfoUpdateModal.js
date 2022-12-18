import React, {useCallback, useRef} from "react";
import {useState} from "react";
import './EmpInfoUpdateModal.scss';
import * as api from "../../api/EmpAPI";

const EmpInfoUpdateModal = ({empInfoDetail, closeModal}) => {
    const [deptName, setDeptName] = useState(empInfoDetail.dept_name);
    const [empName, setEmpName] = useState(empInfoDetail.emp_name);
    const [empPwd, setEmpPwd] = useState(empInfoDetail.emp_no);
    const [empPosition, setEmpPosition] = useState(empInfoDetail.emp_position);
    const [empEmail, setEmpEmail] = useState(empInfoDetail.emp_email);
    const [empBirth, setEmpBirth] = useState(empInfoDetail.emp_birth);
    const [empFirstDayOfWork, setEmpFirstDayOfWork] = useState(empInfoDetail.emp_first_day_of_work);
    const [dupleEmail, setDupleEmail] = useState();
    const [chEmail, setChEmail] = useState();
    const nameRef = useRef();
    const emailRef = useRef();
    let regExp = /[ {}[\]/?,;:|)*~`!^\-_+┼<>#$%&'"\\(=]/gi;


    console.log(empInfoDetail)
    console.log(empFirstDayOfWork)
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
        if (regExp.test(e.target.value)) {
            alert('특수문자가 포함됐습니다.');
        }
        setEmpEmail(e.target.value);
    }
    const handleDupl = (e) => {
        e.preventDefault();
        const data = {"empEmail": empEmail}
        console.log("empemail : "+empEmail);
        api.empEmailCheck(data).then((res) => {
            if (res.data) {
                alert("중복된 이메일입니다.");
                emailRef.current.focus();
            } else if (empEmail === '') {
                alert("이메일아이디가 입력되지 않았습니다.");
                setEmpEmail('');
                emailRef.current.focus();
            } else {
                setChEmail(empEmail);
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

    // 이미지
    // const inputRef = useRef(null)
    // const [empImage, setEmpImage] = useState();
    // const onUploadImage = useCallback((e) => {
    //     if (!e.target.files) {
    //         return;
    //     }
    //     setEmpImage(e.target.files[0])
    // }, []);
    //
    //
    // const onUploadImageButtonClick = useCallback(() => {
    //     if (!inputRef.current) {
    //         return;
    //     }
    //     inputRef.current.click();
    // }, []);


    function handleRegist(e) {
        e.preventDefault();
        if (deptName == null) {
            alert("부서를 선택해주세요");
        } else if (regExp.test(empName) || empName == null) {
            alert("정확한 이름을 입력해주세요");
            nameRef.current.focus();
        } else if (empPwd == null) {
            alert("비밀번호를 입력해주세요");
        } else if (empPosition == null) {
            alert("직급을 해주세요");
        // } else if (dupleEmail || empEmail == null || empEmail === '' || regExp.test(empEmail)) {
        //     alert("이메일 형식이 맞지 않습니다.");
        //     setEmpEmail('');
        //     emailRef.current.focus();
        // } else if (empBirth == null) {
        //     alert("생년월일을 입력해주세요");
        // } else if (empFirstDayOfWork == null) {
        //     alert("입사일을 입력해주세요");
        } else {
            let formData = {
                "empNo" : empInfoDetail.emp_no,
                "deptName": deptName,
                "empName": empName,
                "empPwd": empPwd,
                "empPosition": empPosition
            }
            api.postAdmUpdate(formData).then((res)=>{
                let result = res.data;
                    if (result) {
                        alert("사원수정이 완료 됐습니다.");
                        window.location.href = `/admin/report/${empInfoDetail.emp_no}`;
                        closeModal();
                    }else {
                        alert("정보 수정에 실패했습니다.");
                    }
            });
        }

    }

    const dateFormatting = (millisec) => {
        // millisec를 날짜 형식으로,YYYY-MM-DD로 변경
        const date = new Date(millisec).toISOString().substring(0,10)

        return date
    }

    return (
        <div className="emp-infoupdate">
            <div>
                <h1 className="emp-infoTitle"><span>사원 정보 수정</span>
                </h1>
            </div>
            <div className="reginfoBox">
                <div className="reginfoContent">
                    <div className="reginfoUl">
                        <li className="reginfoLi">
                            <div className="reginfoLabel"> 사원 번호</div>
                            <div className="reginfoInput">{empInfoDetail.emp_no}</div>
                        </li>
                        <li className="reginfoLi">
                            <div className="reginfoLabel"> 부서명</div>
                            <select className="reginfoInput" name='deptName' required='부서를 선택하세요'
                                    value={deptName} onChange={handleDeptName}>
                                <option value={'none'}>부서</option>
                                <option value={'인사'}>인사</option>
                                <option value={'영업'}>영업</option>
                                <option value={'회계'}>회계</option>
                                <option value={'경영지원'}>경영지원</option>
                                <option value={'개발'}>개발</option>
                            </select>
                        </li>
                        <li className="reginfoLi">
                            <div className="reginfoLabel"> 사원이름</div>
                            <input className="reginfoInput" type="text" name='empName' placeholder='사원이름'
                                   value={empName} ref={nameRef} onChange={handleEmpName}></input>
                        </li>
                        <li className="reginfoLi">
                            <div className="reginfoLabel"> 비밀번호</div>
                            <input className="reginfoInput" type="password" name='empPwd' placeholder='사번으로 초기화'
                                   required onChange={handleEmpPwd}></input>
                        </li>

                        <li className="reginfoLi">
                            <div className="reginfoLabel"> 직급</div>
                            <select className="reginfoInput" name='empPosition'
                                    value={empPosition} required onChange={handleEmpPosition}>
                                <option value={'none'}>직급</option>
                                <option value={'수석연구원'}>수석연구원</option>
                                <option value={'책임연구원'}>책임연구원</option>
                                <option value={'선임연구원'}>선임연구원</option>
                                <option value={'연구원'}>연구원</option>
                                <option value={'연구보조원'}>연구보조원</option>
                            </select>
                        </li>
                        {/*<li className="reginfoLi">*/}
                        {/*    <div className="reginfoLabel"> 사원 사진</div>*/}
                        {/*    <input className="reginfoInputfile" type="file" accept="image/*" ref={inputRef}*/}
                        {/*           onChange={onUploadImage} style={{display: 'none'}}/>*/}
                        {/*    <button className="imgBtn" onClick={onUploadImageButtonClick}>이미지 등록</button>*/}
                        {/*    {empImage &&*/}
                        {/*        <img alt={''} src={URL.createObjectURL(empImage)}/>*/}
                        {/*    }*/}
                        {/*</li>*/}

                        <div className="regbutton">
                            <button className="reghandleBtn" onClick={handleRegist}
                                    name='empRegistSubmit'>
                                수정
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
export default EmpInfoUpdateModal;