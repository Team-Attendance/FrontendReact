import React, { useCallback, useEffect } from "react";
import EmpPieChart from "../../components/empMain/EmpPieChart";
import EmpCalendar from "../../components/empMain/EmpCalendar";
import EmpBarChart from "../../components/empMain/EmpBarChart";
import { useDispatch, useSelector } from "react-redux";
import EmpInfoActions from "../../redux/modules/EmpInfo/EmpInfoActions";
import { getChartData } from "../../modules/eChart";
import { getPtoData } from "../../modules/pto";
import EmpMyInfo from "../../components/empMain/EmpMyInfo";
import EmpOddChart from "../../components/empMain/EmpOddChart";
import EmpMonthly from "../../components/empMain/EmpMonthly";
import YearOddBizChart from "../admin/YearOddBizChart";




export function EmpMainPage() {
    // 로그인시 회원정보 저장 store EmpInfoPage에서 사용
    let empNo = sessionStorage.getItem('empNo');

    const dispatch = useDispatch()
    const empMain = useCallback(() => dispatch(getChartData(empNo, 2022, 12)), [dispatch]);
    const chart = useCallback(() => dispatch(getPtoData(empNo, 2022)), [dispatch]);
    const ptoData = useSelector(state => state.pto.data);


    useEffect(() => {
        dispatch(EmpInfoActions.getEmpinfo(empNo))
        empMain();
        chart();
    }, []);

    return (
        <div style={{ padding: '30px' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '76%' }}>
                    <div style={{ display: 'flex', height: '410px', marginBottom: '25px' }}>
                        <div style={{ width: '60%', padding: '20px 20px', height: '100%', border: '1px solid gray', marginRight: '15px', borderRadius: '7px' }}>
                            <h2 style={{ fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '5px', lineHeight: '25px' }}>나의 근태 현황</h2>
                            <div style={{ height: 'calc(100% - 30px)', border: '1px solid lightgray' }}>

                                <EmpMyInfo />

                            </div>
                        </div>

                        <div style={{ width: '40%', border: '1px solid gray', padding: '15px 20px', borderRadius: '7px' }}>

                            <h2 style={{ fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '5px', lineHeight: '25px' }}>12월 근태차트</h2>
                            <div style={{ height: 'calc(100% - 30px)', border: '1px solid lightgray' }}>
                                <div style={{ marginTop: '40px' }}>
                                    <EmpBarChart />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ height: '410px', display: 'flex' }}>
                        <div style={{ width: '60%', padding: '20px 20px', marginRight: '15px', border: '1px solid gray', borderRadius: '7px' }}>
                            <h2 style={{ fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '5px', lineHeight: '25px' }}>2022년 하반기 근태 차트</h2>
                            {/* <div style={{ height: 'calc(100% - 30px)', border: '1px solid lightgray' }}>

                                

                            </div> */}
                            {ptoData &&
                                <div className="year-odd-biz-chart-wrap" style={{ height: 'calc(100% - 30px)', border: '1px solid lightgray' }}>
                                    <div style={{height: '90%'}}>
                                        <YearOddBizChart reportData={ptoData} />
                                    </div>
                                </div>
                            }

                        </div>
                        <div style={{ border: '1px solid gray', width: '40%', padding: '20px 20px', borderRadius: '7px' }}>
                            <h2 style={{ fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '5px', lineHeight: '25px' }}>12월 이상 근태 차트</h2>
                            <div style={{ height: 'calc(100% - 30px)', border: '1px solid lightgray' }}>
                                <EmpOddChart />
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{ width: '29%', paddingLeft: '15px' }}>
                    <div style={{ border: '1px solid gray', height: '410px', padding: '20px', borderRadius: '7px', marginBottom: '25px' }}>
                        <h2 style={{ fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '5px', lineHeight: '25px' }}>2022년 연차 사용 현황</h2>
                        <div style={{ height: 'calc(100% - 30px)', border: '1px solid lightgray' }}>

                            <div style={{ marginTop: '40px' }}>
                                <EmpPieChart />
                            </div>
                        </div>

                    </div>


                    <p style={{ width: '50px', height: '50px', position: 'absolute', top: '46%', left: 'calc(50% - 25px)', textAlign: 'center', fontWeight: 'bold' }}>

                    </p>


                    <div style={{ border: '1px solid gray', height: '410px', padding: '20px', borderRadius: '7px' }}>
                        <h2 style={{ fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '5px', lineHeight: '25px' }}>근무 달력</h2>
                        <div style={{ height: 'calc(100% - 30px)', border: '1px solid lightgray' }}>
                            <EmpCalendar />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );


}