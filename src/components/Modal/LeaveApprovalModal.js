import React from "react";
import { useDispatch } from "react-redux";
import LeaveApprovalActions from "../../redux/modules/LeaveApproval/LeaveApprovalActions";
// style
// components 

const LeaveApprovalModal = (data) => {
    // const {leaveApprovalInfo} = useSelector((state) => state.leaveApprovalInfo)
    // console.log(leaveApprovalInfo)

    const dispatch = useDispatch()

    const dateFormatting = (millisec) =>{
        // millisec를 날짜 형식으로, YYYY. MM. DD.를 YYYY-MM-DD로 변경
        const date = new Date(millisec).toLocaleDateString().replace(/\./g, '').replace(/\s/g, '/')
        
        return date
    }

    const approveButton = () => {
        onSubmit(data.data.empNo, 1)
    }

    const rejectButton = () => {
        onSubmit(data.data.empNo, 2)
    }

    const onSubmit = (empNo, state) => {
        dispatch(LeaveApprovalActions.updateLeaveApproval(empNo, state))
    }

    return(
        <div className="myPage">
            <main className="main">
              <div className="infoBox">
                  <p className="infoTitle">휴가 신청</p>
                  <hr />
                  <div className="infoContent">
                      <ul className="infoUl">
                          <li className="infoLi"><label className="infoLabel">이름</label> <input className="infoInput" value={data.data.empName} readOnly/></li>
                          <li className="infoLi"><label className="infoLabel">사번</label> <input className="infoInput" value={data.data.empNo} readOnly /></li>
                          <li className="infoLi"><label className="infoLabel">직급</label> <input className="infoInput" value={data.data.empPosition} readOnly /></li>
                          <li className="infoLi"><label className="infoLabel"> 신청 일자</label> <input className="infoInput" value={dateFormatting(data.data.leaveAdjDate)} readOnly /></li>
                          <li className="infoLi"><label className="infoLabel"> 휴가 시작 일자</label> <input className="infoInput" value={dateFormatting(data.data.leaveStartDate)} readOnly /></li>
                          <li className="infoLi"><label className="infoLabel"> 휴가 종료 일자</label> <input className="infoInput" value={dateFormatting(data.data.leaveEndDate)} readOnly /></li>
                          <li className="infoLi"><label className="infoLabel">휴가 종류</label> <input className="infoInput" value={data.data.leaveType} readOnly /></li>                          
                          <li className="infoLi"><label className="infoLabel">휴가 사유</label> <input className="infoInput" value={data.data.leaveDetail} readOnly /></li>                          
                          <button className="pwChange" onClick={approveButton}>승인</button>
                          <button className="pwChange" onClick={rejectButton}>반려</button>
                      </ul>
                  </div>
              </div>
            </main>
        </div>
    )
}

export default LeaveApprovalModal;