import React from "react";

import {updateLeaveApproval} from '../../api/LeaveApprovalAPI'
import './ApprovalModal.scss'

const LeaveApprovalModal = ({data, closeModal,changeFlag}) => {

    const approver = localStorage.getItem("empName")
  

    const dateFormatting = (millisec) =>{
        // millisec를 날짜 형식으로, YYYY. MM. DD.를 YYYY-MM-DD로 변경
        const date = new Date(millisec).toLocaleDateString().replace(/\./g, '').replace(/\s/g, '/')
        
        return date
    }
    
    const changeState = async(s) => {
        const update = [{
            'empNo': data.empNo,
            'state': s,
            'startDate': data.leaveStartDate,
            'endDate': data.leaveEndDate,
            'approver': approver
        }]

        await updateLeaveApproval(update)
        closeModal()
        changeFlag()
    }

    return(
        <div className="myPage">
            <div>
                <h1 className="infoTitle">휴가 신청</h1>
            </div>
            <div className="infoBox">
                <div className="infoContent">
                    <ul className="infoUl">
                        <li className="infoLi"><div className="infoLabel">이름</div> <div className="infoInput">{data.empName}</div></li>
                        <li className="infoLi"><div className="infoLabel">직급</div> <div className="infoInput">{data.empPosition}</div></li>
                        <li className="infoLi"><div className="infoLabel">사번</div> <div className="infoInput"  readOnly>{data.empNo}</div></li>
                        <li className="infoLi"><div className="infoLabel"> 신청 일자</div> <div className="infoInput">{dateFormatting(data.leaveAdjDate)}</div></li>
                        <li className="infoLi"><div className="infoLabel"> 휴가 시작 일자</div> <div className="infoInput">{dateFormatting(data.leaveStartDate)}</div></li>
                        <li className="infoLi"><div className="infoLabel"> 휴가 종료 일자</div> <div className="infoInput" >{dateFormatting(data.leaveEndDate)}</div></li>
                        <li className="infoLi"><div className="infoLabel">휴가 종류</div> <div className="infoInput">{data.leaveType} </div></li>                          
                        <li className="infoLi"><div className="infoLabel">휴가 사유</div> <div className="infoInput">{data.leaveDetail}</div></li>                          
                    </ul>
                    {!data.leaveAdjState &&(
                    <div className="button">
                        <button className="pwChange" onClick={()=>changeState(1)}>승인</button>
                        <button className="pwChange" onClick={()=>changeState(2)}>반려</button>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LeaveApprovalModal;