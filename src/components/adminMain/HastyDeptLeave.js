import { formatDate, formatHyphenFulldate } from '../../modules/cal_function';
import './hastyDeptLeave.scss';

const HastyDeptLeave = ({ documentStatusData }) => {

  const tempArray = [1, 2, 3];
  let hastyDeptLeaveLength = 0;
  const hastyDeptLeave = documentStatusData.hastyDeptLeave;

  let leaveClass;

  {
    if (hastyDeptLeave != null) {
      hastyDeptLeaveLength = hastyDeptLeave.length;
    }
  }

  return (
    <div>
      <div className="admin-main-page hasty-dept-leave">
        {hastyDeptLeave &&
          hastyDeptLeave.map((element, index) => {
            switch (element.leave_type) {
              case '오전휴가':
                leaveClass = "morning-leave";
                break;
              case '오후휴가':
                leaveClass = "afternoon-leave";
                break;
              case '휴가':
                leaveClass = "normal-leave";
                break;
              default:
                break;

            }
            return (
              <div className="hasty-leave-element">
                <div className={`leave-type ${leaveClass}`}><span>{element.leave_type}</span></div>
                <div className="leave-date">
                  <span>{formatHyphenFulldate(formatDate(element.leave_start_date))}- {formatHyphenFulldate(formatDate(element.leave_end_date))}</span>
                </div>
                <div className="emp-info">
                  <span>{element.emp_name} <span>{element.emp_position}</span></span>
                </div>
              </div>
            );
          })
        }

        {hastyDeptLeaveLength < 3 &&
          tempArray.map((element, index) => {
            if (index < 3 - hastyDeptLeaveLength) {
              return (
                <div className="hasty-leave-element">
                  <span className="empty-leave">처리가 급한 휴가가 없습니다.</span>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  );
}

export default HastyDeptLeave;