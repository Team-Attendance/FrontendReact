import React, { useCallback, useEffect, useState } from "react";
import "../../css/EmpMainPage.css"
import EmpPieChart from "../../components/empMain/EmpPieChart";
import EmpCalendar from "../../components/empMain/EmpCalendar";
import EmpBarChart from "../../components/empMain/EmpBarChart";
import { useDispatch } from "react-redux";
import { getChartData } from "../../modules/eChart";

export function EmpMainPage() {

    const dispatch = useDispatch();
    const setCompoCalander = useCallback(() => dispatch(getChartData(1, 2022, 10)), [dispatch]);

    useEffect(() => {
         setCompoCalander();
    }, []);
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