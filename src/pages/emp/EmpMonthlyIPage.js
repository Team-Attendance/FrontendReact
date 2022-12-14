
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CalendarStatus from '../../components/common/CalendarStatus';
import { setCalendarDate } from '../../modules/calendar';
import { getStatusData, clear } from '../../modules/calendarStatus';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "./empMonthlyPage.scss";
import CalOddBizChart from './CalOddBizChart';
import CalLeaveChart from './CalLeaveChart';
import { clearData, setMonthlyData, updateMonthlyData } from '../../modules/monthlyTable';
import MonthlyTable from '../../table/MonthlyTable';
import ListAltIcon from '@mui/icons-material/ListAlt';


export function EmpMonthlyPage() {
  const sesssionUserNo = sessionStorage.getItem("empNo");

  const year = useSelector(state => state.monthlyTable.year);
  const month = useSelector(state => state.monthlyTable.month);
  const statusData = useSelector(state => state.calendarStatus.data);

  const dispatch = useDispatch();
  const setCalDate = useCallback((year, month) => dispatch(setCalendarDate(year, month)), [dispatch]);
  const onSetMonthData = useCallback((empNo) => dispatch(setMonthlyData(empNo)), [dispatch]);
  const onUpdateMonthData = useCallback((empNo, year, month, direction) => dispatch(updateMonthlyData(empNo, year, month, direction)), [dispatch]);
  const onUpdate = useCallback((empNo, year, month) => dispatch(getStatusData(empNo, year, month)), [dispatch]);

  useEffect(() => {
    const now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;

    setCalDate(year, month);
    onSetMonthData(sesssionUserNo);

    return () => {
      dispatch(clear());
      dispatch(clearData());
    };
  }, [onSetMonthData, onUpdateMonthData, sesssionUserNo, dispatch, setCalDate]);

  useEffect(() => {
    onUpdate(sesssionUserNo, year, month);
  }, [year, month, onUpdate, sesssionUserNo])

  return (
    <>
      {statusData &&
        <div className="common-container monthly-page-wrap">
          <div>
            <div className="menu-title">
              <h2><ListAltIcon sx={{ marginRight: '3px' }} /><span>?????? ??????</span></h2>
            </div>

            <div>
              <div className="cal-status-wrap">
                <CalendarStatus />
              </div>

              <div className="monthly-table-chart">
                <div className="flex-dev">
                  <div className="monthly-table-area">
                    <div>
                      <h3 style={{fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '11px'}}>?????? ?????? ??????</h3>
                    </div>
                    <div>
                      <div className="table-header-area">
                        <span>{year}??? {month}???</span>
                        <ArrowBackIosNewIcon sx={{ cursor: 'pointer', fontSize: '1rem', position: 'absolute', top: '14px', left: '110px', border: '1px solid lightgray', color: 'gray' }} onClick={() => { onUpdateMonthData(sesssionUserNo, year, month, 'prev'); }} />
                        <ArrowForwardIosIcon sx={{ cursor: 'pointer', fontSize: '1rem', position: 'absolute', top: '14px', left: '125px', border: '1px solid lightgray', color: 'gray' }} onClick={() => { onUpdateMonthData(sesssionUserNo, year, month, 'next'); }} />
                      </div>
                    </div>
                    <MonthlyTable />
                  </div>

                  <div className="chart-area">
                    <div className="biz-chart-area">
                      <h3>{month}??? ???????????????</h3>
                      <div className="biz-chart-wrap">
                        <div>
                          {statusData && <CalOddBizChart />}
                        </div>
                      </div>
                      <p>
                        <span>???????????????</span><br />
                        <span>{statusData.oddBizHourCount.oddBizCount !== 0 && statusData.oddBizHourCount.normalCount === 0 ? 100 : statusData.oddBizHourCount.oddBizCount === 0 || statusData.oddBizHourCount.normalCount === 0 ? 0 : Math.round(((statusData.oddBizHourCount.oddBizCount / (statusData.oddBizHourCount.normalCount + statusData.oddBizHourCount.oddBizCount)) * 100) * 10) / 10}%</span>
                      </p>
                    </div>

                    <div className="leave-chart-area">
                      <h3>{year}??? ?????? ?????????</h3>
                      <div className="leave-chart-wrap">
                        <div>
                          {statusData && <CalLeaveChart />}
                        </div>
                      </div>
                      <p>
                        <span>?????????</span><br />
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