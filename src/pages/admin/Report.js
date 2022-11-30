import "../../css/Report.css";
import "../../echart/PtoChart";
import PtoChart from "../../echart/PtoChart";
import OddChart from "../../echart/OddChart"
import WeekliyBizTimeChart from "../../echart/WeekliyBizTimeChart";
import MonthliyOdd from "../../echart/MonthliyOdd";
import LeaveAdjTable from "../../table/LeaveAdjTable";
import OddAdjTable from "../../table/OddAdjTable";
import EmpInfoTable from "../../table/EmpInfoTable";
import EmpOddActions from "../../redux/modules/EmpOdd/EmpOddActions";
import EmpLeaveActions from "../../redux/modules/EmpLeave/EmpLeaveActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback, useState } from "react";
import { getPtoData } from "../../modules/pto";
import { getChartData } from "../../modules/eChart";
import EmpInfoActions from "../../redux/modules/EmpInfo/EmpInfoActions";
import axios from "axios";
import { API_URL } from "../../utils/constants/Config";
export function Report(){
    
    let empNo = localStorage.getItem("empNo");
    
    const dispatch = useDispatch();
    const [empInfoDetail , setEmpInfoDetail] = useState([{}])
    const { empLeaveInfo } =  useSelector((state) => state.empLeaveInfo)
    const { empOddInfo } =  useSelector((state) => state.empOddInfo) 
    const ptochart = useCallback(() => dispatch(getPtoData(1, 2022)), [dispatch]);
    const oddchart = useCallback(() => dispatch(getChartData(1, 2022, 10)), [dispatch]);
   
    useEffect(() => {
        axios.get(API_URL+"/emp/emp-info/"+empNo)
        .then((res)=>{
          
            setEmpInfoDetail(res.data);
        
            ptochart();
            oddchart();
        })
        dispatch(EmpInfoActions.getInfoDetail(empNo))
        dispatch(EmpOddActions.getOddRequest(empNo))
        dispatch(EmpLeaveActions.getLeaveRequest(empNo))  
    }, [dispatch, empNo, oddchart, ptochart])
   

    return(
        <div className="wrap">
            <div className="container">
                <div className="left-wrap">
                    <section className="left">
                        <div className="emp-info">
                            
                           
                                <div className="mini">
                                    
                                    <div className="image">
                                    </div>
                                  
                                   <div className="emptable">
                                            <EmpInfoTable empInfoDetail= {empInfoDetail} />
                                        <button className="butt">수정하기</button>

                                   </div>

                                </div>

                        </div>
                        <div className="leave-adj">
                            <h3 className="title">휴가 신청 현황</h3>
                            
                            <LeaveAdjTable empLeaveInfo = {empLeaveInfo} />
                        </div>
                        <div className="odd-adj">
                            <h3 className="title">이상근태 조정신청 현황</h3>
                            <OddAdjTable empOddInfo = {empOddInfo}/>
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
                                <OddChart  />
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