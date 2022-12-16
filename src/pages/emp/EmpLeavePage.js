import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import EmpLeaveList from "../../components/EmpLeave/EmpLeaveList";
import LeaveApprovalActions from "../../redux/modules/LeaveApproval/LeaveApprovalActions";
import FlightIcon from "@mui/icons-material/Flight";
import EmpInfoActions from "../../redux/modules/EmpInfo/EmpInfoActions";
import LeaveStatus from "../../components/EmpLeave/LeaveStatus";
import '../../css/statusPage.scss'
import Dropdown from "../../components/Dropdown";
import SearchBar from "../../components/SearchBar";

const EmpLeavePage = () => {
    const currentYear = new Date().getFullYear()

    const [flag, setFlag] = useState(false)
    const [year, setYear] = useState(currentYear)
    const dispatch = useDispatch()

    useEffect(() => {
        const empNo = sessionStorage.getItem("empNo")
        dispatch(LeaveApprovalActions.getLeaveRequest(empNo, year))
        dispatch(EmpInfoActions.countLeave(empNo, year))
    }, [dispatch, flag, year])


    return (
        <div className="common-container">
            <div className="menu-title">
                <h2><FlightIcon sx={{marginRight: '3px'}}/>
                    <span>휴가 신청 현황</span>
                </h2>
            </div>
            <div>
                <div className="sub-title">
                    <span>연도별 휴가 사용내역</span>
                </div>
                <LeaveStatus/>
                <div className="sub-title" style={{marginTop:'50px'}}>
                    <Dropdown
                        year={year}
                        setYear={setYear}
                        currentYear={currentYear}/>
                    <span>년도 휴가 상세내역</span>
                </div>
                <EmpLeaveList
                    changeFlag={() => setFlag(!flag)}/>
            </div>
        </div>
    )
}

export default EmpLeavePage