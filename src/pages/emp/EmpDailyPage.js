import { useEffect, useState } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import CalendarStatus from "../../components/common/CalendarStatus";
import { setCalendar } from "../../modules/calendar";
import { getStatusData, clear } from "../../modules/calendarStatus";
import { close } from "../../modules/leaveModal";
import CalLeaveChart from "./CalLeaveChart";
import CalOddBizChart from "./CalOddBizChart";
import { Calendar } from "../../components/common/Calendar";
import { DeptCalendar } from "../../components/common/DeptCalender";
import { setDeptCalendar } from "../../modules/deptCalendar";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './empDailyPage.scss';





export function EmpDailyPage() {

  const sessionUserNo = sessionStorage.getItem("empNo");
  const sessionDeptName = sessionStorage.getItem("deptName");

  const calendar = useSelector(state => state.calendar.calendar);
  const calendarData = useSelector(state => state.calendar.data);
  const year = useSelector(state => state.calendar.year);
  const month = useSelector(state => state.calendar.month);
  const nowDate = useSelector(state => state.calendar.nowDate);
  const statusData = useSelector(state => state.calendarStatus.data);

  const [showDeptCalendar, setShowDeptCalendar] = useState(true);

  const dispatch = useDispatch();
  const setCompoCalendar = useCallback(() => dispatch(setCalendar(sessionUserNo)), [dispatch, sessionUserNo]);
  const setDeptCompoCalendar = useCallback(() => dispatch(setDeptCalendar(sessionUserNo, sessionDeptName)), [dispatch, sessionUserNo, sessionDeptName]);

  const closeModal = useCallback(() => dispatch(close()), [dispatch]);
  const onUpdate = useCallback((empNo, year, month) => dispatch(getStatusData(empNo, year, month)), [dispatch]);

  useEffect(() => {
    closeModal();
    setCompoCalendar();
    setDeptCompoCalendar();

    return () => {
      dispatch(clear());
    };
  }, [closeModal, setCompoCalendar, setDeptCompoCalendar, dispatch])

  useEffect(() => {
    if (year !== 0 && month !== 0) {
      onUpdate(sessionUserNo, year, month);
    }
  }, [sessionUserNo, month, year, onUpdate])

  return (
    <>
      {calendar && calendarData && year && month && nowDate && statusData &&
        <div className="common-container daily-page-wrap">
          <div className="menu-title">
            <h2><CalendarMonthIcon sx={{ marginRight: '3px' }} /><span>근태 현황</span></h2>
          </div>

          <div className="cal-status-wrap">
            <CalendarStatus />
          </div>

          <div style={{display: 'flex'}}>
            <div className="cal-wrap">
              {
                showDeptCalendar === true ? <Calendar setShowDeptCalendar={setShowDeptCalendar} /> : <DeptCalendar setShowDeptCalendar={setShowDeptCalendar} />
              }
            </div>

            <div className="daily-page-chart-wrap">
              <div className="biz-chart-wrap">
                <h3>{month}월 이상근태율</h3>
                <div className="chart-area" style={{ marginTop: '8.5px' }}>
                  <div>
                    <CalOddBizChart />
                  </div>
                </div>
                <p>
                  <span>이상근태율</span><br />
                  <span>{statusData.oddBizHourCount.oddBizCount !== 0 && statusData.oddBizHourCount.normalCount === 0 ? 100 : statusData.oddBizHourCount.oddBizCount === 0 || statusData.oddBizHourCount.normalCount === 0 ? 0 : Math.round(((statusData.oddBizHourCount.oddBizCount / (statusData.oddBizHourCount.normalCount + statusData.oddBizHourCount.oddBizCount)) * 100) * 10) / 10}%</span>
                </p>
              </div>

              <div className="leave-chart-wrap">
                <h3>{year}년 휴가 사용률</h3>
                <div className="chart-area" style={{ marginTop: '11px' }}>
                  <div>
                    <CalLeaveChart />
                  </div>
                </div>
                <p>
                  <span>사용률</span><br />
                  <span>{statusData.leaveUtilzition != null ? statusData.leaveUtilzition.use_percent : 0}%</span>
                </p>
              </div>
            </div>


          </div>





        </div>
      }
    </>
  );
}







