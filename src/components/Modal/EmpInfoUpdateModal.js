import React from "react";
import { useState} from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import './EmpInfoUpdateModal.scss';
import EmpInfoActions from "../../redux/modules/EmpInfo/EmpInfoActions";


const EmpInfoUpdateModal = ({ empInfoDetail, closeModal}) => {
    
    const {empNo} = useParams();
   
    const [deptName, setDeptName] = useState(empInfoDetail.deptName);
    const handleDeptName = (e) => {
        setDeptName(e.target.value);
        
    }
   const dispatch = useDispatch();

    const [empName, setEmpName] = useState(empInfoDetail.empName);
    const handleEmpName = (e) => {
        setEmpName(e.target.value);
    }

    const [empPosition, setEmpPosition] = useState(empInfoDetail.empPosition);
    const handleEmpPosition = (e) => {
        setEmpPosition(e.target.value);
    }

    const [empEmail, setEmpEmail] = useState(empInfoDetail.empEmail);
    const handleEmpEmail = (e) => {
        setEmpEmail(e.target.value+"@douzon.com");
    }
    const [empCellPhone, setEmpCellPhone] = useState(empInfoDetail.empCellPhone);
    const handleEmpCellPhone = (e) => {
        setEmpCellPhone(e.target.value);
    }
    const [empOfficePhone, setEmpOfficePhone] = useState(empInfoDetail.empOfficePhone);
    const handleEmpOfficePhone = (e) => {
        setEmpOfficePhone(e.target.value);
    }
    const [empContactList, setEmpContactList] = useState(empInfoDetail.empContactList);
    const handleEmpContactList = (e) => {
        setEmpContactList(e.target.value);
    }
    const dateFormatting = (millisec) =>{
        // millisec를 날짜 형식으로, YYYY. MM. DD.를 YYYY-MM-DD로 변경
        const date = new Date(millisec).toLocaleDateString().replace(/\./g, '').replace(/\s/g, '-')

        return date
      }
    
    function handleUpdate (e) {
       
        const data = {
            'empName':empName,
            'empNo': empInfoDetail.empNo,
            'deptName':deptName,
            'empPosition':empPosition,
            'empEmail':empEmail,
            'empCellPhone':empCellPhone,
            'empOfficePhone':empOfficePhone,
            'empContactList':empContactList,
            'empFirstDayOfWork':empInfoDetail.empFirstDayOfWork,
            
        };
        // console.log(data)
        dispatch(EmpInfoActions.updateEmpInfoByAdmin(data))
        window.location.href = `http://localhost:3000/admin/report/${empNo}`
        
    }

    const closeButton = () => {
        closeModal();
    }
   

    return(
        <div className="myPage">
            <div>
                <h1 className="infoTitle">정보 변경</h1>
            </div>
            <div className="infoBox">
                <div className="infoContent">
                    <ul className="infoUl">
                    <li className="infoLi">
                        <div className="infoLabel">이름</div>  <input className="infoInput" required onChange={handleEmpName} defaultValue={empInfoDetail.empName} ></input></li>
                        <li className="infoLi"><div className="infoLabel">사번</div> <div className="infoInput"  readOnly>{empInfoDetail.empNo}</div></li>
                        <li className="infoLi"><div className="infoLabel">부서 이름</div>    <select className="infoInput" name='deptName' required='부서를 선택하세요'  onChange={handleDeptName}>
                                <option value={'none'}>{empInfoDetail.deptName}</option>
                                <option value={'인사'}>인사</option>
                                <option value={'인사'}>영업</option>
                                <option value={'회계'}>회계</option>
                                <option value={'경영지원'}>경영지원</option>
                                <option value={'개발'}>개발</option>
                            </select></li>
                        
                        <li className="infoLi"><div className="infoLabel">직급</div> <select className="infoInput" name='deptName' required='직급을 선택하세요'  onChange={handleEmpPosition}>
                                <option value={'none'}>{empInfoDetail.empPosition}</option>
                                <option value={'수석연구원'}>수석연구원</option>
                                <option value={'책임연구원'}>책임연구원</option>
                                <option value={'선임연구원'}>선임연구원</option>
                                <option value={'연구원'}>연구원</option>
                                <option value={'연구보조원'}>연구보조원</option>
                            </select></li>
                       
                        <li className="infoLi"><div className="infoLabel">이메일</div> <input className="infoInput" required onChange={handleEmpEmail} defaultValue={empInfoDetail.empEmail}></input></li>                          
                        <li className="infoLi"><div className="infoLabel">휴대폰</div>  <input className="infoInput" required onChange={handleEmpCellPhone} defaultValue={empInfoDetail.empCellPhone}></input></li>                          
                        {/* <li className="infoLi"><div className="infoLabel">사내 번호</div> <input className="infoInput" required onChange={handleEmpOfficePhone} defaultValue={empInfoDetail.empOfficePhone}> </input></li>                         */}
                        <li className="infoLi"><div className="infoLabel">비상연락망</div> <input  className="infoInput" required onChange={handleEmpContactList} defaultValue={empInfoDetail.empContactList}></input></li> 
                        <li className="infoLi"><div className="infoLabel">입사일자</div> <div className="infoInput" readOnly>{dateFormatting(empInfoDetail.empFirstDayOfWork)}</div></li>
                    </ul>
                    
                    
                        <div className="button">
                            <button className="stChange" onClick={handleUpdate}>수정하기</button>
                            <button className="stChange" onClick={closeButton}>닫기</button>
                        </div>
                   
                    
                    
                </div>
            </div>
        </div>
    )
}

export default EmpInfoUpdateModal;