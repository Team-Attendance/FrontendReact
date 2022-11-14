
const LeaveApprovalList = ({leaveAppovalInfo}) => {
    const column = ["신청일자", "사번", "이름", "직급", "휴가종류", "휴가 시작 일자", "휴가 종료 일자", "상태", "결재 일자", "결재자"]

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        {column.map((data, index) => {
                            return(
                                <th key={index}>
                                    {data}
                                </th>
                            )
                            }
                        )}
                    </tr>
                    {leaveAppovalInfo?.data?.length > 0 && leaveAppovalInfo.data.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{data.leaveAdjDate}</td>
                                <td>{data.empNo}</td>
                                <td>{data.empName}</td>
                                <td>{data.empPosition}</td>
                                <td>{data.leaveType}</td>
                                <td>{data.leaveStartDate}</td>
                                <td>{data.leaveEndDate}</td>
                                <td>{data.leaveAdjState}</td>
                                <td>{data.leaveAdjApproDate}</td>
                                <td>{data.leaveAdjAppro}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default LeaveApprovalList