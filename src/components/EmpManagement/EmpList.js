

const EmpList = ({empInfo}) => {

    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <th>사번</th>
                    <th>이름</th>
                    <th>부서</th>
                    <th>직급</th>
                </tr>
                {empInfo?.data?.length > 0 && empInfo.data.map((data, index) =>{
                    return(
                        // Link to
                        <tr key={index}>
                            <td >{data.empNo}</td>
                            <td>{data.empName}</td>
                            <td>{data.deptName}</td>
                            <td>{data.empPosition}</td>
                        </tr>
                    )
                }

                )}
                </tbody>
            </table>
        </div>
    )
}

export default EmpList