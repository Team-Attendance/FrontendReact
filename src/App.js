import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from './layout/GlobalStyles';
import {Route, Routes} from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import {EmpMainPage} from "./pages/emp/EmpMainPage";
import EmpInfoPage from "./pages/emp/EmpInfoPage";
import EmpManagement from './pages/admin/EmpManagement';
import LeaveApproval from './pages/admin/LeaveApproval';
import {ConfigurationPage} from './pages/admin/ConfigurationPage';
import {Report} from './pages/admin/Report';
import {EmpMonthlyPage} from './pages/emp/EmpMonthlyIPage'
import {EmpDailyPage} from './pages/emp/EmpDailyPage'
import EmpLeavePage from './pages/emp/EmpLeavePage'
import EmpOddPage from './pages/emp/EmpOddPage'
import {AdminMainPage} from './pages/admin/AdminMainPage';
import OddApproval from './pages/admin/OddApproval';
import MainLayout from './layout/MainLayout';
import EmpRegistModal from './pages/admin/EmpRegistModal';


function App() {
    return (

        <Box sx={{display: 'flex'}}>

            {/* CSS 리셋 */}
            <GlobalStyles/>

            <CssBaseline/>
            <Routes>
                <Route path="/" element={<LoginPage/>} exact/>
            </Routes>

            {/* 메인 영역 */}
            {/* <Box component="main" sx={{ flexGrow: 1, pt: 8, ml: 30 }}> */}
            <Routes>
                <Route element={<MainLayout/>}>
                    {/* 사원 메인 페이지 */}
                    <Route path="/emp/main" element={<EmpMainPage/>}/>


                    {/* 사원 정보 페이지 */}
                    <Route path="/emp/emp-info" element={<EmpInfoPage/>}/>

                    {/* 사원 근태 정보(일) 페이지 */}
                    <Route path="/emp/daily-attendance-info" element={<EmpDailyPage/>}/>

                    {/* 사원 근태 정보(월) 페이지 */}
                    <Route path="/emp/monthly-attendance-info" element={<EmpMonthlyPage/>}/>

                    {/* 사원 휴가 현황 페이지 */}
                    <Route path="/emp/leave-info" element={<EmpLeavePage/>}/>

                    {/* 사원 이상근태 현황 페이지 */}
                    <Route path="/emp/odd-info" element={<EmpOddPage/>}/>


                    {/*어드민 환경설정 페이지  */}
                    <Route path="/admin/configuration" element={<ConfigurationPage/>}/>

                    {/*어드민 보고서 페이지 */}
                    <Route path="/admin/report/:id" element={<Report/>}/>

                    {/* 사원 관리 페이지 */}
                    <Route path='/admin/report' element={<EmpManagement/>}/>

                    {/*사원 정보 등록 */}
                    <Route path='/admin/emp-registration' element={<EmpRegistModal/>}/>

                    {/* 관리자 메인 페이지 */}
                    <Route path="/admin/main" element={<AdminMainPage/>}/>

                    {/* 에러 페이지 */}
                    {/* <Route path="/error" element={<ErrorPage />}/>  */}

                    {/* 휴가 승인 페이지 */}
                    <Route path='/admin/approval/leave' element={<LeaveApproval/>}/>
                    {/* 이상 근태 승인 페이지 */}
                    <Route path='/admin/approval/odd' element={<OddApproval/>}/>

                </Route>

            </Routes>
        </Box>
    );
}

export default App;