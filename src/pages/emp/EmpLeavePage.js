import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import EmpLeaveList from "../../components/EmpLeave/EmpLeaveList";
import LeaveApprovalActions from "../../redux/modules/LeaveApproval/LeaveApprovalActions";

const EmpLeavePage = () => {

  const dispatch = useDispatch()


  useEffect(() => {
    const empNo = sessionStorage.getItem("empNo")
    dispatch(LeaveApprovalActions.getLeaveRequest(empNo))
  }, [dispatch])


  return (
    <div>
      <EmpLeaveList />
    </div>
  )
}

export default EmpLeavePage