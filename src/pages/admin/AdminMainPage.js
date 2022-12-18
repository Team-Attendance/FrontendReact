import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeptOddBizStatus from "../../components/adminMain/DeptOddBizStatus";
import HastyDeptLeave from "../../components/adminMain/HastyDeptLeave";

import EmpState from "../../components/common/EmpState";
import DeptYearOddBizChart from "../emp/DeptYearOddBizChart";
import LeaveThroughputChart from "../emp/LeaveThroughputChart";
import OddBizThroughputChart from "../emp/OddBizThroughputChart";
import TimeChart from "../emp/TimeChart";
import TotalThroughputChart from "../emp/TotalThroughputChart";

import "./adminMainPage.scss";




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
                <div className="admin-main-page-area">
                    <div className="flex-div">
                        <div className="left-area">
                            <div className="top-area">
                                <div className="wait-document-and-process-document">
                                    <div className="wait-document-wrap">
                                        <h2 className="title">대기 문서 현황</h2>
                                        <div className="wait-document">
                                            <Link className="link" to="/admin/approval/leave">
                                                <div className="document-leave-item">
                                                    <h2>휴가 신청 대기 : {documentStatusData.documentStatus.leave_waiting_count}건</h2>
                                                </div>
                                            </Link>
                                            <Link className="link" to="/admin/approval/odd">
                                                <div className="document-odd-biz-item">
                                                    <h2>이상근태 조정신청 대기 : {documentStatusData.documentStatus.odd_biz_waiting_count}건</h2>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="process-document-wrap">
                                        <h2 className="title">문서 처리 현황</h2>
                                        <div className="process-document">
                                            <div className="process-document-item">
                                                <h2>통합 처리율</h2>
                                                <TotalThroughputChart documentStatusData={documentStatusData} />
                                            </div>
                                            <div className="process-document-item">
                                                <h2>휴가신청 처리율</h2>
                                                <LeaveThroughputChart documentStatusData={documentStatusData} />
                                            </div>
                                            <div className="process-document-item">
                                                <h2>이상근태신청 처리율</h2>
                                                <OddBizThroughputChart documentStatusData={documentStatusData} />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="high-odd-biz-and-hasty-dept-leave">
                                    <div className="high-odd-biz-wrap">
                                        <h2>금월 이상근태율이 높은 사원</h2>
                                        <DeptOddBizStatus documentStatusData={documentStatusData} />
                                    </div>

                                    <div className="hasty-dept-leave-wrap">
                                        <h2>처리가 급한 휴가</h2>
                                        <HastyDeptLeave documentStatusData={documentStatusData} />
                                    </div>

                                </div>
                            </div>

                            <div className="bottom-area">
                                <div className="dept-year-odd-biz-wrap">
                                    <h2>{new Date().getFullYear()}년 {sessionDeptName}팀 이상근태 현황</h2>
                                    <div className="dept-year-odd-biz">
                                        <DeptYearOddBizChart documentStatusData={documentStatusData} />
                                    </div>
                                </div>
                                <div className="today-biz-status-wrap">
                                    <h2>금일 근무 현황</h2>
                                    <div className="today-biz-status">
                                        <TimeChart documentStatusData={documentStatusData} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="right-area">
                            <div className="emp-state-wrap">
                                <EmpState documentStatusData={documentStatusData} />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );


}