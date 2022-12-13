import './deptOddBizStatus.scss';

const DeptOddBizStatus = ({ documentStatusData }) => {
  const tempArray = [1, 2, 3];
  let deptOddBizLength = 0;
  const deptTotalOddBizStatus = documentStatusData.deptTotalOddBizStatus;

  {
    if (deptTotalOddBizStatus != null) {
      deptOddBizLength = deptTotalOddBizStatus.length;
    }
  }

  return (
    <div>
      <div className="admin-main-page dept-odd-biz-status">
        {deptTotalOddBizStatus &&
          deptTotalOddBizStatus.map((element, index) => {
            if (index < 3) {
              return (
                <div className="status-element">
                  <div className="emp-info">{element.empName} <span>{element.empPosition}</span></div>
                  <div className="emp-odd-biz-bar">
                    <div style={{ width: `${element.oddBizPersent}%` }}></div>
                  </div>
                  <div className="emp-odd-biz-persent">{element.oddBizPersent}%</div>
                </div>
              )
            }
          })
        }

        {deptOddBizLength < 3 &&
          tempArray.map((element, index) => {
            if (index < 3 - deptOddBizLength) {
              return (
                <div className="status-element">
                  <span className="empty-odd-biz">이상근태가 있는 사원이 없습니다.</span>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  );
}

export default DeptOddBizStatus;