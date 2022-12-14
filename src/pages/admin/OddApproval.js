import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import OddApprovalList from "../../components/OddApproval/OddApprovalList";
import OddApprovalStatus from "../../components/OddApproval/OddApprovalStatus";
import SearchBar from "../../components/SearchBar";
import CountApprovalActions from "../../redux/modules/CountApproval/CountApprovalActions";
import OddApprovalActions from "../../redux/modules/OddApproval/OddApprovalActions";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import '../../css/common.scss'
import Dropdown from "../../components/Dropdown";

const OddApproval = () => {
    const currentYear = new Date().getFullYear()

    const [flag, setFlag] = useState(false)
    const [year, setYear] = useState(currentYear)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(OddApprovalActions.getAllOddApproval(year))
        dispatch(CountApprovalActions.countOddApproval(year))
    }, [dispatch, flag, year])

    const onSubmit = (query, option) => {
        if (query === '') {
            dispatch(OddApprovalActions.getAllOddApproval(year))
        } else {
            dispatch(OddApprovalActions.searchOddApproval(option, query, year))
        }

    }

    return (
        <div className="common-container">
            <div className="menu-title">
                <h2><WarningAmberIcon sx={{marginRight: '3px'}}/>
                    <span>이상 근태 승인</span>
                </h2>
            </div>
            <div>
                <div className="sub-title">
                    <span>연도별 이상 근태 조정 신청 내역</span>
                </div>
                <OddApprovalStatus/>
                <SearchBar onSubmit={onSubmit}/>
                <div className="sub-title">
                    <Dropdown
                        year={year}
                        setYear={setYear}
                        currentYear={currentYear}/>
                    <span>년도 이상 근태 조정 신청 상세내역</span>
                </div>
                <OddApprovalList
                    changeFlag={() => setFlag(!flag)}/>
            </div>
        </div>
    )
}

export default OddApproval