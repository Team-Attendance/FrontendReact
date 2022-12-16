import React from 'react';
import { useSelector } from 'react-redux'


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

  // const [timer, setTimer] = useState("00:00:00");

  
    // const date = new Date();
    // const years = String(date.getFullYear());
    // const months = String(date.getMonth()+1);
    // const dates = String(date.getDate());
    // setTimer(`${years}:${months}:${dates}`)
  

  return (
    <div>
      <div style={{ padding: '20px'}}>
        <h2 style={{ fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '30px' }}>{empName} {position}</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', width:'100%', height:'100%'}}> 
          <div style={{ width: '48.5%', height:'100%' }}>
            <p style={{height: '45px', border:'1px solid lightgray', display:'flex', marginBottom:'11px', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
              <span>정상근무</span>
              <span style={{fontWeight: '900', fontSize: '1rem'}}>{data != null && data.oddBizHourCount.normalCount}일</span>
            </p>
            <p style={{height: '45px', border:'1px solid lightgray', display:'flex',marginBottom:'11px', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
              <span>휴가</span>
              <span style={{fontWeight: '900', fontSize: '1rem'}}>{data != null && data.oddBizHourCount.leaveCount}일</span>  
            </p>
            <p style={{height: '45px', border:'1px solid lightgray', display:'flex',marginBottom:'20px', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
              <span>지각</span>
              <span style={{fontWeight: '900', fontSize: '1rem'}}>{data != null && data.oddBizHourCount.selectTardyCount}일</span>
            </p>
            <button style={{ height: '45px', width: '100%', border: '1px solid lightgray', borderRadius: '8px', backgroundColor: '#4BC0C0', lineHeight: '45px', textAlign: 'center', color : 'white', fontWeight : '900' }}>휴가 신청 대기 : {data != null && data.oddBizHourCount.selectLeaveCount}</button>
          </div>
          <div style={{ width: '48.5%', height:'100%' }}>
            <p style={{height: '45px', border:'1px solid lightgray', display:'flex', marginBottom:'11px', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
              <span>이상근무</span>
              <span style={{fontWeight: '900', fontSize: '1rem'}}>{data != null && data.oddBizHourCount.oddBizCount}일</span> 
            </p>
            <p style={{height: '45px', border:'1px solid lightgray', display:'flex', marginBottom:'11px',justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
              <span>결근</span>
              <span style={{fontWeight: '900', fontSize: '1rem'}}>{data != null && data.oddBizHourCount.selectAbsentCount}일</span>
            </p>
            <p style={{height: '45px', border:'1px solid lightgray', display:'flex', marginBottom:'20px',justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
              <span>조퇴</span>
              <span style={{fontWeight: '900', fontSize: '1rem'}}>{data != null && data.oddBizHourCount.EarlyCount}일</span>
            </p>
            <button style={{ height: '45px', width: '100%', border: '1px solid lightgray', borderRadius: '8px', backgroundColor: '#36A2EB', lineHeight: '45px', textAlign: 'center', color : 'white', fontWeight : '900' }}>이상근태 신청 대기 : {data != null && data.oddBizHourCount.selectOddbizCount}</button>
          </div>
        </div>
      </div>
    </div>
  );
}