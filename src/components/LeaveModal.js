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
import Swal from "sweetalert2";

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
          Swal.fire({
            title: '?????? ?????? ????????? ???????????????.',
              confirmButtonText: '??????',
            confirmButtonColor: '#3085d6',
            icon: 'warning'
          })
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

      leaveType.current.value === "" ? Swal.fire({ title: '?????? ????????? ???????????????.',
                                                          confirmButtonText: '??????',
                                                          confirmButtonColor: '#3085d6',
                                                          icon: 'warning'
                                                        })
        : leaveEndDate.current.value === "" ? Swal.fire({ title: '?????? ???????????? ???????????????.',
                                                                 confirmButtonText: '??????',
                                                                 confirmButtonColor: '#3085d6',
                                                                 icon: 'warning'
                                                                })
          : formatFulldate(leaveStartDate.current.value) > formatFulldate(leaveEndDate.current.value) ? Swal.fire({ title: '?????? ???????????? ?????? ?????? ???????????????.',
                                                                                                                            confirmButtonText: '??????',
                                                                                                                            confirmButtonColor: '#3085d6',
                                                                                                                            icon: 'warning'
                                                                                                                          })
            : endDate.getDay() === 0 || endDate.getDay() === 6 ? Swal.fire({ title: '?????? ???????????? ????????? ???????????????.',
                                                                                    confirmButtonText: '??????',
                                                                                    confirmButtonColor: '#3085d6',
                                                                                    icon: 'warning'
                                                                                  })
              : (startDate.getDay() > endDate.getDay()) || (8 - startDate.getDay() <= diffDate) ? Swal.fire({ title: '?????? ???????????? ????????? ????????? ????????? ???????????????.',
                                                                                                                    confirmButtonText: '??????',
                                                                                                                    confirmButtonColor: '#3085d6',
                                                                                                                    icon: 'warning'
                                                                                                                  })
                : (leaveDetail.current.value).trim() === "" ? Swal.fire({ title: '?????? ????????? ??????????????????.',
                                                                                  confirmButtonText: '??????',
                                                                                  confirmButtonColor: '#3085d6',
                                                                                  icon: 'warning'
                                                                                })
                  : axios.get(process.env.REACT_APP_API_URL+'/leave-check', {
                    params: {
                      date: leaveEndDate.current != null && leaveEndDate.current.value,
                      empNo: sessionEmpNo
                    }
                  }).then(
                    (response) => {
                      let result = response.data;
                      if (result) {
                        Swal.fire({ title: '?????? ???????????? ???????????? ?????? ????????? ?????? ???????????????.',
                            confirmButtonText: '??????',
                            confirmButtonColor: '#3085d6',
                            icon: 'error'
                            })
                      } else {
                        leaveRegistration();
                      }
                    }
                  );
    } else {
      leaveType.current.value === "" ? Swal.fire({ title: '?????? ????????? ???????????????.',
                                                          confirmButtonText: '??????',
                                                          confirmButtonColor: '#3085d6',
                                                          icon: 'error'
                                                        })
        : (leaveDetail.current.value).trim() === "" ? Swal.fire({ title: '?????? ????????? ??????????????????.',
                                                                          confirmButtonText: '??????',
                                                                          confirmButtonColor: '#3085d6',
                                                                          icon: 'error'
                                                                        })
          : leaveRegistration();
    }
  }

  // ?????? ?????? ?????????
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
              <h1>????????????</h1>
            </div>
            <div>
              <div className="form-item">
                <h3>????????????</h3>
                <select ref={leaveType} onChange={changeLeaveType}>
                  <option value="">?????? ????????? ???????????????</option>
                  <option value="normal">??????</option>
                  <option value="morning">????????????</option>
                  <option value="afternoon">????????????</option>
                </select>
              </div>
              <div className="form-item">
                <h3>????????? ??????</h3>
                <input ref={leaveStartDate} type="date" value={formatHyphenFulldate(leaveModalData.date)} readOnly />
                {showEndDate && <>&nbsp;-&nbsp;<input ref={leaveEndDate} type="date" /></>}

              </div>
              <div className="form-item">
                <h3>????????????</h3>
                <textarea ref={leaveDetail} placeholder="?????? ????????? ???????????????">

                </textarea>
              </div>
              <div className="btn-area">
                <input type="button" value="??????" onClick={onClose} />
                <input type="button" value="??????" onClick={checkLeave} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ?????? ?????? ??? ?????????
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
              <h1>????????????</h1>
            </div>
            <div>
              <div className="form-item">
                <h3>?????? ????????? ?????? ???????????????.</h3>
              </div>

              <div className="btn-area" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link to="/emp/leave-info"><input type="button" value="?????? ?????? ???????????? ??????" /></Link>
                <input type="button" value="??????" onClick={() => { setShowLeaveCompletion(false); onClose(); onUpdate(sessionEmpNo, year, month); }} />
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