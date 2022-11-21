import styled from 'styled-components'
import React, { useEffect, useCallback } from "react";
import { getStatusData, loding } from '../../modules/calanderStatus';
import { useDispatch, useSelector } from 'react-redux';

const StatusWrap = styled.div`
`

const OddStatusItem = styled.div`
  width: 19%;
  border-radius: 10px;
  position: relative;
  

  &.normal{
    background-color: #;
  }

  &.odd-biz{
    background-color: #;
  }

  &.percent{
    background-color: #;
  }

  & h4{
    position: absolute;
    left: 10px;
    top: 8px;
    font-weight: bold;
  }

  & > div{
    text-align: center;
    padding-top: 25px;
    padding-bottom: 10px;
  }

  & span{
    font-size: 1.2rem;
    font-weight: bold;
  }
`


const LeaveStatusItem = styled.div`
  width: 32%;
  border-radius: 10px;
  background-color: lightgray;
  position: relative;

  & h4{
    position: absolute;
    left: 10px;
    top: 8px;
    font-weight: bold;
  }

  & > div{
    text-align: center;
    padding-top: 25px;
    padding-bottom: 10px;
  }

  &.normal{
    background-color: #;
  }

  &.morning{
    background-color: #;
  }

  &.afternoon{
    background-color: #;
  }

  &.remainder{
    background-color: #;
  }

  & span{
    font-size: 1.2rem;
    font-weight: bold;
  }
`

const CalanderStatus = () => {

  const dispatch = useDispatch();
  



  const calander = useSelector(state => state.calander.calander);
  const calanderData = useSelector(state => state.calander.data);
  const nowDate = useSelector(state => state.calander.nowDate);
  
  const calanderYear = useSelector(state => state.calander.year);
  const calanderMonth = useSelector(state => state.calander.month);

  const statusLoading = useSelector(state => state.calanderStatus.loading);

  const data = useSelector(state => state.calanderStatus.data);
  const month = useSelector(state => state.calanderStatus.month);
  // const onUpdate = useCallback(() => dispatch(getStatusData(1, calanderYear, calanderMonth)), [dispatch]);

  
  // useEffect(() => {
  //   loding();
  //   onUpdate();
  // }, [])

  return (
    <div>
      {calander && calanderData && nowDate && calanderYear && calanderMonth && data &&
        <StatusWrap className='test'>
          
          <div style={{ display: 'flex' }}>
            <div style={{ width: '60%', height: '100%', fontSize: '0.8rem', paddingRight: '20px' }}>
              <h3 style={{ width: '100%', fontWeight: 'bold' }}>{calanderMonth}월 근태 현황</h3>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px', border: '1px solid lightgray' }}>

                <OddStatusItem className="normal">
                  <h4>정상 근무</h4>
                  <div>
                    <span>{data.oddBizHourCount.normalCount}일</span>
                  </div>
                </OddStatusItem>

                <OddStatusItem className="odd-biz">
                  <h4>이상 근무</h4>
                  <div>
                    <span>{data.oddBizHourCount.oddBizCount}일</span>
                  </div>
                </OddStatusItem>

                <OddStatusItem className="percent">
                  <h4>결석</h4>
                  <div>
                    {
                      data.oddBizList.length > 0 ?
                        <>
                          {data.oddBizList.map((oddBiz) => {
                            return (
                              "결석" === oddBiz.odd_biz_type && <span>{oddBiz.odd_count}회</span>
                            )
                          })}
                        </>
                        :
                        <span>0회</span>
                    }
                  </div>
                </OddStatusItem>

                <OddStatusItem className="percent">
                  <h4>지각</h4>
                  <div>
                    {
                      data.oddBizList.length > 0 ?
                        <>
                          {data.oddBizList.map((oddBiz) => {
                            return (
                              "지각" === oddBiz.odd_biz_type && <span>{oddBiz.odd_count}회</span>
                            )
                          })}
                        </>
                        :
                        <span>0회</span>
                    }
                  </div>
                </OddStatusItem>

                <OddStatusItem className="percent">
                  <h4>조퇴</h4>
                  <div>
                    {
                      data.oddBizList.length > 0 ?
                        <>
                          {data.oddBizList.map((oddBiz) => {
                            return (
                              "조퇴" === oddBiz.odd_biz_type && <span>{oddBiz.odd_count}회</span>
                            )
                          })}
                        </>
                        :
                        <span>0회</span>
                    }
                  </div>
                </OddStatusItem>
              </div>
            </div>

            <div style={{ width: '40%', height: '100%', fontSize: '0.8rem', paddingLeft: '20px' }}>
              <h3 style={{ width: '100%', fontWeight: 'bold' }}>11월 휴가 현황</h3>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px', border: '1px solid lightgray' }}>

                <LeaveStatusItem className="normal">
                  <h4>휴가</h4>
                  <div>
                    <span>5일</span>
                  </div>
                </LeaveStatusItem>

                <LeaveStatusItem className="morning">
                  <h4>오전 휴가</h4>
                  <div>
                    <span>5일</span>
                  </div>
                </LeaveStatusItem>

                <LeaveStatusItem className="afternoon">
                  <h4>오후 휴가</h4>
                  <div>
                    <span>5일</span>
                  </div>
                </LeaveStatusItem>
              </div>
            </div>
          </div>
        </StatusWrap>
        }
    </div>
  );
}

export default CalanderStatus;