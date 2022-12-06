import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import EmpOddList from "../../components/EmpOdd/EmpOddList";
import OddApprovalActions from "../../redux/modules/OddApproval/OddApprovalActions";

const EmpOddPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const empNo = localStorage.getItem("empNo")
        dispatch(OddApprovalActions.getOddRequest(empNo))
    }, [dispatch])

    return (
        <div>
            <EmpOddList />
        </div>
    )
}

export default EmpOddPage