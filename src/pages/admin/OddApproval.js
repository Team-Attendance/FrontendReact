import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import OddApprovalList from "../../components/OddApproval/OddApprovalList";
import OddApprovalStatus from "../../components/OddApproval/OddApprovalStatus";
import SearchBar from "../../components/SearchBar";
import CountApprovalActions from "../../redux/modules/CountApproval/CountApprovalActions";
import OddApprovalActions from "../../redux/modules/OddApproval/OddApprovalActions";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import '../../css/common.scss'

const OddApproval = () => {

    const [flag, setFlag] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(OddApprovalActions.getAllOddApproval())
        dispatch(CountApprovalActions.countOddApproval(new Date().getFullYear()))
    }, [dispatch, flag])

    const onSubmit = (query, option) => {

        if (query === '') {
            dispatch(OddApprovalActions.getAllOddApproval())
        } else {
            dispatch(OddApprovalActions.searchOddApproval(option, query))
        }

    }

    return (
        <div className="common-container">
            <div className="menu-title">
                <h2><CoPresentIcon sx={{marginRight: '3px'}}/>
                    <span>이상 근태 승인</span>
                </h2>
            </div>
            <div>
                <OddApprovalStatus/>
                <SearchBar onSubmit={onSubmit}/>
                <OddApprovalList
                    changeFlag={() => setFlag(!flag)}/>
            </div>
        </div>
    )
}

export default OddApproval