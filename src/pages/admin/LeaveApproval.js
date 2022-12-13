import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import LeaveApprovalList from "../../components/LeaveApproval/LeaveApprovalList";
import LeaveApprovalStatus from "../../components/LeaveApproval/LeaveApprovalStatus";
import SearchBar from "../../components/SearchBar";
import CountApprovalActions from "../../redux/modules/CountApproval/CountApprovalActions";
import LeaveApprovalActions from "../../redux/modules/LeaveApproval/LeaveApprovalActions";
import CoPresentIcon from '@mui/icons-material/CoPresent';

const LeaveApproval = () => {

    const [flag, setFlag] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(LeaveApprovalActions.getAllLeaveApproval())
        dispatch(CountApprovalActions.countLeaveApproval(new Date().getFullYear()))
    }, [dispatch, flag])

    const onSubmit = (query, option) => {

        if (query === '') {
            dispatch(LeaveApprovalActions.getAllLeaveApproval())
        } else {
            dispatch(LeaveApprovalActions.searchLeaveApproval(option, query))
        }

    }

    return (
        <div className="common-container">
            <div className="menu-title">
                <h2><CoPresentIcon sx={{marginRight: '3px'}}/>
                    <span>휴가 승인</span>
                </h2>
            </div>
            <div>
                <LeaveApprovalStatus/>
                <SearchBar onSubmit={onSubmit}/>
                <LeaveApprovalList
                    changeFlag={() => setFlag(!flag)}
                />
            </div>
        </div>
    )
}

export default LeaveApproval