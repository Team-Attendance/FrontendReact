import { useSelector } from 'react-redux';
import "./calendarStatus.scss";

const CalendarStatus = () => {
  const calendarMonth = useSelector(state => state.calendar.month);
  const data = useSelector(state => state.calendarStatus.data);
  
  const oddStatusItem1 = [{ title: '정상 근무', class: 'normal', value: data?.oddBizHourCount.normalCount },
  { title: '이상 근무', class: 'odd-biz', value: data?.oddBizHourCount.oddBizCount }];

  const oddStatusItem2 = [{ title: '결근' }, { title: '지각' }, { title: '조퇴' }];

  const leaveStatusItem = [{ title: '휴가', value: data?.leaveCount.normalLeave, class: 'normal' },
  { title: '오전 휴가', value: data?.leaveCount.morningLeave, class: 'morning' },
  { title: '오후 휴가', value: data?.leaveCount.afternoonLeave, class: 'afternoon' }]


  return (
    <>
      {data && calendarMonth &&
        <div style={{ display: 'flex' }}>
          <div className='odd-biz-wrap'>
            <h2>{calendarMonth}월 근태 현황</h2>

            <div className='odd-status-item-list'>

              {
                oddStatusItem1.map((element) => {
                  return (
                    <div className={`odd-status-item ${element.class}`}>
                      <h4>{element.title}</h4>
                      <div>
                        <span>{element.value}일</span>
                      </div>
                    </div>
                  );
                })
              }


              {
                oddStatusItem2.map((element) => {
                  return (
                    <div className="odd-status-item">
                      <h4>{element.title}</h4>
                      <div>
                        {
                          data.oddBizList.absent && element.title === "결근" ? <span>{data.oddBizList.absent}회</span>
                            : data.oddBizList.tardy && element.title === "지각" ? <span>{data.oddBizList.tardy}회</span>
                              : data.oddBizList.leaveEarly && element.title === "조퇴" ? <span>{data.oddBizList.leaveEarly}회</span>
                                : <span>0회</span>
                        }
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>



          <div className='leave-status-wrap'>
            <h3>{calendarMonth}월 휴가 현황</h3>

            <div className='leave-status-item-list'>

              {
                leaveStatusItem.map((element) => {
                  return (
                    <div className={`leave-status-item ${element.class}`}>
                      <h4>{element.title}</h4>
                      <div>
                        {
                          element.value ? <span>{element.value}일</span> : <span>0일</span>
                        }
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default CalendarStatus;