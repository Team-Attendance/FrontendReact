import "../../css/Report.css";
import "../../echart/PtoChart";
import PtoChart from "../../echart/PtoChart";
import OddChart from "../../echart/OddChart"
import WeeklyBizTimeChart from "../../echart/WeeklyBizTimeChart";
import MonthlyOdd from "../../echart/MonthlyOdd";
import LeaveAdjTable from "../../table/LeaveAdjTable";
import OddAdjTable from "../../table/OddAdjTable";
import EmpInfoTable from "../../table/EmpInfoTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback, useState } from "react";
import { getPtoData } from "../../modules/pto";
import { getChartData } from "../../modules/eChart";
import EmpInfoActions from "../../redux/modules/EmpInfo/EmpInfoActions";
import axios from "axios";
import { API_URL } from "../../utils/constants/Config"
import { useParams } from "react-router-dom"; 
import ReportActions from "../../redux/modules/report/ReportActions";
import Modal from "../../components/Modal/Modal";
import EmpInfoUpdateModal from "../../components/Modal/EmpInfoUpdateModal";
import SearchIcon from '@mui/icons-material/Search';
import EmpSearchModal from "../../components/Modal/EmpSearchModal";
import OddApprovalActions from "../../redux/modules/OddApproval/OddApprovalActions";
import LeaveApprovalActions from "../../redux/modules/LeaveApproval/LeaveApprovalActions";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PieChartIcon from '@mui/icons-material/PieChart';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

export function Report(){

    // let empNo = axios.get(API_URL+"/admin/emp-management/"+empNo)

    const {empNo} = useParams();
   
    // let empNo = sessionStorage.getItem("empNo");
    const currentYear = new Date().getFullYear()
    
    const [modal, setModal ] = useState(false)
    const [empModal, setEmpModal] = useState(false)

    const [data, setData ] = useState({})
    const [empInfoDetail , setEmpInfoDetail] = useState([{}]);
    
    const dispatch = useDispatch();
    const { empInfo } =  useSelector((state) => state.empInfo)
    const { WeeklyInfo } = useSelector((state) => state.WeeklyInfo)
    const { leaveApprovalInfo } =  useSelector((state) => state.leaveApprovalInfo)
    const { MonthliyInfo } =  useSelector((state) => state.MonthliyInfo)
    const { oddApprovalInfo } =  useSelector((state) => state.oddApprovalInfo)
    
    const ptochart = useCallback(() => dispatch(getPtoData(1, 2022)), [dispatch]);
    const oddchart = useCallback(() => dispatch(getChartData(1, 2022, 10)), [dispatch]);
    
    
    useEffect(() => {
        axios.get(API_URL+"/emp/emp-info/"+empNo)
        .then((res)=>{
          setEmpInfoDetail(res.data);
        })  
        dispatch(EmpInfoActions.getEmpinfo())
        ptochart();
        oddchart();
        dispatch(ReportActions.getMonthlyOdd(empNo, currentYear))   
        dispatch(ReportActions.getWeeklyBizTime(empNo))
        dispatch(OddApprovalActions.getOddRequest(empNo, currentYear))
        dispatch(LeaveApprovalActions.getLeaveRequest(empNo, currentYear))
    }, [dispatch, empNo, oddchart, ptochart])
   
        const onsubmit = () => {
            setEmpModal(true);
            dispatch(EmpInfoActions.getAllEmps())

        }


        const onSubmitt = () => {
            setModal(true);
        }
       
    return(
        
        <div className="common-container">
          <div className="menu-title">
            <h2>
                <span style={{marginLeft:"550px"}} onClick={onsubmit}> <SearchIcon onClick={onsubmit}/>사원검색 </span>
                    {empModal && (
                        <Modal closeModal={() => setEmpModal(!empModal)} >
                            <EmpSearchModal
                                empInfo = {empInfo}
                                closeModal={() => setEmpModal(!empModal)}
                                />
                        </Modal>
                    )}
            </h2>
            
          </div>
            <div className="container">
                <div className="left-wrap">
                
                    <section className="left">
                        
                        <div className="emp-infoo">
                            
                          <span className="sub-title"> <PermContactCalendarIcon/>사원정보 </span>
                            
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
                        <span className="sub-title"><PendingActionsIcon/>휴가신청 현황</span>
                        <div className="leave-adj">
                            
                            
                            <LeaveAdjTable leaveApprovalInfo = {leaveApprovalInfo} />
                        </div>
                        <span className="sub-title"><PendingActionsIcon/>이상근태 조정신청 현황</span>
                        <div className="odd-adj">
                           
                            <OddAdjTable oddApprovalInfo = {oddApprovalInfo}/>
                        </div>
                    </section>   
                </div>
                <div className="right_wrap">
                
                    <section className="right">
                    <div>
                    <span className="start"> <span className="sub-title"><PieChartIcon/>연차 사용 현황</span>  <span className="sub-title"><span className="end"><PieChartIcon/>당월 이상근태 현황</span></span></span>
                    </div>
                        <div className="box">
                        
                            <div className="right top">
                                
                                <PtoChart/>
                            </div>
                           
                            <div className="right top">
                               
                                <OddChart  />
                            </div>
                        </div>
                            <span className="sub-title"><LeaderboardIcon/>주간 근무시간 현황</span>
                        <div className="topp">
                           
                            <WeeklyBizTimeChart WeeklyInfo = {WeeklyInfo} />
                        </div>
                            <span className="sub-title"><LeaderboardIcon/>월별 이상근태 현황</span>
                        <div className="topp">
                         
                            <MonthlyOdd MonthliyInfo = {MonthliyInfo} />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );

    
}