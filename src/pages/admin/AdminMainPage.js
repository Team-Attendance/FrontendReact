import React, { useCallback, useEffect } from "react";
import AdminCalendar from "../../components/adminMain/AdminCalendar";
import AdminPieChart from "../../components/adminMain/AdminPieChart";
import AdminInfo from "../../components/adminMain/AdminInfo";
import AdminDocument from "../../components/adminMain/AdminDocument";
import "../../css/AdminMainPage.css"
import { getAdminData } from "../../modules/adminMain";
import {useDispatch} from "react-redux";
import { getChartData } from "../../modules/eChart";




export function AdminMainPage() {

    const dispatch = useDispatch()
    const adminMain = useCallback(() => dispatch(getAdminData(1)), [dispatch]);
    const chart = useCallback(() => dispatch(getChartData(1, 2022, 10)), [dispatch]);

    useEffect(() => {
        adminMain();
        chart();
    }, []);

    return (
        <div className="emp_main">
            <div className="frame">
                <div className="content">
                    <div className="work_status">
                        < AdminInfo/>
                    </div>
                    <div className="work_chart">
                        < AdminPieChart />
                    </div>
                </div>
                <div className="content">
                    <div className="work_calendar">
                        <h2>관리자 달력</h2>
                        < AdminCalendar />
                    </div>
                    <div className="annual">
                        < AdminDocument />
                    </div>
                </div>

            </div>
        </div>
    );


}