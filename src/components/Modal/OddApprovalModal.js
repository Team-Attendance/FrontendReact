import React from "react";
import { updateOddApproval } from "../../api/OddApprovalAPI";
import './ApprovalModal.scss'

const OddApprovalModal = ({data, closeModal, changeFlag}) => {

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

        await updateOddApproval(update)
        closeModal()
        changeFlag()
    }

    return(
        <div className="myPage">
            <div>
                <h1 className="infoTitle">이상 근태 조정 신청</h1>
            </div>
            <div className="infoBox">
                <div className="infoContent">
                    <ul className="infoUl">
                        <li className="infoLi"><div className="infoLabel">이름</div> <div className="infoInput"> {data.empName} </div></li>
                        <li className="infoLi"><div className="infoLabel">사번</div> <div className="infoInput"> {data.empNo} </div></li>
                        <li className="infoLi"><div className="infoLabel">직급</div> <div className="infoInput"> {data.empPosition} </div></li>
                        <li className="infoLi"><div className="infoLabel"> 신청 일자</div> <div className="infoInput"> {dateFormatting(data.oddBizAdjDate)} </div></li>
                        <li className="infoLi"><div className="infoLabel"> 이상 근태 발생 일자</div> <div className="infoInput"> {dateFormatting(data.oddBizDate)} </div></li>
                        <li className="infoLi"><div className="infoLabel"> 이상 근태 종류</div> <div className="infoInput">{data.oddBizType}</div></li>                          
                        <li className="infoLi"><div className="infoLabel">조정 신청 사유</div> <div className="infoInput"> {data.oddBizAdjDetail} </div></li>
                    </ul>
                    {!data.oddBizAdjState &&(
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

export default OddApprovalModal;