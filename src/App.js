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
import {EmpMonthlyPage} from './pages/emp/EmpMonthlyIPage'
import {EmpDailyPage} from './pages/emp/EmpDailyPage'
import EmpLeavePage from './pages/emp/EmpLeavePage'
import EmpOddPage from './pages/emp/EmpOddPage'
import {AdminMainPage} from './pages/admin/AdminMainPage';
import OddApproval from './pages/admin/OddApproval';
import MainLayout from './layout/MainLayout';
import EmpRegistModal from './pages/admin/EmpRegistModal';
import AdminRouter from "./pages/AdminRouter";
import EmpRouter from "./pages/EmpRouter";
import NotFound from "./pages/NotFound";
import { ReportPage } from './pages/admin/ReportPage';


function App() {
    const role = sessionStorage.getItem("empAuthority")
    return (

        <Box sx={{display: 'flex'}} style={{width: '1920px', height: '969px', overflow: 'hidden'}}>

            {/* CSS 리셋 */}
            <GlobalStyles/>

            <CssBaseline/>

            <Routes>
                <Route path="/" element={<LoginPage/>} exact/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <React.Fragment>
                <Routes>
                    <Route element={<MainLayout/>}>
                        {/* 사원 메인 페이지 */}
                        <Route path="/emp/main"  element={<EmpRouter authenticated={role} component={<EmpMainPage/>}/>}/>

                        {/* 사원 정보 페이지 */}
                        <Route path="/emp/emp-info" element={<EmpRouter authenticated={role} component={<EmpInfoPage/>}/>}/>

                        {/* 사원 근태 정보(일) 페이지 */}
                        <Route path="/emp/daily-attendance-info" element={<EmpRouter authenticated={role} component={<EmpDailyPage/>}/>}/>

                        {/* 사원 근태 정보(월) 페이지 */}
                        <Route path="/emp/monthly-attendance-info"  element={<EmpRouter authenticated={role} component={<EmpMonthlyPage/>}/>}/>

                        {/* 사원 휴가 현황 페이지 */}
                        <Route path="/emp/leave-info" element={<EmpRouter authenticated={role} component={<EmpLeavePage/>}/>}/>

                        {/* 사원 이상근태 현황 페이지 */}
                        <Route path="/emp/odd-info" element={<EmpRouter authenticated={role} component={<EmpOddPage/>}/>}/>

                        {/*어드민 보고서 페이지 */}
                        <Route path="/admin/report/:empNo" element={<AdminRouter authenticated={role} component={<ReportPage/>}/>}/>

                        {/* 사원 관리 페이지 */}
                        <Route path='/admin/report' element={<AdminRouter authenticated={role} component={<EmpManagement/>}/>}/>

                        {/*사원 정보 등록 */}
                        <Route path='/admin/emp-registration' element={<AdminRouter authenticated={role} component={<EmpRegistModal/>}/>}/>

                        {/* 관리자 메인 페이지 */}
                        <Route path="/admin/main" element={<AdminRouter authenticated={role} component={<AdminMainPage/>}/>}/>

                        {/* 휴가 승인 페이지 */}
                        <Route path='/admin/approval/leave' element={<AdminRouter authenticated={role} component={<LeaveApproval/>}/>}/>
                        {/* 이상 근태 승인 페이지 */}
                        <Route path='/admin/approval/odd' element={<AdminRouter authenticated={role} component={<OddApproval/>}/>}/>

                        
                        
                    </Route>
                </Routes>
            </React.Fragment>
        </Box>
    );
}

export default App;