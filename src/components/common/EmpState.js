import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import HailIcon from '@mui/icons-material/Hail';
import './empState.scss';

const EmpState = ({ documentStatusData }) => {
  const deptBizStatus = documentStatusData.deptBizStatus;
  const imgEng = {강보라 : 'KBR', 김경욱 : 'KKU', 김민욱 : 'KMU', 김현민 : 'KHM', 박상민 : 'PSM', 박수용 : 'PSY', 손용민 : 'SYM', 이동훈 : 'EDH', 정주현 : 'JJH', 이광석 : 'EKS'};
  

  return (
    <div className="emp-state-area">
      <h2 className="title">부서원 현황</h2>
      <div className='emp-state scroll-hidden'>

        {deptBizStatus.map((element) => {
          const className = { 휴가: 'leave', 출근: 'work', 퇴근: 'leave-work', 지각: 'tardy', 조퇴: 'leave-early', 결근: 'absenteeism' };

          return (
            <div className="state-element">
              <div>
                <div className="img-area">
                  <img src={`/${imgEng[element.empName]}.jpg`} alt='img' style={{ width: '100%', height: '100%' }} />
                </div>

                <div className="emp-info-area">
                  <div><span className="name">{element.empName}</span></div>
                  <div><span className="position">{element.empPosition}</span></div>
                </div>

                <div className="state-info-area">
                  <div>
                    <div className={`state-icon ${className[element.bizState]}`}>
                      {
                        (() => {
                          switch (element.bizState) {
                            case '휴가':
                              return <FlightIcon sx={{ color: 'white', fontSize: '20px', lineHeight: '20px', marginRight: '5px' }} />
                            case '출근':
                              return <HowToRegIcon sx={{ color: 'white', fontSize: '20px', lineHeight: '20px', marginRight: '5px' }} />
                            case '퇴근':
                              return <HailIcon sx={{ color: 'white', fontSize: '20px', lineHeight: '20px', marginRight: '5px' }} />
                            case '지각':
                              return <AccessAlarmsIcon sx={{ color: 'white', fontSize: '20px', lineHeight: '20px', marginRight: '5px' }} />
                            case '조퇴':
                              return <DirectionsRunIcon sx={{ color: 'white', fontSize: '20px', lineHeight: '20px', marginRight: '5px' }} />
                            case '결근':
                              return <PersonOffIcon sx={{ color: 'white', fontSize: '20px', lineHeight: '20px', marginRight: '5px' }} />
                            default :
                          }
                        })()
                      }

                      <span className="state">{element.bizState}</span>
                    </div>
                    <div className="time-area">
                      {
                        (() => {
                          const stateType = typeof element.stateTime;
                          if (stateType === 'string') {
                            if (element.stateTime === '') {
                              return <span style={{ color: 'gray' }}>결근 상태</span>
                            } else {
                              return <span>{element.stateTime}</span>
                            }
                          } else {
                            if (element.stateTime.hour >= 12) {
                              return <span>오후 {`0${(element.stateTime.hour - 12)} : ${element.stateTime.minute < 10 ? "0" + element.stateTime.minute : element.stateTime.minute}`}</span>
                            } else {
                              if (element.stateTime.hour < 10) {
                                return <span>오전 {`0${(element.stateTime.hour)} : ${element.stateTime.minute < 10 ? "0" + element.stateTime.minute : element.stateTime.minute}`}</span>
                              } else {
                                return <span>오전 {`${(element.stateTime.hour)} : ${element.stateTime.minute < 10 ? element.stateTime.minute : element.stateTime.minute}`}</span>
                              }
                            }
                          }
                        })()
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EmpState;