import React from "react";
import { modifyEmpAuthority } from '../../api/ConfigurationAPI'
import './ApprovalModal.scss'
import { useState } from "react";
import { useDispatch } from "react-redux";
import ConfigurationActions from "../../redux/modules/configuration/ConfigurationActions";
const EmpAuthModiModal = ({ empAllAuthInfo, data, closeModal, changeFlag }) => {

  
    const dispatch = useDispatch();

    const [empAuthority, setEmpAuthority] = useState(data.empAuthority);
    const handleEmpAuthority = (e) => {
        setEmpAuthority(e.target.value);
        // console.log(empAuthority)
    }
    console.log(empAuthority)
    // const dateFormatting = (millisec) => {
    //     // millisec를 날짜 형식으로, YYYY. MM. DD.를 YYYY-MM-DD로 변경
    //     const date = new Date(millisec).toLocaleDateString().replace(/\./g, '').replace(/\s/g, '/')

    //     return date
    // }

    const changeState = ()=> {
       
        const update = {
            'empNo': data.empNo,
            'empAuthority': empAuthority       
        };

        dispatch(ConfigurationActions.modifyEmpAuthority(update))
       
    };

    return (
        <div className="myPage">
            <div>
                <h1 className="infoTitle">휴가 신청</h1>
            </div>
            <div className="infoBox">
                <div className="infoContent">
                    <ul className="infoUl">
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
                    <div className="button">
                        
                                <div >
                                    <button onClick={ changeState}>승인</button>
                                   
                                </div>
                           
                            <></>
                        
                        <button onClick={closeModal}>닫기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmpAuthModiModal;