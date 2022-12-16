


const EmpInfoTable = ({empInfoDetail}) => {
    const dateFormatting = (millisec) =>{
        // millisec를 날짜 형식으로, YYYY. MM. DD.를 YYYY-MM-DD로 변경
        const date = new Date(millisec).toLocaleDateString().replace(/\./g, '').replace(/\s/g, '-')
    
        return date
      }


    return(
                <table className="table">
                                        
                                            <thead className="tablerow">
                                                <tr >
                                                    
                                                    <th className="background">이름</th>
                                                    <td style={{fontSize:"12px"}}>{empInfoDetail.empName}</td>
                                                    <th className="background">사번</th>
                                                    <td style={{fontSize:"12px"}}>{empInfoDetail.empNo}</td>
                                                </tr>
                                            </thead>

                                             <thead className="tablerow">
                                                
                                                <tr >
                                                    <th className="background">부서</th>
                                                    <td style={{fontSize:"12px"}}>{empInfoDetail.deptName}</td>
                                                    <th className="background">직급</th>
                                                    <td style={{fontSize:"12px"}}>{empInfoDetail.empPosition}</td>
                                                </tr>
                                                </thead>

                                                <thead className="tablerow">
                                                <tr >
                                                <th className="background">이메일</th>
                                                <td style={{fontSize:"12px"}}>{empInfoDetail.empEmail}</td>
                                                <th className="background">휴대폰번호</th>
                                                <td style={{fontSize:"12px"}}>{empInfoDetail.empCellPhone}</td>
                                                </tr>
                                                </thead>
                                                <thead className="tablerow">
                                                <tr >
                                                <td className="background">사내번호</td>
                                                <td style={{fontSize:"13px"}}>{empInfoDetail.empOfficePhone}</td>
                                                <td className="background">비상연락망</td>
                                                <td style={{fontSize:"12px"}}>{empInfoDetail.empContactList}</td>
                                                </tr>
                                                </thead>
                                                <thead className="tablerow">
                                                <tr >
                                                <td className="background">입사일자</td>
                                                <td style={{fontSize:"12px"}}>{dateFormatting(empInfoDetail.empFirstDayOfWork)}</td>
                                                
                                                
                                                
                                                </tr>
                                                </thead>
                                        </table>
        )
}
export default EmpInfoTable;