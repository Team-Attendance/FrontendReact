import "../../css/Report.css";
import "../../echart/PtoChart";
import PtoChart from "../../echart/PtoChart";
import OddChart from "../../echart/OddChart"
import WeeklyBizTimeChart from "../../echart/WeeklyBizTimeChart";
import MonthlyOdd from "../../echart/MonthlyOdd";
import LeaveAdjTable from "../../table/LeaveAdjTable";
import OddAdjTable from "../../table/OddAdjTable";
import EmpInfoTable from "../../table/EmpInfoTable";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useCallback, useState} from "react";
import {getPtoData} from "../../modules/pto";
import {getChartData} from "../../modules/eChart";
import EmpInfoActions from "../../redux/modules/EmpInfo/EmpInfoActions";
import axios from "axios";
import {API_URL} from "../../utils/constants/Config"
import {useParams} from "react-router-dom";
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
import GroupIcon from '@mui/icons-material/Group';
import { SystemSecurityUpdate } from "@mui/icons-material";
import { border } from "@mui/system";

export function Report() {

    const {empNo} = useParams();
    const currentYear = new Date().getFullYear()

    const [modal, setModal] = useState(false)
    const [empModal, setEmpModal] = useState(false)
    const [empInfoDetail, setEmpInfoDetail] = useState([{}]);

    const dispatch = useDispatch();
    const {WeeklyInfo} = useSelector((state) => state.WeeklyInfo)
    const {leaveApprovalInfo} = useSelector((state) => state.leaveApprovalInfo)
    const {MonthliyInfo} = useSelector((state) => state.MonthliyInfo)
    const {oddApprovalInfo} = useSelector((state) => state.oddApprovalInfo)

    const ptochart = useCallback(() => dispatch(getPtoData(1, 2022)), [dispatch]);
    const oddchart = useCallback(() => dispatch(getChartData(1, 2022, 10)), [dispatch]);

    console.log("박상민 : "+empNo);

    useEffect(() => {
        axios.get(API_URL + "/emp/emp-info/" + empNo)
            .then((res) => {
                setEmpInfoDetail(res.data);
            })
        ptochart();
        oddchart();

        dispatch(ReportActions.getMonthlyOdd(empNo, currentYear))
        dispatch(ReportActions.getWeeklyBizTime(empNo))
        dispatch(OddApprovalActions.getOddRequest(empNo, currentYear))
        dispatch(LeaveApprovalActions.getLeaveRequest(empNo, currentYear))
    }, [dispatch, empNo, oddchart, ptochart, currentYear])

    const onsubmit = () => {
        setEmpModal(!empModal);
        dispatch(EmpInfoActions.getAllEmps())
    }

    const onSubmitt = () => {
        setModal(!modal);
    }
    console.log("q케케케"+MonthliyInfo.data);
    // console.log(MonthliyInfo != null && MonthliyInfo.data != null  && MonthliyInfo.data[0].oddcount)
    return (

        <div className="common-container">
            <div className="menu-title">
                <h2>
                     <span><GroupIcon/>사원관리</span> 
                <span className="titledivider" onClick={onsubmit}> <SearchIcon onClick={onsubmit}/>사원검색 </span>

                {empModal && (
                        <EmpSearchModal
                            closeModal={() => setEmpModal(!empModal)}
                        />
                    )}
                </h2>
                    

            </div>
            <div className="container">
                <div className="left-wrap">
                <div className="sub-title"> <PermContactCalendarIcon/>기본정보     
                                
                                </div>
                    <section className="left">
                        <div className="emp-infoo">
                        {/* <button onClick={onSubmitt} className="butt">수정하기</button> */}
                            
                            <div className="mini">
                                
                                <div className="image">
                                </div>
                                <div className="emptable">
                                    <EmpInfoTable empInfoDetail={empInfoDetail}/>
                                    
                                    {modal && (
                                        <Modal closeModal={() => setModal(!modal)}>
                                            <EmpInfoUpdateModal
                                                empInfoDetail={empInfoDetail}
                                                closeModal={() => setModal(!modal)}
                                            />
                                        </Modal>
                                    )}
                                    <button onClick={onSubmitt} className="butt">수정하기</button>
                                </div>
                            </div>
                        </div>
                        <span className="sub-title"><PendingActionsIcon/>휴가신청 현황</span>
                        <div className="leave-adj">
                            <LeaveAdjTable leaveApprovalInfo={leaveApprovalInfo}/>
                        </div>
                        <span className="sub-title"><PendingActionsIcon/>이상근태 조정신청 현황</span>
                        <div className="odd-adj">
                            <OddAdjTable oddApprovalInfo={oddApprovalInfo}/>
                        </div>
                    </section>
                </div>
                <div className="right_wrap">
               
                     
              
                    
                    <section className="right">
                        
                           <div style={{display:"flex"}}>
                            <div className="sub-title" style={{marginRight:"17rem"}}><PieChartIcon/>연차 사용 현황</div>
                            <div className="sub-title"><PieChartIcon/>당월 이상근태 현황</div>
                                <span className="sub-title"> </span>                                                                                           
                            </div>     
                           
                            
                       
                        <div className="boxx">
                            <div className="right top">
                                <PtoChart/>
                            </div>
                            <div className="right top">
                                <OddChart/>
                            </div>
                        </div>
                        <span className="sub-title"><LeaderboardIcon/>주간 근무시간 현황</span>
                        <div className="topp">
                            <WeeklyBizTimeChart WeeklyInfo={WeeklyInfo}/>
                        </div>
                        <span className="sub-title"><LeaderboardIcon/>월별 이상근태 현황</span>
                        <div className="topp">
                            <MonthlyOdd MonthliyInfo={MonthliyInfo}/>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );


}