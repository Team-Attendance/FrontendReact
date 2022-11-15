import axios from "axios";
import styled from 'styled-components'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LeaveModal from "../LeaveModal";

import React, { useEffect, useState, useCallback } from "react";
import { initCalander, moveMonth, formatFulldate, formatDate } from "../../modules/cal_function";
import { useSelector, useDispatch } from "react-redux";
import { open, close } from "../../modules/leaveModal";
// import { getPosts } from "../../modules/calanderStatus"

// styled
const CalWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 23px 0;
    position: relative;
`

const CalTable = styled.table`
    borderCollapse: collapse;
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
    width: 180px;
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
        min-height: 85px;
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

export function Calander() {



    const data = useSelector(state => state.leaveModal.data);
    const view = useSelector(state => state.leaveModal.view);


    const dispatch = useDispatch();
    const onOpen = useCallback(() => dispatch(open()), [dispatch]);
    const onClose = useCallback(() => dispatch(close()), [dispatch]);


    // const onOen = useCallback(() => dispatch(getPosts()), [dispatch]);


    const [calander, setCalander] = useState([]);
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        setCalander(initCalander());
        // console.log(onOen());
    }, [])


    useEffect(() => {
        if (calander.length > 0) {
            axios.get('/calander-data', {
                params: {
                    year: calander[6][0].thisYear,
                    month: (calander[6][1].thisMonth) + 1,
                    empNo: 1
                }
            })
                .then((Response) => {
                    setAllData(Response.data);
                })
        }
    }, [calander])

    const beforeMonth = () => {
        setCalander(moveMonth(calander[6][0], calander[6][1], 'prev', calander[6][2]));
    }

    const nextMonth = () => {
        setCalander(moveMonth(calander[6][0], calander[6][1], 'next', calander[6][2]));
    }



    return (
        <div>
            <LeaveModal data={data} view={view} onClose={onClose} />
            {calander.length > 0 && allData.empTimeTable && allData.oddBizHour && allData.empLeave ?
            
                <CalWrapper>
                    {console.log(formatFulldate(calander[6][2].nowDate))}
                    <CalTable>
                        <tbody>
                            <tr>
                                <TableTitle colSpan={7}>{calander[6][0].thisYear + "년 " + (calander[6][1].thisMonth + 1) + "월"}
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
                            {calander.map((outData, outIndex) => {
                                if (outIndex < 6) {
                                    return (
                                        <tr>
                                            {outData.map((data, inIndex) => {
                                                return (
                                                    <CalItem className={data.type
                                                        + allData.oddBizHour.map((biz) => {
                                                            if (formatFulldate(formatDate(biz.oddBizDate)) === formatFulldate(data.date)) {
                                                                return " odd-biz";
                                                            } else {
                                                                return "";
                                                            }
                                                        }).join('')
                                                    }
                                                        
                                                         onClick={(e) => {  onOpen()}}>

                                                        <CalDay>
                                                            <span
                                                                className={inIndex === 6 ? "saturday " + data.type :
                                                                    (inIndex === 0 ? "sunday " + data.type : data.type)}
                                                            >{data.day}</span>
                                                        </CalDay>

                                                        <div className={"cal-info " + data.type}>
                                                            <div style={{ lineHeight: '20px' }}>
                                                                <p style={{ textAlign: 'center' }}>

                                                                    {allData.empTimeTable.map((emp) => {
                                                                        return (
                                                                            formatFulldate(formatDate(emp.empTimeDate)) === formatFulldate(data.date) ?
                                                                                <>
                                                                                    출근 : {emp.empGetInto} <br />
                                                                                    퇴근 : {emp.empGetOff}
                                                                                </>
                                                                                :
                                                                                <></>
                                                                        );
                                                                    })}


                                                                    {/* 이상 근태 체크 */}
                                                                    {allData.oddBizHour.map((biz) => {

                                                                        return (
                                                                            formatFulldate(formatDate(biz.oddBizDate)) === formatFulldate(data.date) ?
                                                                                <>
                                                                                    <br />
                                                                                    <span style={{ color: '#FFFAD7' }}>
                                                                                        {biz.oddBizType}
                                                                                    </span>
                                                                                </>
                                                                                :
                                                                                <></>
                                                                        );
                                                                    })}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        {/* 휴가 일시 */}
                                                        {allData.empLeave.map((leave) => {
                                                            return (
                                                                ((formatFulldate(formatDate(leave.leaveStartDate)) <= formatFulldate(data.date)) && (formatFulldate(data.date) <= formatFulldate(formatDate(leave.leaveEndDate)))) ?
                                                                    <LeaveItem className={data.type}>
                                                                        {formatFulldate(formatDate(leave.leaveStartDate)) === formatFulldate(data.date) && <span>{leave.leaveDetail}</span>}
                                                                    </LeaveItem>
                                                                    :
                                                                    <></>
                                                            );
                                                        })}
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