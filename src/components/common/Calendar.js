import axios from "axios";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LeaveModal from "../LeaveModal";

import React, { useCallback } from "react";
import { formatFulldate, formatDate, formatHyphenFulldate } from "../../modules/cal_function";
import { useSelector, useDispatch } from "react-redux";
import { open } from "../../modules/leaveModal";

import { updateCalendar } from "../../modules/calendar"
import { updateDeptCalendar } from "../../modules/deptCalendar";
import OddBizModal from "../OddBizModal";
import { useState } from "react";
import "./calendar.scss";
import Swal from "sweetalert2";

export function Calendar({ setShowDeptCalendar }) {

  const sessionUserNo = sessionStorage.getItem("empNo");
  const sessionDeptName = sessionStorage.getItem("deptName");

  // store 변수
  const calendar = useSelector(state => state.calendar.calendar);
  const calendarData = useSelector(state => state.calendar.data);
  const year = useSelector(state => state.calendar.year);
  const month = useSelector(state => state.calendar.month);
  const nowDate = useSelector(state => state.calendar.nowDate);

  // store 함수
  const dispatch = useDispatch();
  const onOpen = useCallback((calendarDay) => dispatch(open(calendarDay)), [dispatch]);

  const [oddBizData, setOddBizData] = useState({});
  const [showOddBizModal, setShowOddBizModal] = useState(false);

  const onRealOpen = (onOpen, calendarDay) => {
    axios.get(process.env.REACT_APP_API_URL+'/leave-check', {
      params: {
        date: calendarDay.date,
        empNo: sessionUserNo
      }
    }).then(
      (response) => {
        let result = response.data;

        if (result) {
            Swal.fire({ title: '선택한 날짜와 중복되는 휴가 신청이 이미 존재합니다.',
                confirmButtonText: '닫기',
                confirmButtonColor: '#3085d6',
                icon: 'error'
            })
        } else {
          onOpen(calendarDay);
        }
      }
    )
  }



  const updateCompoCalendar = useCallback((year, month, direction, nowDate) => dispatch(updateCalendar(sessionUserNo, year, month, direction, nowDate)), [dispatch, sessionUserNo]);
  const updateCompoDeptCalendar = useCallback((year, month, direction, nowDate) => dispatch(updateDeptCalendar(sessionUserNo, sessionDeptName, year, month, direction, nowDate)), [dispatch, sessionUserNo, sessionDeptName]);


  const showTimeTable = (calendarData, data) => {
    return (
      calendarData.empTimeTable.map((emp) => {
        return (
          formatFulldate(formatDate(emp.empTimeDate)) === formatFulldate(data.date) ?
            <>
              출근 : {emp.empGetInto.slice(0, -3)} <br />
              {
                emp.empGetOff ?
                  <>퇴근 : {emp.empGetOff.slice(0, -3)}<br /></>
                  : <></>
              }

            </>
            :
            <></>
        );
      }));
  }

  const showOddBiz = (calendarData, data) => {
    return (
      calendarData.oddBizHour.map((biz) => {
        return (
          formatFulldate(formatDate(biz.oddBizDate)) === formatFulldate(data.date) ?
            <>
              <span style={{ color: '#FFFAD7', cursor: 'pointer' }} onClick={() => {

                oddBizModalOpen(biz.empNo, formatHyphenFulldate(formatDate(biz.oddBizDate)), biz.oddBizType);

              }}>
                &nbsp;{biz.oddBizType}&nbsp;
              </span>
            </>
            :
            <></>
        );
      }));
  }

  const oddBizModalOpen = (empNo, oddBizDate, oddBizType) => {
    axios.get(process.env.REACT_APP_API_URL+'/odd-biz-check', {
      params: {
        empNo: empNo,
        oddBizDate: oddBizDate,
        oddBizType: oddBizType
      }
    }).then(
      (response) => {
        let result = response.data;

        if (result) {
            Swal.fire({ title: '선택한 이상근태의 조정 신청이 이미 존재합니다.',
                confirmButtonText: '닫기',
                confirmButtonColor: '#3085d6',
                icon: 'error'
            })
        } else {
          setOddBizData({ empNo: empNo, oddBizDate: oddBizDate, oddBizType: oddBizType });
          setShowOddBizModal(true);
        }
      }
    )
  }

  const showLeave = (calendarData, data) => {
    const leaveClass = {
      휴가: 'normal-leave',
      오전휴가: 'morning-leave',
      오후휴가: 'afternoon-leave'
    }

    return (
      calendarData.empLeave.map((leave) => {
        return (
          ((formatFulldate(formatDate(leave.leaveStartDate)) <= formatFulldate(data.date)) && (formatFulldate(data.date) <= formatFulldate(formatDate(leave.leaveEndDate)))) ?
            <div className={`leave-item ${data.type} ${leaveClass[leave.leaveType]}`} >
              {formatFulldate(formatDate(leave.leaveStartDate)) === formatFulldate(data.date) && <span>{leave.leaveType}</span>}
            </div>
            :
            <></>
        );
      }));
  }



  return (
    <>
      {calendar && calendarData &&
        <div>
          <LeaveModal />
          <OddBizModal oddBizData={oddBizData} showOddBizModal={showOddBizModal} setShowOddBizModal={setShowOddBizModal} />
          <div style={{paddingTop: '31px'}}>
            <table className="cal-table">
              <tbody>
                <tr>
                  <th className="cal-title" colSpan={7}>{`${year}년 ${month}월`}
                    <ArrowBackIosNewIcon sx={{ cursor: 'pointer', fontSize: '1rem', position: 'absolute', top: '11px', left: '100px', border: '1px solid lightgray', color: 'gray' }} onClick={() => { updateCompoCalendar(year, month, 'prev', nowDate); updateCompoDeptCalendar(year, month, 'prev', nowDate); }} />
                    <ArrowForwardIosIcon sx={{ cursor: 'pointer', fontSize: '1rem', position: 'absolute', top: '11px', left: '115px', border: '1px solid lightgray', color: 'gray' }} onClick={() => { updateCompoCalendar(year, month, 'next', nowDate); updateCompoDeptCalendar(year, month, 'next', nowDate); }} />
                    <button style={{ position: 'absolute', fontSize: '0.7rem', fontWeight: 'bold', border: '1px solid lightgray', padding: '5px 15px', backgroundColor: '#059BFF', right: '20px', top: '6px', boxShadow: '0 0 5px 1px lightgray', color: 'white' }} onClick={() => { setShowDeptCalendar(false) }}>부서 일정</button>
                  </th>
                </tr>
                <tr>
                  <td className="cal-item th sunday">일</td>
                  <td className="cal-item th">월</td>
                  <td className="cal-item th">화</td>
                  <td className="cal-item th">수</td>
                  <td className="cal-item th">목</td>
                  <td className="cal-item th">금</td>
                  <td className="cal-item th saturday">토</td>
                </tr>
                {calendar.map((calendarWeek) => {
                  return (
                    <tr>
                      {calendarWeek.map((calendarDay, inIndex) => {
                        return (
                          <td className={
                            "cal-item " +
                            calendarDay.type
                            + calendarData.oddBizHour.map((biz) => {
                              if (formatFulldate(formatDate(biz.oddBizDate)) === formatFulldate(calendarDay.date)) {
                                return " odd-biz";
                              } else {
                                return "";
                              }
                            }).join('')}
                            


                            onClick={() => {
                              (formatFulldate(calendarDay.date) > formatFulldate(nowDate)) &&
                                (calendarData.empLeave.length === 0 ? true
                                  : calendarData.empLeave.map((leave) => {
                                    if (!((formatFulldate(formatDate(leave.leaveStartDate)) <= formatFulldate(calendarDay.date)) && (formatFulldate(calendarDay.date) <= formatFulldate(formatDate(leave.leaveEndDate))))) {
                                      return true;
                                    } else {
                                      return false;
                                    }
                                  })[0]
                                )
                                && (inIndex !== 6 && inIndex !== 0) && onRealOpen(onOpen, calendarDay);
                            }}
                          >

                            {/* 휴가 일시 */}
                            {showLeave(calendarData, calendarDay)}

                            <div className="cal-day">
                              <span
                                className={inIndex === 6 ? `saturday ${calendarDay.type}` :
                                  (inIndex === 0 ? `sunday ${calendarDay.type}` : calendarDay.type)}>{calendarDay.day}</span>
                            </div>

                            <div className={`cal-info ${calendarDay.type}`}>
                              <div style={{ lineHeight: '20px' }}>
                                <p style={{ textAlign: 'center' }}>

                                  {/* 출근 시간 출력 */}
                                  {showTimeTable(calendarData, calendarDay)}

                                  {/* 이상 근태 체크 */}
                                  {showOddBiz(calendarData, calendarDay)}

                                </p>
                              </div>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  );

                })}
              </tbody>
            </table>
          </div>
        </div>
      }
    </>
  );
}