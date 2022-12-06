import "../../css/Report.css";
import "../../echart/PtoChart";
import PtoChart from "../../echart/PtoChart";
import OddChart from "../../echart/OddChart"
import WeeklyBizTimeChart from "../../echart/WeeklyBizTimeChart";
import MonthlyOdd from "../../echart/MonthlyOdd";
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
import ReportActions from "../../redux/modules/report/ReportActions";
import Modal from "../../components/Modal/Modal";
import EmpInfoUpdateModal from "../../components/Modal/EmpInfoUpdateModal";
import SearchIcon from '@mui/icons-material/Search';
import EmpSearchModal from "../../components/Modal/EmpSearchModal";

export function Report() {
    
    let empNo = localStorage.getItem("empNo");
    
    const [modal, setModal ] = useState(false)
    const [empModal, setEmpModal] = useState(false)
   
    const [data, setData ] = useState({})
   
    
   
    const dispatch = useDispatch();
    const { empInfo } =  useSelector((state) => state.empInfo)
    // const { WeeklyInfo } = useSelector((state) => state.WeeklyInfo)
    const [empInfoDetail , setEmpInfoDetail] = useState([{}])
    const [WeeklyInfo , setWeeklyInfo] = useState([{}])

    const { empLeaveInfo } =  useSelector((state) => state.empLeaveInfo)
    const { empOddInfo } =  useSelector((state) => state.empOddInfo)
      
    const ptochart = useCallback(() => dispatch(getPtoData(1, 2022)), [dispatch]);
    const oddchart = useCallback(() => dispatch(getChartData(1, 2022, 11)), [dispatch]);
    // const WeekliyBizTimeChart = useCallback(() => dispatch(getWeekliyBizTime(1)), [dispatch]);
    // const { MonthliyInfo } =  useSelector((state) => state.MonthliyInfo)

    useEffect(() => {
        axios.get(API_URL+"/emp/emp-info/"+empNo)
        .then((res)=>{
          
            setEmpInfoDetail(res.data);
            // WeekliyBizTimeChart();
            ptochart();
            oddchart();
        })
        axios.get(API_URL+"/report/weekliybiztime/"+empNo)
        .then((dataa)=>{

            setWeeklyInfo(dataa.data)
        })
        dispatch(EmpInfoActions.getAllEmps())
        dispatch(ReportActions.getWeeklyBizTime(empNo))
        dispatch(EmpInfoActions.getInfoDetail(empNo))
        dispatch(EmpOddActions.getOddRequest(empNo))
        dispatch(EmpLeaveActions.getLeaveRequest(empNo))  
    }, [dispatch, empNo, oddchart, ptochart])
   
        const onsubmit = () => {
            setEmpModal(true);
            dispatch(EmpInfoActions.getAllEmps)

        }
        

        const onSubmitt = () => {
            setModal(true);
           
        } 
       console.log (WeeklyInfo)
       
    return(
        <div className="wrap">
          <span> <SearchIcon onClick={onsubmit}/>사원검색 </span>
                    {empModal && (
                        <Modal closeModal={() => setEmpModal(!empModal)} >
                            <EmpSearchModal
                                empInfo = {empInfo}
                                closeModal={() => setEmpModal(!empModal)}
                                />
                        </Modal>
                    )}
            <div className="container">
                <div className="left-wrap">
                    <section className="left">
                        <div className="emp-info">
                            
                           
                                <div className="mini">
                                    
                                    <div className="image">
                                    </div>
                                  
                                   <div className="emptable">
                                            <EmpInfoTable empInfoDetail= {empInfoDetail} />
                                        <button onClick={onSubmitt} className="butt">수정하기</button>
                                        {modal && (
                                            <Modal closeModal={() => setModal(!modal)} >
                                                <EmpInfoUpdateModal
                                                    empInfoDetail = {empInfoDetail}
                                                    closeModal={() => setModal(!modal)}
                                                    />
                                            </Modal>
                                        )}
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
                            <WeeklyBizTimeChart WeeklyInfo = {WeeklyInfo} />
                        </div>
                        <div className="topp">
                            <p>월별 이상 근태 현황</p>
                            <MonthlyOdd  />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );

    
    }
