import React from "react";
import { modifyEmpAuthority } from '../../api/ConfigurationAPI'
import './EmpAuthModiModal.scss'
import { useState } from "react";
import { useDispatch } from "react-redux";
import ConfigurationActions from "../../redux/modules/configuration/ConfigurationActions";

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
        dispatch(ConfigurationActions.getAllAuthotityEmp(update))
       
        alert("권환 변경이 완료되었습니다.")
        closeModal( );
    };

    return (
        <div className="EmpAuthModiModal">
            
            <div className="EmpAuthModiModalBody">
            <div>
            <button id="modalCloseBtn" onClick={closeModal}>
                    ✖
                </button>
                </div>
            <div className="EmpAuthModiModal-modal">
             <div>
             <h1 className="EmpAuthModiModal-title">관리자권한 수정</h1>
             <div className="EmpAuthModiModal-box">
              <div className="EmpAuthModiModal-content">
              <ul className="EmpAuthModiModal-ul">
                        <li className="EmpAuthModiModal-li"><div className="EmpAuthModiModal-label">이름</div> <div className="EmpAuthModiModalInput"readOnly>{data.empName}</div></li>
                        <li className="EmpAuthModiModal-li"><div className="EmpAuthModiModal-label">사번</div> <div className="EmpAuthModiModalInput"readOnly>{data.empNo}</div></li>
                        <li className="EmpAuthModiModal-li"><div className="EmpAuthModiModal-label">부서</div> <div className="EmpAuthModiModalInput" readOnly>{data.deptName}</div></li>
                        <li className="EmpAuthModiModal-li"><div className="EmpAuthModiModal-label">직급</div> <div className="EmpAuthModiModalInput" readOnly>{data.empPosition}</div></li>
                        <li className="EmpAuthModiModal-li"><div className="EmpAuthModiModal-label">권한</div>   <select className="EmpAuthModiModalInput" name='empAuthority' required onChange={handleEmpAuthority}>
                                <option value={'none'}>권한선택</option>
                                <option value={'ROLE_ADMIN'}>관리자</option>
                                <option value={'ROLE_EMP'}>사원</option>
                               
                            </select></li>
                            </ul>
                            <div className="EmpAuthModiModal-button">
                                    <button onClick={ changeState}>승인</button>
                                    <button onClick={closeModal}>닫기</button>
                                </div>
                </div>  
                </div>   
                
                           
                </div>   
            </div>

            </div>
            
           
           
                       
                    
                    
                    <div >
                        
                                
                            <></>
                        
                       
                    </div>
                </div>
        
    )
}

export default EmpAuthModiModal;