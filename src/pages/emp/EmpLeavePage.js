import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import EmpLeaveList from "../../components/EmpLeave/EmpLeaveList";
import LeaveApprovalActions from "../../redux/modules/LeaveApproval/LeaveApprovalActions";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import EmpInfoActions from "../../redux/modules/EmpInfo/EmpInfoActions";
import LeaveStatus from "../../components/EmpLeave/LeaveStatus";

const EmpLeavePage = () => {

    const [flag, setFlag] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        const empNo = localStorage.getItem("empNo")
        dispatch(LeaveApprovalActions.getLeaveRequest(empNo))
        dispatch(EmpInfoActions.countLeave(empNo))
    }, [dispatch, flag])


    return (
        <div className="common-container">
            <div className="menu-title">
                <h2><CoPresentIcon sx={{marginRight: '3px'}}/>
                    <span>휴가 신청 현황</span>
                </h2>
            </div>
            <div>
                <LeaveStatus/>
                <EmpLeaveList
                    changeFlag={() => setFlag(!flag)}/>
            </div>
        </div>
    )
}

export default EmpLeavePage