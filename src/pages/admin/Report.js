import { border } from "@mui/system";
import "../../css/Report.css";
import "../../echart/PtoChart";
import PtoChart from "../../echart/PtoChart";
import OddChart from "../../echart/OddChart"
import WeekliyBizTimeChart from "../../echart/WeekliyBizTimeChart";
import MonthliyOdd from "../../echart/MonthliyOdd";
import LeaveAdjTable from "../../table/LeaveAdjTable";
import OddAdjTable from "../../table/OddAdjTable";
export function Report(){

    return(
        <div className="wrap">
            <div className="container">
                <div className="left-wrap">
                    <section className="left">
                        <div className="emp-info">
                            <h3 className="title">사원정보</h3>
                        </div>
                        <div className="leave-adj">
                            <h3 className="title">휴가 신청 현황</h3>
                            <LeaveAdjTable className="table"/>
                        </div>
                        <div className="odd-adj">
                            <h3 className="title">이상근태 조정신청 현황</h3>
                            <OddAdjTable className="table"/>
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