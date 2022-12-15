import React from "react";
import { modifyEmpAuthority } from '../../api/ConfigurationAPI'
import './ApprovalModal.scss'
import { useState } from "react";
import { useDispatch } from "react-redux";
import ConfigurationActions from "../../redux/modules/configuration/ConfigurationActions";
import AuthModal from "./AuthModal";
const EmpAuthModiModal = ({ empAllAuthInfo, data, closeModal, changeFlag }) => {

  
    const dispatch = useDispatch();

    const [empAuthority, setEmpAuthority] = useState(data.empAuthority);
    const handleEmpAuthority = (e) => {
        setEmpAuthority(e.target.value);
    }
    const changeState = ()=> {
       
        const update = {
            'empNo': data.empNo,
            'empAuthority': empAuthority       
        };

        dispatch(ConfigurationActions.modifyEmpAuthority(update))
        dispatch(ConfigurationActions.getAllAuthotityEmp())
        // AuthModal.parent.location.reload();
        alert("권환 변경이 완료되었습니다.")
        closeModal();
    };

    return (
        <div className="myPage">
            
            <h1 className="infoTitle">관리자권한 수정</h1>
           
            <div className="infoBox">
                <div className="infoContent">
                        <ul>
                        <li className="infoLi"><div className="infoLabel">이름</div> <div className="infoInput"readOnly>{data.empName}</div></li>
                        <li className="infoLi"><div className="infoLabel">사번</div> <div className="infoInput"readOnly>{data.empNo}</div></li>
                        <li className="infoLi"><div className="infoLabel">부서</div> <div className="infoInput" readOnly>{data.deptName}</div></li>
                        <li className="infoLi"><div className="infoLabel">직급</div> <div className="infoInput" readOnly>{data.empPosition}</div></li>
                        <li className="infoLi"><div className="infoLabel">권한</div>   <select className="infoInput" name='empAuthority' required onChange={handleEmpAuthority}>
                                <option value={'none'}>{data.empAuthority}</option>
                                <option value={'ROLE_ADMIN'}>ROLE_ADMIN</option>
                                <option value={'ROLE_EMP'}>ROLE_EMP</option>
                               
                            </select></li>
                            </ul>
                    
                    
                    <div >
                        
                                <div className="button">
                                    <button className="stChange" onClick={ changeState}>승인</button>
                                    <button className="stChange" onClick={closeModal}>닫기</button>
                                </div>
                           
                            <></>
                        
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmpAuthModiModal;