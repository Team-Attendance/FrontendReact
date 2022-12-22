import axios from "axios";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { formatFulldate, formatHyphenFulldate } from "../modules/cal_function";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { close } from "../modules/leaveModal";
import "./leaveModal.scss";
import { getStatusData } from "../modules/calendarStatus";
import { Link } from "react-router-dom";

const LeaveModal = () => {
  const sessionEmpNo = sessionStorage.getItem("empNo");

  const [showEndDate, setShowEndDate] = useState(true);
  const [showLeaveCompletion, setShowLeaveCompletion] = useState(false);

  const leaveStartDate = useRef();
  const leaveEndDate = useRef();
  const leaveType = useRef();
  const leaveDetail = useRef();

  const leaveModalData = useSelector(state => state.leaveModal.data);
  const leaveModalView = useSelector(state => state.leaveModal.view);


  const year = useSelector(state => state.calendar.year);
  const month = useSelector(state => state.calendar.month);


  const dispatch = useDispatch();
  const onClose = useCallback(() => dispatch(close()), [dispatch]);

  const onUpdate = useCallback((empNo, year, month) => dispatch(getStatusData(empNo, year, month)), [dispatch]);

  const changeLeaveType = (e) => {
    (e.target.value === "morning" || e.target.value === "afternoon") ? setShowEndDate(false) : setShowEndDate(true);
  }


  const leaveRegistration = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/emp-leave`, {
      leaveStartDate: leaveStartDate.current.value,
      leaveEndDate: leaveEndDate.current != null && leaveEndDate.current.value,
      empNo: sessionEmpNo,
      leaveType: leaveType.current.value,
      leaveDetail: leaveDetail.current.value,

    }).then(
      (response) => {
        let result = response.data;
        if (result) {
          setShowLeaveCompletion(true);
        } else {
          alert("남은 휴가 일수가 부족합니다.");
        }
      }
    );
  }

  const checkLeave = () => {
    const startDate = new Date(leaveStartDate.current.value);
    let endDate;
    let diffDate;

    if (leaveEndDate.current != null) {
      endDate = new Date(leaveEndDate.current.value);
      diffDate = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);

      leaveType.current.value === "" ? alert("휴가 종류를 선택하세요.")
        : leaveEndDate.current.value === "" ? alert("휴가 종료일을 선택하세요.")
          : formatFulldate(leaveStartDate.current.value) > formatFulldate(leaveEndDate.current.value) ? alert("휴가 종료일이 잘못 설정 되었습니다.")
            : endDate.getDay() === 0 || endDate.getDay() === 6 ? alert("휴가 종료일은 평일만 가능합니다.")
              : (startDate.getDay() > endDate.getDay()) || (8 - startDate.getDay() <= diffDate) ? alert("휴가 신청일과 동일한 주까지 신청이 가능합니다.")
                : (leaveDetail.current.value).trim() === "" ? alert("휴가 사유를 입력해주세요.")
                  : axios.get('/leave-check', {
                    params: {
                      date: leaveEndDate.current != null && leaveEndDate.current.value,
                      empNo: sessionEmpNo
                    }
                  }).then(
                    (response) => {
                      let result = response.data;
                      if (result) {
                        alert("휴가 종료일과 중복되는 휴가 신청이 이미 존재합니다.");
                      } else {
                        leaveRegistration();
                      }
                    }
                  );
    } else {
      leaveType.current.value === "" ? alert("휴가 종류를 선택하세요.")
        : (leaveDetail.current.value).trim() === "" ? alert("휴가 사유를 입력해주세요.")
          : leaveRegistration();
    }
  }

  // 휴가 신청 페이지
  const firstPage = () => {
    return (
      <div>
        <div className="opacity-area" onClick={onClose}></div>
        <div className="modal-area">
          <div className="leave-form-wrap">
            <IconButton size="small" sx={{ position: 'absolute', right: '20px', top: '20px' }} onClick={onClose}>
              <CloseIcon />
            </IconButton>

            <div>
              <h1>휴가신청</h1>
            </div>
            <div>
              <div className="form-item">
                <h3>휴가종류</h3>
                <select ref={leaveType} onChange={changeLeaveType}>
                  <option value="">휴가 종류를 선택하세요</option>
                  <option value="normal">연차</option>
                  <option value="morning">오전반차</option>
                  <option value="afternoon">오후반차</option>
                </select>
              </div>
              <div className="form-item">
                <h3>휴가일 선택</h3>
                <input ref={leaveStartDate} type="date" value={formatHyphenFulldate(leaveModalData.date)} readOnly />
                {showEndDate && <>&nbsp;-&nbsp;<input ref={leaveEndDate} type="date" /></>}

              </div>
              <div className="form-item">
                <h3>신청사유</h3>
                <textarea ref={leaveDetail} placeholder="신청 사유를 입력하세요">

                </textarea>
              </div>
              <div>
                <input type="button" value="신청하기" onClick={checkLeave} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 휴가 신청 후 페이지
  const secondPage = () => {
    return (
      <div>
        <div className="opacity-area" onClick={() => { setShowLeaveCompletion(false); onClose(); }}></div>
        <div>
          <div className="leave-form-wrap check">
            <IconButton size="small" sx={{ position: 'absolute', right: '20px', top: '20px' }} onClick={() => { setShowLeaveCompletion(false); onClose(); }}>
              <CloseIcon />
            </IconButton>
            <div>
              <h1>휴가신청</h1>
            </div>
            <div>
              <div className="form-item">
                <h3>휴가 신청이 완료 되었습니다.</h3>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link to="/emp/leave-info"><input type="button" value="휴가 현황 페이지로 이동" /></Link>
                <input type="button" value="확인" onClick={() => { setShowLeaveCompletion(false); onClose(); onUpdate(sessionEmpNo, year, month); }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    leaveModalView === true &&
    <div>
      {showLeaveCompletion === false && firstPage()}

      {showLeaveCompletion === true && secondPage()}
    </div>
  );
}

export default LeaveModal;