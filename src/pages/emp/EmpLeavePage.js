import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmpLeaveList from "../../components/EmpLeave/EmpLeaveList";
import EmpLeaveActions from "../../redux/modules/EmpLeave/EmpLeaveActions";

const EmpLeavePage = () => {

  const { empLeaveInfo } = useSelector((state) => state.empLeaveInfo)
  const dispatch = useDispatch()


  useEffect(() => {
    const empNo = localStorage.getItem("empNo")
    dispatch(EmpLeaveActions.getLeaveRequest(empNo))
  }, [dispatch])


  return (
    <div>
      <EmpLeaveList
        empLeaveInfo={empLeaveInfo}
      />
    </div>
  )
}

export default EmpLeavePage