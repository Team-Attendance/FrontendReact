import axios from "axios";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { formatDate, formatHyphenFulldate, formatHyphenToKorean } from "../modules/cal_function";
import "./leaveModal.scss";
import { useRef } from "react";
import { useState } from "react";
import { lineHeight } from "@mui/system";


const DeptModal = ({ deptLeaveData, showDeptModal, setShowDeptModal }) => {



  // const oddBizDetail = useRef();

  // const oddBizRegistration = (empNo, oddBizDate, oddBizType, oddBizDetail) => {

  //   axios.post('/odd-biz-adj', {
  //     empNo: empNo,
  //     oddBizDate: oddBizDate,
  //     oddBizType: oddBizType,
  //     oddBizDetail: oddBizDetail
  //   }).then(
  //     (response) => {
  //       let result = response.data;
  //       if (result) {
  //         setShowOddBizCompletion(true);
  //       } else {
  //         alert("에러 발생");
  //       }
  //     }
  //   );
  // }

  // const checkForm = () => {
  //   (oddBizDetail.current.value).trim() === "" ? alert("조정 신청 사유를 입력해주세요.")
  //     : oddBizRegistration(oddBizData.empNo, formatHyphenFulldate(formatDate(oddBizData.oddBizDate)), oddBizData.oddBizType, oddBizDetail.current.value);
  // }

  // 휴가 신청 페이지
  const firstPage = () => {
    return (
      <div>
        <div className="opacity-area" onClick={() => { setShowDeptModal(false); }}></div>
        <div className="modal-area">
          <div className="leave-form-wrap">
            <IconButton size="small" sx={{ position: 'absolute', right: '20px', top: '20px' }} onClick={() => { setShowDeptModal(false); }}>
              <CloseIcon />
            </IconButton>

            <div>
              <h1>휴가 상세 보기</h1>
            </div>
            <div>
              <h2 style={{ fontWeight: 'bold', fontSize: '1.1rem', margin: '15px 0' }}>2022-11-25</h2>
              <div className="form-item dept">
                <h3>휴가({deptLeaveData?.length}명)</h3>
                <div style={{ padding: '2px 7px', fontSize: '0.8rem', lineHeight: '30px' }}>
                  {deptLeaveData.map((leaveData) => {
                    return (
                      <>
                        <div><span>{leaveData.emp_name} : {formatHyphenFulldate(formatDate(leaveData.leave_start_date))} ~ {formatHyphenFulldate(formatDate(leaveData.leave_end_date))}</span></div>
                      </>
                    );
                  })}

                  {deptLeaveData?.length === 0 && <div><span>해당일자의 휴가자가 없습니다.</span></div>}
                </div>

              </div>
              <div className="form-item dept">
                <h3>오전 휴가(2명)</h3>
                <div style={{ padding: '2px 7px', fontSize: '0.8rem', fontWeight: '' }}>
                  <span>김경욱, 박수용, 강보라</span>
                </div>

              </div>

              <div className="form-item dept">
                <h3>오후 휴가(3명)</h3>
                <div style={{ padding: '2px 7px', fontSize: '0.8rem', fontWeight: '' }}>
                  <span>김경욱, 박수용, 강보라</span>
                </div>

              </div>
              <div>
                <input type="button" value="확인" onClick={() => { setShowDeptModal(false); }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {showDeptModal && firstPage()}
    </div>
  );
}

export default DeptModal;