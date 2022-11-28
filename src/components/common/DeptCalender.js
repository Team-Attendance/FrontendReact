import axios from "axios";
import styled from 'styled-components'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LeaveModal from "../LeaveModal";

import React, { useCallback } from "react";
import { formatFulldate, formatDate, formatHyphenFulldate } from "../../modules/cal_function";
import { useSelector, useDispatch } from "react-redux";
import { open } from "../../modules/leaveModal";

import { updateCalendar } from "../../modules/calendar"
import DeptModal from "../DeptModal";
import { useState } from "react";

// styled
const CalWrapper = styled.div`
    // display: flex;
    // justify-content: center;
    // flex-wrap: wrap;
    // margin: 23px 0;
    position: relative;
`

const CalTable = styled.table`
    border-collapse: collapse;
    border: 1px solid lightgray;
`
const TableTitle = styled.td`
    text-align: left;
    padding: 10px 20px;
    font-size: 0.8rem;
    font-weight: bold;
    background-color: whitesmoke;
    position: relative;
`

const CalItem = styled.td`
    font-size: 0.7rem;
    width: 168px;
    font-weight: bold;
    text-align: right;
    position: relative;
    border: 1px solid lightgray;

    &.th{
        line-height: 25px;
        text-align: center;
        
        &.sunday{
            color: red;
        }

        &.saturday{
            color: blue;
        }
    }

    & div.cal-info{
        min-height: 83px;
        textAlign: center;
        display: flex;
        justify-content: center;
        align-items: center;

        &.next, &.prev{
            visibility: hidden;
        }
    }

    &.prev, &.next{
        color: lightgray;
        background-color: white;
    }

    &.odd-biz.normal{
        background-color: #FF9F9F;
    }
`
const CalDay = styled.div`
    padding-right: 7px;
    line-height: 18px;

    & span{
        cursor: pointer;

        &.sunday{
            color: red;
        }
        &.saturday{
            color: blue;
        }
        &.prev, &.next{
            color: lightgray;
        }
    }
`

const LeaveItem = styled.div`
    width: 100%;
    height: 14px;
    background-color: #8D9EFF;
    position: absolute;
    left: 0px;
    top: 18px;
    text-align: left;
    color: white;
    padding-left: 5px;

    &.prev, &.next{
        display: none;
    }

    &.morningLeave{
      background-color: #FFC300;
    }

    &.afternoonLeave{
      background-color: #FF607F;
    }
`

export function DeptCalendar({setShowDeptCalendar}) {

  const [deptLeaveData, setDeptLeaveDate] = useState([]);
  const [showDeptModal, setShowDeptModal] = useState(false);

  // store 변수
  const calendar = useSelector(state => state.calendar.calendar);
  const calendarData = useSelector(state => state.calendar.data);
  const year = useSelector(state => state.calendar.year);
  const month = useSelector(state => state.calendar.month);
  const nowDate = useSelector(state => state.calendar.nowDate);

  // store 함수
  const dispatch = useDispatch();


  const test = (date, deptName) => {
    axios.get('/dept-leave-list', {
      params: {
        date: date,
        deptName: deptName,
      }
    }).then(
      (response) => {
        let result = response.data;
        console.log("ㄷㄷㄷㄷ")
        setDeptLeaveDate(result);
      }
    )
  }
  
  const updateCompoCalendar = useCallback((year, month, direction, nowDate) => dispatch(updateCalendar(1, year, month, direction, nowDate)), [dispatch]);

  const showLeave = (calendarData, data) => {
    const leaveClass = {
      휴가: 'normalLeave',
      오전휴가: 'morningLeave',
      오후휴가: 'afternoonLeave'
    }

    return (
      calendarData.empLeave.map((leave) => {
        return (
          ((formatFulldate(formatDate(leave.leaveStartDate)) <= formatFulldate(data.date)) && (formatFulldate(data.date) <= formatFulldate(formatDate(leave.leaveEndDate)))) ?
            <LeaveItem className={`${data.type} ${leaveClass[leave.leaveType]}`} >
              {formatFulldate(formatDate(leave.leaveStartDate)) === formatFulldate(data.date) && <span>{leave.leaveType}({leave.empNo})</span>}
            </LeaveItem>
            :
            <></>
        );
      }));
  }



  return (
    <>
      {calendar && calendarData &&
        <div style={{ width: '73%' }}>
          <DeptModal deptLeaveData = {deptLeaveData} showDeptModal={showDeptModal} setShowDeptModal={setShowDeptModal}/>
          <CalWrapper>
            <CalTable>
              <tbody>
                <tr>
                  <TableTitle colSpan={7}>{`${year}년 ${month}월`}
                    <ArrowBackIosNewIcon sx={{ cursor: 'pointer', fontSize: '1rem', position: 'absolute', top: '11px', left: '100px', border: '1px solid lightgray', color: 'gray' }} onClick={() => { updateCompoCalendar(year, month, 'prev', nowDate); alert("tests");}} />
                    <ArrowForwardIosIcon sx={{ cursor: 'pointer', fontSize: '1rem', position: 'absolute', top: '11px', left: '115px', border: '1px solid lightgray', color: 'gray' }} onClick={() => { updateCompoCalendar(year, month, 'next', nowDate); }} />
                    <button style={{position: 'absolute', fontSize: '0.7rem', fontWeight: 'bold', border: '1px solid gray', padding: '5px 15px', backgroundColor: 'lightgray', right: '20px', top: '6px', boxShadow: '0 0 5px 1px lightgray'}} onClick={() => {setShowDeptCalendar(true)}}>사원 달력</button>
                  </TableTitle>
                </tr>
                <tr>
                  <CalItem className="th sunday">일</CalItem>
                  <CalItem className="th">월</CalItem>
                  <CalItem className="th">화</CalItem>
                  <CalItem className="th">수</CalItem>
                  <CalItem className="th">목</CalItem>
                  <CalItem className="th">금</CalItem>
                  <CalItem className="th saturday">토</CalItem>
                </tr>
                {calendar.map((calendarWeek) => {
                  return (
                    <tr>
                      {calendarWeek.map((calendarDay, inIndex) => {
                        return (
                          <CalItem>

                            {/* 휴가 일시 */}
                            {showLeave(calendarData, calendarDay)}

                            <CalDay>
                              <span
                                className={inIndex === 6 ? `saturday ${calendarDay.type}` :
                                  (inIndex === 0 ? `sunday ${calendarDay.type}` : calendarDay.type)}
                                onClick={() => { test(formatHyphenFulldate(calendarDay.date),"인사");  setShowDeptModal(true);}}
                              >{calendarDay.day}</span>
                            </CalDay>

                            <div className={`cal-info ${calendarDay.type}`}>
                              <div style={{ lineHeight: '20px' }}>
                                <p style={{ textAlign: 'center', padding: '0 20px' }}>
                                </p>
                              </div>
                            </div>
                          </CalItem>
                        );
                      })}
                    </tr>
                  );

                })}
              </tbody>
            </CalTable>
          </CalWrapper>
        </div>
      }
    </>
  );
}