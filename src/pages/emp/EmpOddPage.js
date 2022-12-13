import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import EmpOddList from "../../components/EmpOdd/EmpOddList";
import OddApprovalActions from "../../redux/modules/OddApproval/OddApprovalActions";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import OddStatus from "../../components/EmpOdd/OddStatus";
import CountApprovalActions from "../../redux/modules/CountApproval/CountApprovalActions";
import Dropdown from "../../components/Dropdown";

const EmpOddPage = () => {
    const currentYear = new Date().getFullYear()

    const [flag, setFlag] = useState(false)
    const [year, setYear] = useState(currentYear)
    const dispatch = useDispatch()

    useEffect(() => {
        const empNo = localStorage.getItem("empNo")
        dispatch(OddApprovalActions.getOddRequest(empNo, year))
        dispatch(CountApprovalActions.countEmpOdd(empNo, year))
    }, [dispatch, flag, year])

    return (
        <div className="common-container">
            <div className="menu-title">
                <h2><CoPresentIcon sx={{marginRight: '3px'}}/>
                    <span>이상 근태 신청 현황</span>
                </h2>
            </div>
            <div>
                <Dropdown
                    year={year}
                    setYear={setYear}
                    currentYear={currentYear}/>
                <div className="sub-title">
                    <span>연도별 이상 근태 조정 신청 내역</span>
                </div>
                <OddStatus/>
                <div className="sub-title">
                    <span className="year">{year}</span>
                    <span>년도 이상 근태 조정 신청 상세내역</span>
                </div>
                <EmpOddList
                    changeFlag={() => setFlag(!flag)}/>
            </div>
        </div>
    )
}

export default EmpOddPage