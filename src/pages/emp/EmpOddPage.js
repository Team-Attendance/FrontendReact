import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmpOddList from "../../components/EmpOdd/EmpOddList";
import EmpOddActions from "../../redux/modules/EmpOdd/EmpOddActions";

const EmpOddPage = () => {

    const { empOddInfo } = useSelector((state) => state.empOddInfo)

    const dispatch = useDispatch()

    useEffect(() => {
        const empNo = localStorage.getItem("empNo")
        dispatch(EmpOddActions.getOddRequest(empNo))
    }, [dispatch])

    return (
        <div>
            <EmpOddList
                empOddInfo={empOddInfo} />
        </div>
    )
}

export default EmpOddPage