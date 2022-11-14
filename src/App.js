// import Counter from "./components/Counter";
// import Todos from "./components/Todos";
// import CounterContainer from "./containers/CounterContainer";
// import CounterContainer2 from "./containers/CounterContainer2";
// import TodosContainer from "./containers/TodosContainer";
// import TodosContainer2 from "./containers/TodosContainer2";


// function App() {
//   return (
//     <div>
//       <CounterContainer />
//       <hr/>
//       <TodosContainer2/>
//     </div>
//   );
// }





// 실습 전(지우면 안됨)

import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from './GlobalStyles';
import { SideBar } from './SideBar';
import { Header } from './Header';
import {Test} from './Test'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from "./pages/common/LoginPage";
import { EmpMainPage } from "./pages/emp/EmpMainPage";
import { EmpInfoPage } from "./pages/emp/EmpInfoPage";
import { EmpDailyAattendanceInfoPage } from "./pages/emp/EmpDailyAattendanceInfoPage";
import { EmpMonthlyAattendanceInfoPage } from "./pages/emp/EmpMonthlyAattendanceInfoPage";
import { EmpLeaveInfoPage } from "./pages/emp/EmpLeaveInfoPage";
import { EmpOddBizInfoPage } from "./pages/emp/EmpOddBizInfoPage";
import EmpManagement from './pages/admin/EmpManagement';
import LeaveApproval from './pages/admin/LeaveApproval';
import { ConfigrationPage } from './pages/admin/ConfigrationPage';
import { Report } from './pages/admin/Report';
import LoginCon from './containers/LoginCon';



function App() {
  return (

    <Box sx={{ display: 'flex' }}>

      {/* CSS 리셋 */}
      <GlobalStyles/>

      <CssBaseline />
      <Routes>
       <Route   path="/" element={<LoginPage />} exact/>
     </Routes>


      {/* 헤더 */}
      {/* <Header/> */}
      
      {/* 사이드 바 */}
      {/* <SideBar/> */}

     
      {/* 메인 영역 */}
      <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>
        <Routes>


          {/* 사원 메인 페이지 */}
          <Route path="/emp/main" element={<EmpMainPage />}/>
         

          {/* 사원 정보 페이지 */}
          <Route path="/emp/emp-info" element={<EmpInfoPage />}/>

          {/* 사원 근태 정보(일) 페이지 */}
          <Route path="/emp/daily-attendance-info" element={<EmpDailyAattendanceInfoPage />}/>

          {/* 사원 근태 정보(월) 페이지 */}
          <Route path="/emp/monthly-attendance-info" element={<EmpMonthlyAattendanceInfoPage />}/>

          {/* 사원 휴가 현황 페이지 */}
          <Route path="/emp/leave-info" element={<EmpLeaveInfoPage />}/>

          {/* 사원 이상근태 현황 페이지 */}
          <Route path="/emp/odd-biz-info" element={<EmpOddBizInfoPage />}/>

          
          {/*어드민 환경설정 페이지  */}
          <Route path="/admin/configuration" element={<ConfigrationPage/>}/>
          
          {/*어드민 보고서 페이지 */}
          <Route path="/admin/report" element={<Report/>}/>

          {/* 사원 관리 페이지 */}
          <Route path='/admin/emp-management' element={<EmpManagement />} />
          
          {/* 관리자 메인 페이지
          <Route path="/admin/main" element={<AdminMainPage />}/>

           {/* 에러 페이지 */}
           {/* <Route path="/error" element={<ErrorPage />}/>  */}

          {/* 휴가 승인 페이지 */}
          <Route path='/admin/leave-approval' element={<LeaveApproval />} />

        </Routes>
      </Box>
    </Box>
  );
}

export default App;
