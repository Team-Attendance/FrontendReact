import React from "react";

import { useSelector } from 'react-redux';


export default function AdminDocument() {

    const leavedata = useSelector(state => state.adminMain.data);


    return(
        <div>
            <h1>전체 승인 대기 문서 {leavedata != null && leavedata.admin.TotalSingCount}일 </h1>
            <h2>휴가 승인 대기: {leavedata != null && leavedata.admin.LeaveSignCount}일 </h2>
            <h2>이상 근태 승인 대기: {leavedata != null && leavedata.admin.oddSignCount}일 </h2>
           
        </div>
    );
}