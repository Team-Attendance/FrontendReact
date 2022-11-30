import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { formatDate, formatHyphenFulldate } from "../modules/cal_function";
import "./leaveModal.scss";



const DeptModal = ({ deptModalDate, deptLeaveData, setDeptLeaveDate, showDeptModal, setShowDeptModal }) => {

  // 휴가 신청 페이지
  const firstPage = () => {
    return (
      <div>
        <div className="opacity-area" onClick={() => { setShowDeptModal(false); setDeptLeaveDate(null);}}></div>
        <div className="modal-area">
          <div className="leave-form-wrap">
            <IconButton size="small" sx={{ position: 'absolute', right: '20px', top: '20px' }} onClick={() => { setShowDeptModal(false); setDeptLeaveDate(null);}}>
              <CloseIcon />
            </IconButton>

            <div>
              <h1>휴가 일정 조회</h1>
            </div>
            <div>
              <h2 style={{ fontWeight: 'bold', fontSize: '1.1rem', margin: '15px 0' }}>{deptModalDate}</h2>
              <div className="form-item dept">
                <h3>휴가({deptLeaveData.leaveList.length}명)</h3>
                <div style={{ padding: '2px 7px', fontSize: '0.8rem', lineHeight: '30px' }}>
                  {deptLeaveData.leaveList.map((leave) => {
                    return (
                      <>
                        <div><span>{leave.emp_name} : {formatHyphenFulldate(formatDate(leave.leave_start_date))} ~ {formatHyphenFulldate(formatDate(leave.leave_end_date))}</span></div>
                      </>
                    );
                  })}

                  {deptLeaveData.leaveList.length === 0 && <div><span>해당일자의 휴가자가 없습니다.</span></div>}
                </div>
              </div>

              <div className="form-item dept">
                <h3>오전 휴가({deptLeaveData.morningLeaveList.length}명)</h3>
                <div style={{ padding: '2px 7px', fontSize: '0.8rem', fontWeight: '' }}>
                  {deptLeaveData.morningLeaveList.map((morningLeave) => {
                    return (
                      <>
                        <span>{morningLeave.emp_name}</span>
                      </>
                    );
                  })}
                  {deptLeaveData.morningLeaveList.length === 0 && <div><span>해당일자의 휴가자가 없습니다.</span></div>}
                </div>

              </div>

              <div className="form-item dept">
                <h3>오후 휴가({deptLeaveData.afternoonLeaveList.length}명)</h3>
                <div style={{ padding: '2px 7px', fontSize: '0.8rem', fontWeight: '' }}>
                  {deptLeaveData.afternoonLeaveList.map((afternoonLeave) => {
                    return (
                      <>
                        <span>{afternoonLeave.emp_name}</span>
                      </>
                    );
                  })}
                  {deptLeaveData.afternoonLeaveList.length === 0 && <div><span>해당일자의 휴가자가 없습니다.</span></div>}
                </div>

              </div>
              <div>
                <input type="button" value="확인" onClick={() => { setShowDeptModal(false); setDeptLeaveDate(null);}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {deptLeaveData && showDeptModal && firstPage()}
    </div>
  );
}

export default DeptModal;