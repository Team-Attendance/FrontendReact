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
        </div>
               
    );


}