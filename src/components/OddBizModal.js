import axios from "axios";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { formatDate,  formatHyphenFulldate, formatHyphenToKorean } from "../modules/cal_function";
import "./leaveModal.scss";
import { useRef } from "react";
import { useState } from "react";


const OddBizModal = ({ oddBizData, showOddBizModal, setShowOddBizModal }) => {

  const [showOddBizCompletion, setShowOddBizCompletion] = useState(false);

  const oddBizDetail = useRef();

  const oddBizRegistration = (empNo, oddBizDate, oddBizType, oddBizDetail) => {

    axios.post('/odd-biz-adj', {
      empNo: empNo,
      oddBizDate: oddBizDate,
      oddBizType: oddBizType,
      oddBizDetail: oddBizDetail
    }).then(
      (response) => {
        let result = response.data;
        if (result) {
          setShowOddBizCompletion(true);
        } else {
          alert("에러 발생");
        }
      }
    );
  }

  const checkForm = () => {
    (oddBizDetail.current.value).trim() === "" ? alert("조정 신청 사유를 입력해주세요.")
      : oddBizRegistration(oddBizData.empNo, formatHyphenFulldate(formatDate(oddBizData.oddBizDate)), oddBizData.oddBizType, oddBizDetail.current.value);
  }

  // 휴가 신청 페이지
  const firstPage = () => {
    return (
      <div>
        <div className="opacity-area" onClick={() => { setShowOddBizModal(false); setShowOddBizCompletion(false); }}></div>
        <div className="modal-area">
          <div className="leave-form-wrap">
            <IconButton size="small" sx={{ position: 'absolute', right: '20px', top: '20px' }} onClick={() => { setShowOddBizModal(false); setShowOddBizCompletion(false); }}>
              <CloseIcon />
            </IconButton>

            <div>
              <h1>이상근태 조정 신청</h1>
            </div>
            <div>
              <div className="form-item">
                <h3>이상근태 발생 일자</h3>
                <div style={{ padding: '2px 7px', fontSize: '0.8rem', fontWeight: '' }}>
                  <span>{formatHyphenToKorean(formatDate(oddBizData.oddBizDate))}</span>
                </div>

                {/* <input type="date" value="2022-11-25" readOnly/> */}
              </div>
              <div className="form-item">
                <h3>이상근태 종류</h3>
                <div style={{ padding: '2px 7px', fontSize: '0.8rem', fontWeight: '' }}>
                  <span>{oddBizData.oddBizType}</span>
                </div>

              </div>

              <div className="form-item">
                <h3>조정신청 사유</h3>
                <textarea placeholder="조정 신청 사유를 입력하세요" ref={oddBizDetail}>

                </textarea>
              </div>
              <div>
                <input type="button" value="신청하기" onClick={checkForm} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  const secondPage = () => {
    return (
      <div>
        <div className="opacity-area" onClick={() => { setShowOddBizModal(false); setShowOddBizCompletion(false); }}></div>
        <div>
          <div className="leave-form-wrap check">
            <IconButton size="small" sx={{ position: 'absolute', right: '20px', top: '20px' }} onClick={() => { setShowOddBizModal(false); setShowOddBizCompletion(false); }}>
              <CloseIcon />
            </IconButton>
            <div>
              <h1>이상근태 조정 신청</h1>
            </div>
            <div>
              <div className="form-item">
                <h3>이상 근태 조정 신청이 완료 되었습니다.</h3>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <input type="button" value="이상근태 현황 페이지로 이동" onClick={() => { }} />
                <input type="button" value="확인" onClick={() => { setShowOddBizModal(false); setShowOddBizCompletion(false); }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>

      {showOddBizModal && showOddBizCompletion === false && firstPage()}

      {showOddBizModal && showOddBizCompletion === true && secondPage()}
    </div>
  );
}

export default OddBizModal;