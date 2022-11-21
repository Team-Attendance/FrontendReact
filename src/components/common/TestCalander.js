import axios from "axios";
import styled from 'styled-components'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LeaveModal from "../LeaveModal";

import React, { useEffect, useState, useCallback } from "react";
import { initCalander, moveMonth, formatFulldate, formatDate } from "../../modules/cal_function";
import { useSelector, useDispatch } from "react-redux";
import { open, close } from "../../modules/leaveModal";
import { getStatusData } from "../../modules/calanderStatus"


import { getCalanderData, setCalander, updateCalander } from "../../modules/calander"





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
`

export function TestCalander() {

  // store 변수
  const leaveModalData = useSelector(state => state.leaveModal.data);
  const leaveModalView = useSelector(state => state.leaveModal.view);
  const calander = useSelector(state => state.calander.calander);
  const calanderData = useSelector(state => state.calander.data);
  const year = useSelector(state => state.calander.year);
  const month = useSelector(state => state.calander.month);
  const nowDate = useSelector(state => state.calander.nowDate);

  const calStatusMonth = useSelector(state => state.calanderStatus);


  // store 함수
  const dispatch = useDispatch();
  const onOpen = useCallback((calanderDay) => dispatch(open(calanderDay)), [dispatch]);
  const onClose = useCallback(() => dispatch(close()), [dispatch]);
  const updateCompoCalander = useCallback((year, month, direction, nowDate) => dispatch(updateCalander(1, year, month, direction, nowDate)), [dispatch]);
  const onUpdate = useCallback((empNo, year, month) => dispatch(getStatusData(empNo, year, month)), [dispatch]);

  const statusLoading = useSelector(state => state.calanderStatus.loading);


  const showTimeTable = (calanderData, data) => {
    return (
      calanderData.empTimeTable.map((emp) => {
        return (
          formatFulldate(formatDate(emp.empTimeDate)) === formatFulldate(data.date) ?
            <>
              출근 : {emp.empGetInto} <br />
              퇴근 : {emp.empGetOff}<br />
            </>
            :
            <></>
        );
      }));
  }

  const showOddBiz = (calanderData, data) => {
    return (
      calanderData.oddBizHour.map((biz) => {
        return (
          formatFulldate(formatDate(biz.oddBizDate)) === formatFulldate(data.date) ?
            <>
              <span style={{ color: '#FFFAD7' }}>
                &nbsp;{biz.oddBizType}&nbsp;
              </span>
            </>
            :
            <></>
        );
      }));
  }

  const showLeave = (calanderData, data) => {
    const eng = {
      휴가 : 'vava'
    }
    return (
      calanderData.empLeave.map((leave) => {
        return (
          ((formatFulldate(formatDate(leave.leaveStartDate)) <= formatFulldate(data.date)) && (formatFulldate(data.date) <= formatFulldate(formatDate(leave.leaveEndDate)))) ?
            <LeaveItem className={`${data.type} ${eng[leave.leaveType]}`} >
              {formatFulldate(formatDate(leave.leaveStartDate)) === formatFulldate(data.date) && <span>{leave.leaveDetail}</span>}
            </LeaveItem>
            :
            <></>
        );
      }));
  }



  return (
    <>
      {/* {calander && calanderData && year && month && nowDate && statusLoading && */}
      {calander && calanderData &&
        <div style={{ width: '73%' }}>

          <LeaveModal data={leaveModalData} view={leaveModalView} onClose={onClose} />
          <CalWrapper>
            <CalTable>
              <tbody>
                <tr>
                  <TableTitle colSpan={7}>{`${year}년 ${month}월`}
                    <ArrowBackIosNewIcon sx={{ cursor: 'pointer', fontSize: '1rem', position: 'absolute', top: '11px', left: '100px', border: '1px solid lightgray', color: 'gray' }} onClick={() => { updateCompoCalander(year, month, 'prev', nowDate); onUpdate(1, year, month - 1) }} />
                    <ArrowForwardIosIcon sx={{ cursor: 'pointer', fontSize: '1rem', position: 'absolute', top: '11px', left: '115px', border: '1px solid lightgray', color: 'gray' }} onClick={() => { updateCompoCalander(year, month, 'next', nowDate); onUpdate(1, year, month + 1) }} />

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
                {calander.map((calanderWeek) => {
                  return (
                    <tr>
                      {calanderWeek.map((calanderDay, inIndex) => {
                        return (
                          <CalItem className={calanderDay.type
                            + calanderData.oddBizHour.map((biz) => {
                              if (formatFulldate(formatDate(biz.oddBizDate)) === formatFulldate(calanderDay.date)) {
                                return " odd-biz";
                              } else {
                                return "";
                              }
                            }).join('')
                          }>

                            {/* 휴가 일시 */}
                            {showLeave(calanderData, calanderDay)}

                            <CalDay onClick={() => {
                              (formatFulldate(calanderDay.date) > formatFulldate(nowDate)) &&
                                (calanderData.empLeave.length === 0 ? true
                                  : calanderData.empLeave.map((leave) => {
                                    if (!((formatFulldate(formatDate(leave.leaveStartDate)) <= formatFulldate(calanderDay.date)) && (formatFulldate(calanderDay.date) <= formatFulldate(formatDate(leave.leaveEndDate))))) {
                                      return true;
                                    } else {
                                      return false;
                                    }
                                  })[0]
                                )
                                && onOpen(calanderDay)
                            }}>

                              <span
                                className={inIndex === 6 ? `saturday ${calanderDay.type}` :
                                  (inIndex === 0 ? `sunday ${calanderDay.type}` : calanderDay.type)}
                              >{calanderDay.day}</span>
                            </CalDay>

                            <div className={`cal-info ${calanderDay.type}`}>
                              <div style={{ lineHeight: '20px' }}>
                                <p style={{ textAlign: 'center' }}>

                                  {/* 출근 시간 출력 */}
                                  {showTimeTable(calanderData, calanderDay)}

                                  {/* 이상 근태 체크 */}
                                  {showOddBiz(calanderData, calanderDay)}

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