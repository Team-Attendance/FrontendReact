import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LeaveApprovalList from "../../components/LeaveApproval/LeaveApprovalList";
import LeaveApprovalActions from "../../redux/modules/LeaveApproval/LeaveApprovalActions";

const LeaveApproval = () => {

    const {leaveApprovalInfo} = useSelector((state) => state.leaveApprovalInfo)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(LeaveApprovalActions.getAllLeaveRequest())
    }, [])

    return (
        <div>
            <LeaveApprovalList leaveAppovalInfo={leaveApprovalInfo} />
        </div>
    )
}

export default LeaveApproval