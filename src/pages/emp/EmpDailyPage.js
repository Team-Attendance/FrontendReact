import { useEffect, useState } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import CalendarStatus from "../../components/common/CalendarStatus";
import { setCalendar } from "../../modules/calendar";
import { getStatusData, clear } from "../../modules/calendarStatus";
import { close } from "../../modules/leaveModal";
import CalLeaveChart from "./CalLeaveChart";
import CalOddBizChart from "./CalOddBizChart";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Calendar } from "../../components/common/Calendar";
import { DeptCalendar } from "../../components/common/DeptCalender";
import { setDeptCalendar } from "../../modules/deptCalendar";






export function EmpDailyPage() {

  // store 변수
  const calendar = useSelector(state => state.calendar.calendar);
  const calendarData = useSelector(state => state.calendar.data);

  const year = useSelector(state => state.calendar.year);
  const month = useSelector(state => state.calendar.month);
  const nowDate = useSelector(state => state.calendar.nowDate);
  const statusData = useSelector(state => state.calendarStatus.data);


  const [showDeptCalendar, setShowDeptCalendar] = useState(true);

  // store 함수
  const dispatch = useDispatch();
  const setCompoCalendar = useCallback(() => dispatch(setCalendar(1)), [dispatch]);
  const setDeptCompoCalendar = useCallback(() => dispatch(setDeptCalendar(1)), [dispatch]);

  const closeModal = useCallback(() => dispatch(close()), [dispatch]);
  const onUpdate = useCallback((empNo, year, month) => dispatch(getStatusData(empNo, year, month)), [dispatch]);

  useEffect(() => {
    closeModal();
    dispatch(clear());
    setCompoCalendar();
    setDeptCompoCalendar();
  }, [closeModal, setCompoCalendar, setDeptCompoCalendar])

  useEffect(() => {
    if (year !== 0 && month !== 0) {
      onUpdate(1, year, month);
    }
  }, [month, year, onUpdate])

  return (
    <>
      {calendar && calendarData && year && month && nowDate && statusData &&
        <div style={{ position: 'relative', minHeight: 'calc(100vh - 64px)', padding: '30px', display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ marginBottom: '10px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}><EventAvailableIcon sx={{ marginRight: '3px' }} /><span style={{ verticalAlign: 'text-bottom' }}>일별 근태 현황</span></h2>
          </div>

          <div style={{ width: '100%', marginBottom: '25px' }}>
            <CalendarStatus />
          </div>

          <div style={{ width: '75%' }}>
            {
              showDeptCalendar === true ? <Calendar setShowDeptCalendar={setShowDeptCalendar} /> : <DeptCalendar setShowDeptCalendar={setShowDeptCalendar} />
            }
          </div>

          <div style={{ width: '25%', paddingLeft: '35px' }}>

            <div style={{ height: '332px', marginBottom: '15px', position: 'relative' }}>
              <h3 style={{ width: '100%', fontSize: '0.9rem', fontWeight: 'bold' }}>{month}월 이상근태율</h3>
              <div style={{ border: '1px solid lightgray', marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', height: '300px' }}>
                  <CalOddBizChart />
                </div>
              </div>
              <p style={{ width: '90px', height: '50px', position: 'absolute', top: '46%', left: 'calc(50% - 45px)', textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' }}>
                <span>이상근태율</span><br />
                <span>{statusData.oddBizHourCount.oddBizCount === 0 || statusData.oddBizHourCount.normalCount === 0 ? 0 : Math.round(((statusData.oddBizHourCount.oddBizCount / (statusData.oddBizHourCount.normalCount + statusData.oddBizHourCount.oddBizCount)) * 100) * 10) / 10}%</span>
              </p>
            </div>


            <div style={{ height: '332px', position: 'relative' }}>
              <h3 style={{ width: '100%', fontSize: '0.9rem', fontWeight: 'bold' }}>{year}년 휴가 사용률</h3>
              <div style={{ border: '1px solid lightgray', marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', height: '300px' }}>
                  <CalLeaveChart />
                </div>
              </div>
              <p style={{ width: '50px', height: '50px', position: 'absolute', top: '46%', left: 'calc(50% - 25px)', textAlign: 'center', fontWeight: 'bold' }}>
                <span>사용률</span><br />

                <span>{statusData.leaveUtilzition != null ? statusData.leaveUtilzition.use_percent : 0}%</span>
              </p>
            </div>




          </div>
        </div>

      }
    </>

  );
}







