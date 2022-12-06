
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CalendarStatus from '../../components/common/CalendarStatus';
import { setCalendarDate } from '../../modules/calendar';
import { getStatusData, clear } from '../../modules/calendarStatus';
import { monthCalendar } from '../../modules/cal_function';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "./empMonthlyPage.scss";
import CalOddBizChart from './CalOddBizChart';
import CalLeaveChart from './CalLeaveChart';
import { setMonthlyData, updateMonthlyData } from '../../modules/monthlyTable';
import MonthlyTable from '../../table/MonthlyTable';

export function EmpMonthlyPage() {

  const year = useSelector(state => state.calendar.year);
  const month = useSelector(state => state.calendar.month);
  const statusData = useSelector(state => state.calendarStatus.data);

  const dispatch = useDispatch();
  const setCalDate = useCallback((year, month) => dispatch(setCalendarDate(year, month)), [dispatch]);

  const onSetMonthData = useCallback((empNo) => dispatch(setMonthlyData(empNo)), [dispatch]);
  const onUpdateMonthData = useCallback((empNo, year, month, direction) => dispatch(updateMonthlyData(empNo, year, month, direction)), [dispatch]);

  const onUpdate = useCallback((empNo, year, month) => dispatch(getStatusData(empNo, year, month)), [dispatch]);

  // const cal = monthCalendar();


  useEffect(() => {
    dispatch(clear());
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    setCalDate(year, month);


    onSetMonthData(1);
  }, []);

  useEffect(() => {
    onUpdate(1, year, month);
  }, [year, month])

  return (
    <>
      {statusData &&
        <div style={{ padding: '30px' }}>
          {console.log( new Date('2022-12-05').getDay() )}
          <div style={{ marginBottom: '10px' }}>
            <div style={{ marginBottom: '10px' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}><EventAvailableIcon sx={{ marginRight: '3px' }} /><span style={{ verticalAlign: 'text-bottom' }}>월별 근태 현황</span></h2>
            </div>
            <div>
              <div style={{ width: '100%', marginBottom: '25px' }}>
                <CalendarStatus />
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex' }}>



                  <div style={{ width: '75%', marginTop: '5px' }}>



                    <div>
                      <div style={{ position: 'relative', textAlign: 'left', padding: '10px 20px', border: '1px solid lightgray', backgroundColor: 'whitesmoke', borderBottom: 'none' }}>
                        <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{year}년 {month}월</span>
                        <ArrowBackIosNewIcon sx={{ cursor: 'pointer', fontSize: '1rem', position: 'absolute', top: '14px', left: '110px', border: '1px solid lightgray', color: 'gray' }} onClick={() => { onUpdateMonthData(1, year, month, 'prev'); month === 1 ? setCalDate(year - 1, 12) : setCalDate(year, month - 1) }} />
                        <ArrowForwardIosIcon sx={{ cursor: 'pointer', fontSize: '1rem', position: 'absolute', top: '14px', left: '125px', border: '1px solid lightgray', color: 'gray' }} onClick={() => { onUpdateMonthData(1, year, month, 'next'); month === 12 ? setCalDate(year + 1, 1)  : setCalDate(year, month + 1) }} />
                      </div>
                    </div>
                    <MonthlyTable />
                  </div>














                  <div style={{ width: '25%', paddingLeft: '35px' }}>
                    <div style={{ marginBottom: '15px', position: 'relative' }}>
                      <h3 style={{ width: '100%', fontSize: '0.9rem', fontWeight: 'bold' }}>{month}월 이상근태율</h3>
                      <div style={{ border: '1px solid lightgray', marginTop: '11px', display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '100%', height: '277px' }}>
                          {statusData && <CalOddBizChart />}
                        </div>
                      </div>
                      <p style={{ width: '90px', height: '50px', position: 'absolute', top: '46%', left: 'calc(50% - 45px)', textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' }}>
                        <span>이상근태율</span><br />
                        <span>{statusData?.oddBizHourCount.oddBizCount === 0 || statusData?.oddBizHourCount.normalCount === 0 ? 0 : Math.round(((statusData?.oddBizHourCount.oddBizCount / (statusData?.oddBizHourCount.normalCount + statusData?.oddBizHourCount.oddBizCount)) * 100) * 10) / 10}%</span>
                      </p>
                    </div>


                    <div style={{ position: 'relative' }}>
                      <h3 style={{ width: '100%', fontSize: '0.9rem', fontWeight: 'bold' }}>{year}년 휴가 사용률</h3>
                      <div style={{ border: '1px solid lightgray', marginTop: '11px', display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '100%', height: '277px' }}>
                          {statusData && <CalLeaveChart />}
                        </div>
                      </div>
                      <p style={{ width: '50px', height: '50px', position: 'absolute', top: '46%', left: 'calc(50% - 25px)', textAlign: 'center', fontWeight: 'bold' }}>
                        <span>사용률</span><br />

                        <span>{statusData?.leaveUtilzition != null ? statusData?.leaveUtilzition.use_percent : 0}%</span>
                      </p>
                    </div>
                  </div>

                </div>











              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}