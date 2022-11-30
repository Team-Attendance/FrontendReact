


const EmpInfoTable = ({empInfoDetail}) => {
    
    return(
                <table className="table">
                                        
                                            <thead className="tablerow">
                                                <tr >
                                                    
                                                    <th className="background">이름</th>
                                                    <td>{empInfoDetail.empName}</td>
                                                    <th className="background">사번</th>
                                                    <td>{empInfoDetail.empNo}</td>
                                                </tr>
                                            </thead>

                                             <thead className="tablerow">
                                                
                                                <tr >
                                                    <th className="background">부서</th>
                                                    <td>{empInfoDetail.deptName}</td>
                                                    <th className="background">직급</th>
                                                    <td>{empInfoDetail.empPosition}</td>
                                                </tr>
                                                </thead>

                                                <thead className="tablerow">
                                                <tr >
                                                <th className="background">이메일</th>
                                                <td>{empInfoDetail.empEmail}</td>
                                                <th className="background">휴대폰번호</th>
                                                <td>{empInfoDetail.empCellPhone}</td>
                                                </tr>
                                                </thead>
                                                <thead className="tablerow">
                                                <tr >
                                                <td className="background">사내번호</td>
                                                <td>{empInfoDetail.empOfficePhone}</td>
                                                <td className="background">비상연락망</td>
                                                <td>{empInfoDetail.empContactList}</td>
                                                </tr>
                                                </thead>
                                                <thead className="tablerow">
                                                <tr >
                                                <td className="background">입사일자</td>
                                                <td className="center">{empInfoDetail.empFirstDayOfWork}</td>
                                                
                                                
                                                
                                                </tr>
                                                </thead>
                                        </table>
        )
}
export default EmpInfoTable;