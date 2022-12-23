import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import LeaveApprovalList from "../../components/LeaveApproval/LeaveApprovalList";
import LeaveApprovalStatus from "../../components/LeaveApproval/LeaveApprovalStatus";
import SearchBar from "../../components/SearchBar";
import CountApprovalActions from "../../redux/modules/CountApproval/CountApprovalActions";
import LeaveApprovalActions from "../../redux/modules/LeaveApproval/LeaveApprovalActions";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Dropdown from "../../components/Dropdown";

const LeaveApproval = () => {
    const currentYear = new Date().getFullYear()
    const deptName = sessionStorage.getItem("deptName")
    const [flag, setFlag] = useState(false)
    const [year, setYear] = useState(currentYear)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(LeaveApprovalActions.getAllLeaveApproval(deptName, year))
        dispatch(CountApprovalActions.countLeaveApproval(deptName, year))
    }, [dispatch, flag, year])

    const onSubmit = (query, option) => {
        if (query === '') {
            dispatch(LeaveApprovalActions.getAllLeaveApproval(deptName, year))
        } else {
            dispatch(LeaveApprovalActions.searchLeaveApproval(option, query, deptName, year))
        }
    }

    return (
        <div className="common-container">
            <div className="menu-title">
                <h2><EventAvailableIcon sx={{marginRight: '3px'}}/>
                    <span>휴가 관리</span>
                </h2>
            </div>
            <div>
                <div className="sub-title">
                    <span>연도별 휴가 신청 내역</span>
                </div>
                <LeaveApprovalStatus/>
                <SearchBar onSubmit={onSubmit}/>
                <div className="sub-title">
                    <Dropdown
                        year={year}
                        setYear={setYear}
                        currentYear={currentYear}/>
                    <span>년도 휴가 신청 상세내역</span>
                </div>
                <LeaveApprovalList
                    changeFlag={() => setFlag(!flag)}
                />
            </div>
        </div>
    )
}

export default LeaveApproval