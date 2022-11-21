import React from "react";
// style
// components 

const OddApprovalModal = (data) => {
    // const {leaveApprovalInfo} = useSelector((state) => state.leaveApprovalInfo)
    // console.log(leaveApprovalInfo)
    
    const dateFormatting = (millisec) =>{
        // millisec를 날짜 형식으로, YYYY. MM. DD.를 YYYY-MM-DD로 변경
        const date = new Date(millisec).toLocaleDateString().replace(/\./g, '').replace(/\s/g, '/')
        
        return date
    }

    return(
        <div className="myPage">
            <main className="main">
              <div className="infoBox">
                  <p className="infoTitle">이상 근태 조정 신청</p>
                  <hr />
                  <div className="infoContent">
                      <ul className="infoUl">
                          <li className="infoLi"><label className="infoLabel">이름</label> <input className="infoInput" value={data.data.empName} readOnly/></li>
                          <li className="infoLi"><label className="infoLabel">사번</label> <input className="infoInput" value={data.data.empNo} readOnly /></li>
                          <li className="infoLi"><label className="infoLabel">직급</label> <input className="infoInput" value={data.data.empPosition} readOnly /></li>
                          <li className="infoLi"><label className="infoLabel"> 신청 일자</label> <input className="infoInput" value={dateFormatting(data.data.oddBizAdjDate)} readOnly /></li>
                          <li className="infoLi"><label className="infoLabel"> 이상 근태 발생 일자</label> <input className="infoInput" value={dateFormatting(data.data.oddBizDate)} readOnly /></li>
                          <li className="infoLi"><label className="infoLabel"> 이상 근태 종류</label> <input className="infoInput"  readOnly /></li>                          
                          <li className="infoLi"><label className="infoLabel">조정 신청 사유</label> <input className="infoInput" value={data.data.oddBizAdjDetail} readOnly /></li>                          
                          <button className="pwChange">승인</button>
                          <button className="pwChange">반려</button>
                      </ul>
                  </div>
              </div>
            </main>
        </div>
    )
}

export default OddApprovalModal;