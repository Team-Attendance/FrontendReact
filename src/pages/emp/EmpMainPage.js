import React, {useEffect, useState} from "react";
import "../../css/EmpMainPage.css"
import EmpPieChart from "../../components/empMain/EmpPieChart";
import EmpCalendar from "../../components/empMain/EmpCalendar";
import EmpBarChart from "../../components/empMain/EmpBarChart";
import {useDispatch, useSelector} from "react-redux";
import EmpInfoActions from "../../redux/modules/EmpInfo/EmpInfoActions";
export function EmpMainPage(){


    // 로그인시 회원정보 저장 store EmpInfoPage에서 사용
    let empNo = localStorage.getItem('empNo');
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(EmpInfoActions.getInfoDetail(empNo))
        
    }, [])


  return (
    <div className="emp_main">
        <div className="frame">
            <div className="content">
                <div className="work_status">
                </div>
                <div className="work_chart">
                    < EmpBarChart />
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
        
        </div>
    </div>
);


}