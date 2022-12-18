import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import HailIcon from '@mui/icons-material/Hail';
import './empState.scss';
import axios from "axios";
import {useState} from "react";
import * as React from "react";

const EmpState = ({ documentStatusData }) => {
  const deptBizStatus = documentStatusData.deptBizStatus;

    const imgArr = []

    const getImg = async (empNo) => {
        await axios({
            url: `http://localhost:8080/emp/images/${empNo}`,
            method: "GET",
            responseType: 'blob'
        }).then((response) => {
            imgArr.push(response.data)
        })
            .catch((error) => {
                console.log(error);
            })
    }

// /emp/images/{empNo}
  return (
    <div style={{ width: '100%', border: '', padding: '5px 15px', borderRadius: '15px' }}>
      <div style={{ paddingTop: '15px', marginBottom: '5px' }}>
        <h2 style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>부서원 현황</h2>
      </div>
      <div className='emp-state scroll-hidden'>

        {deptBizStatus.map((element, index) => {
          const className = { 휴가: 'leave', 출근: 'work', 퇴근: 'leave-work', 지각: 'tardy', 조퇴: 'leave-early', 결근: 'absenteeism' };
          return (
            <div className="state-element">
              <div>
                <div className="img-area">
                    {/*{imgArr &&*/}
                    {/*    <img width={"100%"} height={"100%"} src={URL.createObjectURL(imgArr[index])} alt=''/>*/}
                    {/*}*/}
                  {/*<img src="/user.jpg" alt='img' style={{ width: '100%', height: '100%' }} />*/}
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
                          }
                        })()
                      }

                      <span className="state">{element.bizState}</span>
                    </div>
                    <div className="time-area">
                      {
                        (() => {
                          const stateType = typeof element.stateTime;
                          if(stateType === 'string'){
                            if(element.stateTime === ''){
                              return <span style={{color: 'gray'}}>결근 상태</span>
                            }else{
                              return <span>{element.stateTime}</span>
                            }
                          }else{
                            if(element.stateTime.hour >= 12){
                              return <span>오후 {`0${(element.stateTime.hour - 12)} : ${element.stateTime.minute < 10 ? "0" + element.stateTime.minute : element.stateTime.minute}`}</span>
                            }else{
                              if(element.stateTime.hour < 10){
                                return <span>오전 {`0${(element.stateTime.hour)} : ${element.stateTime.minute < 10 ? "0" + element.stateTime.minute : element.stateTime.minute}`}</span>
                              }else{
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