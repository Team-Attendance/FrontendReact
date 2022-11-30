import React, { useCallback, useEffect, useState } from "react";
import "../../css/EmpMainPage.css"
import EmpPieChart from "../../components/empMain/EmpPieChart";
import EmpCalendar from "../../components/empMain/EmpCalendar";
import EmpBarChart from "../../components/empMain/EmpBarChart";
import {useDispatch, useSelector} from "react-redux";
import EmpInfoActions from "../../redux/modules/EmpInfo/EmpInfoActions";
import { getChartData } from "../../modules/eChart";
import KkuCompo from "../../components/common/kkuCompo";
import { border } from "@mui/system";

export function EmpMainPage() {


    // 로그인시 회원정보 저장 store EmpInfoPage에서 사용
    let empNo = localStorage.getItem('empNo');
    const dispatch = useDispatch()

    const setCompoCalander = useCallback(() => dispatch(getChartData(1, 2022, 10)), [dispatch]);

    useEffect(() => {
        dispatch(EmpInfoActions.getInfoDetail(empNo))
        // setCompoCalander();
    }, []);
    return (
        <div className="emp_main">
            {/* <div className="frame">
                <div className="content">
                    <div className="work_status">
                    </div>
                    <div className="work_chart">
                        {/* < EmpBarChart /> */}
                    </div>
                </div>
                <div className="content">
                    <div className="work_calendar">
                        <h2>관리자 달력</h2>
                        < EmpCalendar />
                    </div>
                    <div className="annual">
                        < EmpPieChart />
                    </div>
                </div>
            </div> */}
            <KkuCompo/>
            <div style={{width: '600px', height: '300px', border: '2px solid lightgray', padding: '15px', borderRadius:'15px'}}>
                <div style={{borderBottom:'2px solid lightgray', padding: '15px 10px'}}>
                    <h2 style={{fontSize:'1.2rem', fontWeight: 'bold'}}>2022년 10월</h2>
                    <h2 style={{fontSize:'1.2rem', fontWeight: 'bold'}}>김경욱 연구원 근태 현황</h2>
                </div>
                <div style={{padding: '0 10px', fontWeight:'bold', fontSize:'0.8rem'}}>
                    <div style={{display:'flex', flexWrap: 'wrap', textAlign: 'center'}}>
                        <div style={{width:'50%', padding: '15px 0'}}>
                            <span>정상근무 : 20일</span>
                        </div>
                        <div style={{width:'50%', padding: '15px 0'}}>
                            <span>이상근무 : 20일</span>
                        </div>
                        <div style={{width:'25%', padding: '15px 0',}}>
                            <span>휴가 : 20일</span>
                        </div>
                        <div style={{width:'25%', padding: '15px 0'}}>
                            <span>결석 : 20일</span>
                        </div>
                        <div style={{width:'25%', padding: '15px 0'}}>
                            <span>지각 : 20일</span>
                        </div>
                        <div style={{width:'25%', padding: '15px 0'}}>
                            <span>조퇴 : 20일</span>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex', justifyContent: 'space-around', padding: '15px 0'}}>
                    <button style={{width:'40%', border: '1px solid lightgray', backgroundColor: 'skyblue', color: 'white', padding: '10px 15px', borderRadius: '10px', fontWeight: 'bold', boxShadow: '0 0 4px 1px lightgray'}}>휴가 신청 대기 : 13건</button>
                    <button style={{width:'40%',border: '1px solid lightgray', backgroundColor: 'skyblue', color: 'white', padding: '10px 15px', borderRadius: '10px', fontWeight: 'bold', boxShadow: '0 0 4px 1px lightgray'}}>이상근태 신청 대기 : 13건</button>
                </div>
            </div>
        </div>
    );


}