import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import EmpOddList from "../../components/EmpOdd/EmpOddList";
import OddApprovalActions from "../../redux/modules/OddApproval/OddApprovalActions";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import OddStatus from "../../components/EmpOdd/OddStatus";
import CountApprovalActions from "../../redux/modules/CountApproval/CountApprovalActions";

const EmpOddPage = () => {

    const [flag, setFlag] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        const empNo = localStorage.getItem("empNo")
        dispatch(OddApprovalActions.getOddRequest(empNo))
        dispatch(CountApprovalActions.countEmpOdd(empNo))
    }, [dispatch, flag])

    return (
        <div className="common-container">
            <div className="menu-title">
                <h2><CoPresentIcon sx={{marginRight: '3px'}}/>
                    <span>이상 근태 신청 현황</span>
                </h2>
            </div>
            <div>
                <OddStatus/>
                <EmpOddList
                    changeFlag={() => setFlag(!flag)}/>
            </div>
        </div>
    )
}

export default EmpOddPage