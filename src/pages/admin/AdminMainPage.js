import axios from "axios";
import { useEffect, useState } from "react";
import DeptOddBizStatus from "../../components/adminMain/DeptOddBizStatus";
import HastyDeptLeave from "../../components/adminMain/HastyDeptLeave";

import EmpState from "../../components/common/EmpState";
import DeptYearOddBizChart from "../emp/DeptYearOddBizChart";
import LeaveThroughputChart from "../emp/LeaveThroughputChart";
import OddBizThroughputChart from "../emp/OddBizThroughputChart";
import TimeChart from "../emp/TimeChart";
import TotalThroughputChart from "../emp/TotalThroughputChart";





export function AdminMainPage() {
    const sessionDeptName = sessionStorage.getItem("deptName");

    const [documentStatusData, setDocumentStatusData] = useState(null);


    useEffect(() => {
        axios.get('/admin-main-data', {
            params: {
                deptName: sessionDeptName
            }
        }).then(
            (response) => {
                setDocumentStatusData(response.data);
            }
        )
    }, [sessionDeptName])

    return (
        <>
            {documentStatusData &&
            
                <div style={{ padding: '30px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '76%' }}>
                            <div style={{ display: 'flex', height: '430px', marginBottom: '25px' }}>
                                <div style={{ width: '66%', padding: '20px 20px', height: '100%', border: '1px solid gray', marginRight: '15px', borderRadius: '7px' }}>
                                    <div style={{ marginBottom: '15px' }}>
                                        <h2 style={{ fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '5px', lineHeight: '25px' }}>대기 문서 현황</h2>
                                        <div style={{ display: 'flex' }}>
                                            <div style={{ width: '50%', height: '45px', border: '1px solid lightgray', borderRadius: '8px', backgroundColor: '#4BC0C0', marginRight: '7px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <h2 style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'white' }}>휴가 신청 대기 : {documentStatusData.documentStatus.leave_waiting_count}건</h2>
                                            </div>
                                            <div style={{ width: '50%', height: '45px', border: '1px solid lightgray', borderRadius: '8px', backgroundColor: '#36A2EB', marginLeft: '7px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <h2 style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'white' }}>이상근태 조정신청 대기 : {documentStatusData.documentStatus.odd_biz_waiting_count}건</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h2 style={{ fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '5px', lineHeight: '25px' }}>문서 처리 현황</h2>
                                        </div>
                                        <div style={{ height: '263px', border: '1px solid lightgray', display: 'flex' }}>
                                            <div style={{ width: '34%', flexShrink: '1', height: '100%', borderRight: '1px solid lightgray', position: 'relative', padding: '10px' }}>
                                                <h2 style={{ fontWeight: 'bold', fontSize: '0.8rem', lineHeight: '20px', position: 'absolute', top: '10px', left: '10px' }}>통합 처리율</h2>
                                                <TotalThroughputChart documentStatusData={documentStatusData}/>
                                            </div>
                                            <div style={{ width: '34%', flexShrink: '1', height: '100%', borderRight: '1px solid lightgray', position: 'relative', padding: '10px' }}>
                                                <h2 style={{ fontWeight: 'bold', fontSize: '0.8rem', lineHeight: '20px', position: 'absolute', top: '10px', left: '10px' }}>휴가신청 처리율</h2>
                                                <LeaveThroughputChart documentStatusData={documentStatusData}/>
                                            </div>
                                            <div style={{ width: '34%', flexShrink: '1', height: '100%', position: 'relative', padding: '10px' }}>
                                                <h2 style={{ fontWeight: 'bold', fontSize: '0.8rem', lineHeight: '20px', position: 'absolute', top: '10px', left: '10px' }}>이상근태신청 처리율</h2>
                                                <OddBizThroughputChart documentStatusData={documentStatusData}/>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '34%', border: '1px solid gray', padding: '15px 20px', borderRadius: '7px' }}>
                                    <div style={{ marginBottom: '23px' }}>
                                        <h2 style={{ fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '5px', lineHeight: '25px' }}>금월 이상근태율이 높은 사원</h2>
                                        <DeptOddBizStatus documentStatusData={documentStatusData}/>
                                    </div>

                                    <div>
                                        <h2 style={{ fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '5px', lineHeight: '25px' }}>처리가 급한 휴가</h2>
                                        <HastyDeptLeave documentStatusData={documentStatusData}/>
                                    </div>

                                </div>
                            </div>

                            <div style={{ height: '390px', display: 'flex' }}>
                                <div style={{ width: '66%', padding: '20px 20px', marginRight: '15px', border: '1px solid gray', borderRadius: '7px' }}>
                                    <h2 style={{ fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '5px', lineHeight: '25px' }}>{new Date().getFullYear()}년 {sessionDeptName}팀 이상근태 추이</h2>
                                    <div style={{ height: 'calc(100% - 30px)', border: '1px solid lightgray' }}>
                                        <DeptYearOddBizChart documentStatusData={documentStatusData}/>
                                    </div>
                                </div>
                                <div style={{ border: '1px solid gray', width: '34%', padding: '20px 20px', borderRadius: '7px' }}>
                                    <h2 style={{ fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '5px', lineHeight: '25px' }}>근무 현황</h2>
                                    <div style={{ height: 'calc(100% - 30px)', border: '1px solid lightgray' }}>
                                        <TimeChart documentStatusData={documentStatusData}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '24%', paddingLeft: '15px' }}>
                            <div style={{ border: '1px solid gray', height: '100%', borderRadius: '7px' }}>
                                <EmpState documentStatusData={documentStatusData}/>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );


}