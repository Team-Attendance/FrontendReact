import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LeaveApprovalList from "../../components/LeaveApproval/LeaveApprovalList";
import SearchBar from "../../components/SearchBar";
import LeaveApprovalActions from "../../redux/modules/LeaveApproval/LeaveApprovalActions";

const LeaveApproval = () => {

    const {leaveApprovalInfo} = useSelector((state) => state.leaveApprovalInfo)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(LeaveApprovalActions.getAllLeaveApproval())
    }, [])

    const onSubmit = (query, option) => {

        if(query === ''){
            dispatch(LeaveApprovalActions.getAllLeaveApproval())
        } else{
            dispatch(LeaveApprovalActions.searchLeaveApproval(option, query))
        }

    }

    return (
        <div>
            <SearchBar onSubmit={onSubmit} />
            <LeaveApprovalList leaveApprovalInfo={leaveApprovalInfo} />
        </div>
    )
}

export default LeaveApproval