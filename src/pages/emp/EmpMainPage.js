import React, { useCallback, useEffect } from "react";
import "../../css/EmpMainPage.css"
import EmpPieChart from "../../components/empMain/EmpPieChart";
import EmpCalendar from "../../components/empMain/EmpCalendar";
import EmpBarChart from "../../components/empMain/EmpBarChart";
import { useDispatch } from "react-redux";
import EmpInfoActions from "../../redux/modules/EmpInfo/EmpInfoActions";
import { getChartData } from "../../modules/eChart";
import { getPtoData } from "../../modules/pto";
import EmpMyInfo from "../../components/empMain/EmpMyInfo";


export function EmpMainPage() {


    // 로그인시 회원정보 저장 store EmpInfoPage에서 사용
    let empNo = sessionStorage.getItem('empNo');

    const dispatch = useDispatch()
    const empMain = useCallback(() => dispatch(getChartData(1, 2022, 10)), [dispatch]);
    const chart = useCallback(() => dispatch(getPtoData(1, 2022)), [dispatch]);

    useEffect(() => {
        dispatch(EmpInfoActions.getInfoDetail(empNo))
        empMain();
        chart();
    }, []);

    return (

        <div className="emp_main">
            <div className="frame">
                <div className="content">
                    <div className="work_status">
                        <div className="work_MyInFo">
                        </div>
                       < EmpMyInfo />
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