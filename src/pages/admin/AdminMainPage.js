import React,{ useState } from "react";
import BarChart from "../../components/adminMain/BarChart";
import Calendars from "../../components/adminMain/Calendars";
import "../../css/AdminMainPage.css"


export function AdminMainPage(){

    return (
        <div className="wrap">
            <div className="frame">
                <div className="content">
                    <div className="document">
                        <p className="title">대기문서</p>
                    </div>
                    <div className="calendar">
                        <p className="title">관리자 달력</p>
                        <Calendars />
                    </div>
                </div>
                <div className="content">
                    <div className="chart">
                        <p className="title">근무현황</p>
                        <BarChart />
                    </div>
                    <div className="schedule">
                        <p className="title">주간스케줄</p>
                    </div>
                </div>
                <div className="content">
                     <p className="title">출근기록</p>

                </div>
            </div>
        </div>
    );

    
}