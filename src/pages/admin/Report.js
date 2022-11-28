import { border } from "@mui/system";
import "../../css/Report.css";
import "../../echart/PtoChart";
import PtoChart from "../../echart/PtoChart";
import OddChart from "../../echart/OddChart"
import WeekliyBizTimeChart from "../../echart/WeekliyBizTimeChart";
import MonthliyOdd from "../../echart/MonthliyOdd";
import LeaveAdjTable from "../../table/LeaveAdjTable";
import OddAdjTable from "../../table/OddAdjTable";
import ReportAction from "../../redux/modules/report/ReportAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export function Report(){

    const { EmpLeavInfo } =  useSelector((state) => state.EmpLeavInfo)
    const { EmpOddInfo } =  useSelector((state) => state.EmpOddInfo)
    
    const dispatch = useDispatch();
    useEffect(() => {
        
        dispatch(ReportAction.getEmpOdd())
       dispatch(ReportAction.getEmpLeave())
    }, [])

    return(
        <div className="wrap">
            <div className="container">
                <div className="left-wrap">
                    <section className="left">
                        <div className="emp-info">
                            
                            <h3 className="title"></h3>
                                <div className="mini">
                                    
                                    <div className="image">
                                    </div>
                                  
                                   <div className="emptable">
                                        <table className="table">
                                        
                                            <thead className="tablerow">
                                                <tr >
                                                    
                                                    <th className="background">이름</th>
                                                    <td>empName</td>
                                                    <th className="background">사번</th>
                                                    <td>enpNo</td>
                                                </tr>
                                            </thead>

                                             <thead className="tablerow">
                                                
                                                <tr >
                                                    <th className="background">부서</th>
                                                    <td>deptName</td>
                                                    <th className="background">직급</th>
                                                    <td>empPosition</td>
                                                </tr>
                                                </thead>

                                                <thead className="tablerow">
                                                <tr >
                                                <th className="background">이메일</th>
                                                <td>empEmail</td>
                                                <th className="background">휴대폰번호</th>
                                                <td>empPhone</td>
                                                </tr>
                                                </thead>
                                                <thead className="tablerow">
                                                <tr >
                                                <td className="background">사내번호</td>
                                                <td>emp</td>
                                                <td className="background">비상연락망</td>
                                                <td>empContactList</td>
                                                </tr>
                                                </thead>
                                                <thead className="tablerow">
                                                <tr >
                                                <td className="background">입사일자</td>
                                                <td className="center">empFirstDayOfWork</td>
                                                
                                                
                                                
                                                </tr>
                                                </thead>
                                        </table>
                                        <button className="butt">수정하기</button>

                                   </div>

                                </div>

                        </div>
                        <div className="leave-adj">
                            <h3 className="title">휴가 신청 현황</h3>
                            
                            <LeaveAdjTable EmpLeavInfo = {EmpLeavInfo} />
                        </div>
                        <div className="odd-adj">
                            <h3 className="title">이상근태 조정신청 현황</h3>
                            <OddAdjTable EmpOddInfo = {EmpOddInfo}/>
                        </div>
                    </section>   
                </div>
                <div className="right_wrap">
                    <section className="right">
                        <div className="box">
                            <div>
                                <p>연차 사용률</p>
                                <PtoChart/>
                            </div>
                            <div>
                                <p>이상근태율</p>
                                <OddChart/>
                            </div>
                        </div>
                        <div className="topp">
                            <p>주간근무시간</p>
                            <WeekliyBizTimeChart/>
                        </div>
                        <div className="topp">
                            <p>월별 이상 근태 현황</p>
                            <MonthliyOdd/>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );

    
}