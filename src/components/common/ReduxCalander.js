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


import { setCalander } from "../../modules/calander"





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

export function ReduxCalander() {



  const data = useSelector(state => state.leaveModal.data);
  const view = useSelector(state => state.leaveModal.view);



  const dispatch = useDispatch();
  const onOpen = useCallback((calanderDay) => dispatch(open(calanderDay)), [dispatch]);
  const onClose = useCallback(() => dispatch(close()), [dispatch]);

  //새로 추가됨
  const onUpdate = useCallback((empNo, year, month) => dispatch(getStatusData(empNo, year, month)), [dispatch]);

  const testCalander = useCallback(() => dispatch(setCalander()), [dispatch]);

  const [calander, setCalander] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    setCalander(initCalander());
  }, [testCalander])


  useEffect(() => {
    let number = 1;
    if (calander.length > 0) {
      axios.get('/calander-data', {
        params: {
          year: calander[6][0].thisYear,
          month: (calander[6][1].thisMonth) + 1,
          empNo: number
        }
      })
        .then((Response) => {
          setAllData(Response.data);
          onUpdate(number, calander[6][0].thisYear, (calander[6][1].thisMonth) + 1)
        })
    }
  }, [calander, onUpdate])

  const beforeMonth = () => {
    setCalander(moveMonth(calander[6][0], calander[6][1], 'prev', calander[6][2]));
  }

  const nextMonth = () => {
    setCalander(moveMonth(calander[6][0], calander[6][1], 'next', calander[6][2]));
  }











  const showTimeTable = (allData, data) => {
    return (
      allData.empTimeTable.map((emp) => {
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

  const showOddBiz = (allData, data) => {
    return (
      allData.oddBizHour.map((biz) => {
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

  const showLeave = (allData, data) => {
    return (
      allData.empLeave.map((leave) => {
        return (
          ((formatFulldate(formatDate(leave.leaveStartDate)) <= formatFulldate(data.date)) && (formatFulldate(data.date) <= formatFulldate(formatDate(leave.leaveEndDate)))) ?
            <LeaveItem className={data.type}>
              {formatFulldate(formatDate(leave.leaveStartDate)) === formatFulldate(data.date) && <span>{leave.leaveDetail}</span>}
            </LeaveItem>
            :
            <></>
        );
      }));
  }

  return (
    <div style={{ width: '73%' }}>
      <LeaveModal data={data} view={view} onClose={onClose} />
      {calander.length > 0 && allData.empTimeTable && allData.oddBizHour && allData.empLeave ?

        <CalWrapper>
          <CalTable>
            <tbody>
              <tr>
                <TableTitle colSpan={7}>{`${calander[6][0].thisYear}년 ${(calander[6][1].thisMonth + 1)}월`}
                  <ArrowBackIosNewIcon sx={{ cursor: 'pointer', fontSize: '1rem', position: 'absolute', top: '11px', left: '100px', border: '1px solid lightgray', color: 'gray' }} onClick={beforeMonth} />
                  <ArrowForwardIosIcon sx={{ cursor: 'pointer', fontSize: '1rem', position: 'absolute', top: '11px', left: '115px', border: '1px solid lightgray', color: 'gray' }} onClick={nextMonth} />

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
              {calander.map((calanderWeek, outIndex) => {
                if (outIndex < 6) {
                  return (
                    <tr>
                      {calanderWeek.map((calanderDay, inIndex) => {
                        return (
                          <CalItem className={calanderDay.type
                            + allData.oddBizHour.map((biz) => {
                              if (formatFulldate(formatDate(biz.oddBizDate)) === formatFulldate(calanderDay.date)) {
                                return " odd-biz";
                              } else {
                                return "";
                              }
                            }).join('')
                          }>

                            {/* 휴가 일시 */}
                            {showLeave(allData, calanderDay)}

                            <CalDay onClick={() => {
                              (formatFulldate(calanderDay.date) > formatFulldate(calander[6][2].nowDate)) &&
                                (allData.empLeave.length === 0 ? true
                                  : allData.empLeave.map((leave) => {
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
                                  {showTimeTable(allData, calanderDay)}

                                  {/* 이상 근태 체크 */}
                                  {showOddBiz(allData, calanderDay)}

                                </p>
                              </div>
                            </div>


                          </CalItem>
                        );
                      })}
                    </tr>
                  );
                } else {
                  return <></>;
                }
              })}
            </tbody>
          </CalTable>
        </CalWrapper>
        :
        <></>

      }


    </div>
  );
}