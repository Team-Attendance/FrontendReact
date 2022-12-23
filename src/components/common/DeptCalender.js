import axios from "axios";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import React, { useCallback } from "react";
import { formatFulldate, formatDate, formatHyphenFulldate } from "../../modules/cal_function";
import { useSelector, useDispatch } from "react-redux";

import { updateCalendar } from "../../modules/calendar"
import DeptModal from "../DeptModal";
import { useState } from "react";
import { updateDeptCalendar } from "../../modules/deptCalendar";

import "./calendar.scss";

export function DeptCalendar({ setShowDeptCalendar }) {

  const sessionUserNo = sessionStorage.getItem("empNo");
  const sessionDeptName = sessionStorage.getItem("deptName");

  const [deptModalDate, setDeptModalDate] = useState(null);
  const [deptLeaveData, setDeptLeaveDate] = useState(null);
  const [showDeptModal, setShowDeptModal] = useState(false);

  // store 변수
  const deptCalendar = useSelector(state => state.deptCalendar.calendar);
  const deptCalendarData = useSelector(state => state.deptCalendar.data);
  const year = useSelector(state => state.calendar.year);
  const month = useSelector(state => state.calendar.month);
  const nowDate = useSelector(state => state.calendar.nowDate);

  // store 함수
  const dispatch = useDispatch();

  let calCountData;

  const test = (date, deptName) => {
    axios.get(process.env.REACT_APP_API_URL+'/dept-leave-list', {
      params: {
        date: date,
        deptName: deptName,
      }
    }).then(
      (response) => {
        let result = response.data;

        setDeptModalDate(date);
        setDeptLeaveDate(result);
      }
    )
  }

  const updateCompoCalendar = useCallback((year, month, direction, nowDate) => dispatch(updateCalendar(sessionUserNo, year, month, direction, nowDate)), [dispatch, sessionUserNo]);
  const updateCompoDeptCalendar = useCallback((year, month, direction, nowDate) => dispatch(updateDeptCalendar(sessionUserNo, sessionDeptName, year, month, direction, nowDate)), [dispatch, sessionUserNo, sessionDeptName]);

  const calcLeave = (deptCalendarData, data) => {
    let result = { normalLeave: 0, morningLeave: 0, afternoonLeave: 0 };

    deptCalendarData.map((leave) => {
      if ((formatFulldate(formatDate(leave.leave_start_date)) <= formatFulldate(data.date)) && (formatFulldate(data.date) <= formatFulldate(formatDate(leave.leave_end_date)))) {
        switch (leave.leave_type) {
          case "휴가":
            result.normalLeave++;
            break;
          case "오전휴가":
            result.morningLeave++;
            break;
          case "오후휴가":
            result.afternoonLeave++;
            break;
          default:
            break;
        }
      }
      return "";
    });

    return result;
  }

  return (
    <>
      {deptCalendar && deptCalendarData &&
        <div>
          <DeptModal deptModalDate={deptModalDate} deptLeaveData={deptLeaveData} setDeptLeaveDate={setDeptLeaveDate} showDeptModal={showDeptModal} setShowDeptModal={setShowDeptModal} />
          <div style={{marginTop: '31px'}}>
            <table className="cal-table">
              <tbody>
                <tr>
                  <th className="cal-title" colSpan={7}>{`${year}년 ${month}월`}
                    <ArrowBackIosNewIcon sx={{ cursor: 'pointer', fontSize: '1rem', position: 'absolute', top: '11px', left: '100px', border: '1px solid lightgray', color: 'gray' }} onClick={() => { updateCompoCalendar(year, month, 'prev', nowDate); updateCompoDeptCalendar(year, month, 'prev', nowDate); }} />
                    <ArrowForwardIosIcon sx={{ cursor: 'pointer', fontSize: '1rem', position: 'absolute', top: '11px', left: '115px', border: '1px solid lightgray', color: 'gray' }} onClick={() => { updateCompoCalendar(year, month, 'next', nowDate); updateCompoDeptCalendar(year, month, 'next', nowDate); }} />
                    <button style={{ position: 'absolute', fontSize: '0.7rem', fontWeight: 'bold', border: '1px solid gray', padding: '5px 15px', backgroundColor: '#2B4865', right: '20px', top: '6px', boxShadow: '0 0 5px 1px lightgray', color: 'white' }} onClick={() => { setShowDeptCalendar(true) }}>나의 일정</button>
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
                {deptCalendar.map((calendarWeek) => {
                  return (
                    <tr>
                      {calendarWeek.map((calendarDay, inIndex) => {
                        calCountData = calcLeave(deptCalendarData, calendarDay);
                        return (
                          <td className="cal-item dept-cal-item">
                            <div className="cal-day">
                              <span
                                className={inIndex === 6 ? `saturday ${calendarDay.type}` :
                                  (inIndex === 0 ? `sunday ${calendarDay.type}` : calendarDay.type)}
                                
                              >{calendarDay.day}</span>
                            </div>

                            <div className={`dept-cal-info ${calendarDay.type}`} style={{ textAlign: 'center' }}>
                              {/* 휴가 일시 */}

                              {calendarDay.type === "normal" && inIndex !== 0 && inIndex !== 6 &&
                                <div>
                                  {calCountData.normalLeave !== 0 && <span className="normal-leave" onClick={() => { test(formatHyphenFulldate(calendarDay.date), sessionDeptName); setShowDeptModal(true); }}>휴가 : {calCountData.normalLeave}명</span>}
                                  {calCountData.morningLeave !== 0 && <span className="morning-leave" onClick={() => { test(formatHyphenFulldate(calendarDay.date), sessionDeptName); setShowDeptModal(true); }}>오전휴가 : {calCountData.morningLeave}명</span>}
                                  {calCountData.afternoonLeave !== 0 && <span className="afternoon-leave" onClick={() => { test(formatHyphenFulldate(calendarDay.date), sessionDeptName); setShowDeptModal(true); }}>오후휴가 : {calCountData.afternoonLeave}명</span>}
                                </div>
                              }
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