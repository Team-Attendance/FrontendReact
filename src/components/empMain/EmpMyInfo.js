import React from 'react';
import { useSelector } from 'react-redux';


// axios.get('test/home.do')
// .then((Response)=>{
//   if(Response.data === 'ok'){
//     alert("ok");
//     window.location.href = "http://www.google.com";
//   }


// })
// .catch((Error)=>{console.log(Error)})


export default function EmpMyInfo() {

  const data = useSelector(state => state.eChart.data);

  const empName = sessionStorage.getItem("empName");
  const position = sessionStorage.getItem("empPosition")
  const deptName = sessionStorage.getItem("deptName");
  const role = sessionStorage.getItem("empAuthority");

  return (
    <div>
      <div>
        <div style={{ borderBottom: '2px solid lightgray', padding: '15px 10px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>2022년 12월</h2>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{empName} {position} 근태 현황</h2>
        </div>
        <div style={{ padding: '0 10px', fontWeight: 'bold', fontSize: '0.8rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', textAlign: 'center' }}>
            <div style={{ width: '50%', padding: '25px 0' }}>
              <span>정상근무 : {data != null && data.oddBizHourCount.normalCount}일</span>
            </div>
            <div style={{ width: '50%', padding: '25px 0' }}>
              <span>이상근무 : {data != null && data.oddBizHourCount.oddBizCount}일</span>
            </div>
            <div style={{ width: '50%', padding: '13px 0', }}>
              <span>휴가 : {data != null && data.oddBizHourCount.leaveCount}일</span>
            </div>
            <div style={{ width: '50%', padding: '13px 0' }}>
              <span>결근 : {data != null && data.oddBizHourCount.selectAbsentCount}일</span>
            </div>
            <div style={{ width: '50%', padding: '13px 0' }}>
              <span>지각 : {data != null && data.oddBizHourCount.selectTardyCount}일</span>
            </div>
            <div style={{ width: '50%', padding: '13px 0' }}>
              <span>조퇴 : {data != null && data.oddBizHourCount.EarlyCount}일</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '25px 0' }}>
          <button style={{ width: '40%', border: '1px solid lightgray', backgroundColor: 'skyblue', color: 'white', padding: '10px 15px', borderRadius: '10px', fontWeight: 'bold', boxShadow: '0 0 4px 1px lightgray' }}>휴가 신청 대기 : {data != null && data.oddBizHourCount.selectLeaveCount}</button>
          <button style={{ width: '40%', border: '1px solid lightgray', backgroundColor: 'skyblue', color: 'white', padding: '10px 15px', borderRadius: '10px', fontWeight: 'bold', boxShadow: '0 0 4px 1px lightgray' }}>이상근태 신청 대기 : {data != null && data.oddBizHourCount.selectOddbizCount}</button>
        </div>
      </div>
    </div>
  );
}