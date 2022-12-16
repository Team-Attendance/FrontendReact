import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SearchIcon from '@mui/icons-material/Search';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PieChartIcon from '@mui/icons-material/PieChart';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import './testPage.scss'
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import axios from "axios";
import { useEffect, useState } from "react";
import TestLeaveTable from "../../table/TestLeaveTable";
import Chart3 from "./Chart3";




export function TestPage() {

  const [testData, setTestData] = useState(null);

  useEffect(() => {

    axios.get('/test-data', {
      params: {
        empNo: 1,
      }
    }).then(
      (response) => {
        setTestData(response.data)
      }
    )
  }, [])

  return (
    <>
      {testData &&
        <div className="common-container test-page-wrap">
          <div>
            {/* <div className="menu-title">
            <h2><EventAvailableIcon sx={{ marginRight: '3px' }} /><span>테스트 페이지</span></h2>
          </div> */}
          {console.log(testData)}
            <div style={{ padding: '30px', borderRadius: '10px', border: '1px solid gray', position: 'relative' }}>
              <div style={{ display: 'flex', marginBottom: '18px' }}>
                <div className="basic-info-area">
                  <div style={{ paddingRight: '15px' }}>
                    <h3 className="title"><EventAvailableIcon sx={{ marginRight: '3px' }} />
                      <span>기본 정보</span>
                      <button>수정하기</button>
                    </h3>

                    <div className="basic-info-wrap">
                      <div>
                        <div className="image-area">
                          <img style={{ width: '100%', maxHeight: '186px', border: '1px solid lightgray' }} src="/jj.jpg" />
                        </div>
                        <div className="info-area">
                          <table>
                            <tr>
                              <th width="20%">
                                <span>이름</span>
                              </th>
                              <td width="30%">{testData.empInfo.emp_name}</td>
                              <th width="20%">
                                <span>사번</span>
                              </th>
                              <td width="30%">{testData.empInfo.emp_no}</td>
                            </tr>
                            <tr>
                              <th>
                                <span>부서</span>
                              </th>
                              <td>{testData.empInfo.dept_name}</td>
                              <th>
                                <span>직급</span>
                              </th>
                              <td>{testData.empInfo.emp_position}</td>
                            </tr>
                            <tr>
                              <th>
                                <span>입사일자</span>
                              </th>
                              <td>{testData.empInfo.emp_first_day_of_work}</td>
                              <th>
                                <span>휴대폰 번호</span>
                              </th>
                              <td>{testData.empInfo.emp_cell_phone}</td>
                            </tr>
                            <tr>
                              <th>
                                <span>사내번호</span>
                              </th>
                              <td>{testData.empInfo.emp_office_phone}</td>
                              <th>
                                <span>비상연락망</span>
                              </th>
                              <td>{testData.empInfo.emp_contact_list}</td>
                            </tr>
                            <tr>
                              <th>
                                <span>이메일</span>
                              </th>
                              <td colSpan={3}>{testData.empInfo.emp_email}</td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ width: '50%', display: 'flex', paddingLeft: '10px' }}>
                  <div style={{ width: '50%', paddingLeft: '15px', paddingRight: '10px' }}>
                    <h3 style={{ marginBottom: '7px', fontSize: '0.9rem', fontWeight: 'bold', lineHeight: '20px', display: 'flex', alignItems: 'center' }}><PieChartIcon sx={{ marginRight: '3px' }} /><span>연차 사용</span></h3>
                    <div style={{ border: '1px solid lightgray', height: '188px' }}>
                      <Chart1 />
                    </div>
                  </div>

                  <div style={{ width: '50%', paddingLeft: '25px' }}>
                    <h3 style={{ marginBottom: '7px', fontSize: '0.9rem', fontWeight: 'bold', lineHeight: '20px', display: 'flex', alignItems: 'center' }}><PieChartIcon sx={{ marginRight: '3px' }} /><span>당월 이상근태</span></h3>
                    <div style={{ border: '1px solid lightgray', height: '188px' }}>
                      <Chart2 />
                    </div>
                  </div>
                </div>

              </div>














              <div style={{ display: 'flex', marginBottom: '18px' }}>
                <div style={{ width: '50%', paddingRight: '10px' }}>
                  <div style={{ paddingRight: '15px' }}>
                    <h3 style={{ marginBottom: '5px', fontSize: '0.9rem', fontWeight: 'bold', lineHeight: '20px', display: 'flex', alignItems: 'center' }}><PendingActionsIcon sx={{ marginRight: '3px' }} /><span>휴가 신청 현황</span></h3>
                    <div style={{ border: '1px solid lightgray', height: '235px' }}>

                      <TestLeaveTable testData={testData} />
                    </div>
                  </div>
                </div>
                <div style={{ width: '50%', paddingLeft: '10px' }}>
                  <div style={{ paddingLeft: '15px' }}>
                    <h3 style={{ marginBottom: '5px', fontSize: '0.9rem', fontWeight: 'bold', lineHeight: '20px', display: 'flex', alignItems: 'center' }}><LeaderboardIcon sx={{ marginRight: '3px' }} /><span>주간 근무 시간 현황</span></h3>
                    <div style={{ border: '1px solid lightgray', height: '235px' }}>
                      <Chart3 />
                    </div>
                  </div>
                </div>
              </div>





              <div style={{ display: 'flex' }}>
                <div style={{ width: '50%', paddingRight: '10px' }}>
                  <div style={{ paddingRight: '15px' }}>
                    <h3 style={{ marginBottom: '5px', fontSize: '0.9rem', fontWeight: 'bold', lineHeight: '20px', display: 'flex', alignItems: 'center' }}><PendingActionsIcon sx={{ marginRight: '3px' }} /><span>이상근태 조정 신청 현황</span></h3>
                    <div style={{ border: '1px solid lightgray', height: '235px' }}>
                      <TestLeaveTable testData={testData} />
                    </div>
                  </div>
                </div>
                <div style={{ width: '50%', paddingLeft: '10px' }}>
                  <div style={{ paddingLeft: '15px' }}>
                    <h3 style={{ marginBottom: '5px', fontSize: '0.9rem', fontWeight: 'bold', lineHeight: '20px', display: 'flex', alignItems: 'center' }}><LeaderboardIcon sx={{ marginRight: '3px' }} /><span>월간 이상 근태 현황</span></h3>
                    <div style={{ border: '1px solid lightgray', height: '235px' }}>
                      <Chart3 />
                    </div>
                  </div>
                </div>
              </div>


              <button style={{ position: 'absolute', top: '15px', right: '30px', border: '1px solid lightgray', padding: '5px 15px', fontSize: '0.8rem', fontWeight: 'bold', backgroundColor: 'lightgray' }}>사원 검색</button>

















            </div>
          </div>


        </div>
      }

    </>
  );


}