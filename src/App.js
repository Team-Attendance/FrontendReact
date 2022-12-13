import * as React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Box from "@mui/material/Box";
import GlobalStyles from "./layout/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./layout/MainLayout";
import {EmpMainPage} from "./pages/emp/EmpMainPage";
import EmpInfoPage from "./pages/emp/EmpInfoPage";
import {EmpDailyPage} from "./pages/emp/EmpDailyPage";
import {EmpMonthlyPage} from "./pages/emp/EmpMonthlyIPage";
import EmpLeavePage from "./pages/emp/EmpLeavePage";
import EmpOddPage from "./pages/emp/EmpOddPage";
import {ConfigurationPage} from "./pages/admin/ConfigurationPage";
import {Report} from "./pages/admin/Report";
import EmpManagement from "./pages/admin/EmpManagement";
import EmpRegistModal from "./pages/admin/EmpRegistModal";
import {AdminMainPage} from "./pages/admin/AdminMainPage";
import LeaveApproval from "./pages/admin/LeaveApproval";
import OddApproval from "./pages/admin/OddApproval";

function App() {
    let auth = sessionStorage.getItem("empAuthority");
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
            {/*{!empAuthority ? <Navigate to="/login"/> : <Navigate to>}*/}

            <Routes>
                <Route element={<MainLayout/>}>
                    {/* 사원 메인 페이지 */}

                   {/* <Route path="emp" element={<EmpMainPage/>}>
                        <Route path="" element={<EmpMainPage/>}>
                        <Route path="main" element={<EmpMainPage/>}/>
                        <Route path="emp-info" element={<EmpInfoPage/>}/>
                        <Route path=":daily-attendance-info" element={<EmpDailyPage/>}/>
                        <Route path=":monthly-attendance-info" element={<EmpMonthlyPage/>}/>
                        <Route path=":leave-info" element={<EmpLeavePage/>}/>
                        <Route path="/emp/odd-info" element={<EmpOddPage/>}/>
                    </Route>*/}


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


                   {/* <Route path="admin"}>
                        <Route path=":"" element={<AdminMainPage/>}/>
                        <Route path=":main" element={<AdminMainPage/>}/>
                        <Route path=":configuration" element={<ConfigurationPage/>}/>
                        <Route path=":report" element={<Report/>}/>
                        <Route path=':emp-management' element={<EmpManagement/>}/>
                        <Route path=':emp-registration' element={<EmpRegistModal/>}/>
                        <Route path=':approval/leave' element={<LeaveApproval/>}/>
                        <Route path=':approval/odd' element={<OddApproval/>}/>
                    </Route>*/}
                    {/*어드민 환경설정 페이지  */}
                    <Route path="/admin/configuration" element={<ConfigurationPage/>}/>

                    {/*어드민 보고서 페이지 */}
                    <Route path="/admin/report" element={<Report/>}/>

                    {/* 사원 관리 페이지 */}
                    <Route path='/admin/emp-management' element={<EmpManagement/>}/>

                    {/*사원 정보 등록 */}
                    <Route path='/admin/emp-registration' element={<EmpRegistModal/>}/>

                    {/* 관리자 메인 페이지 */}
                    <Route path="/admin/main" element={<AdminMainPage/>}/>

                    {/* 휴가 승인 페이지 */}
                    <Route path='/admin/approval/leave' element={<LeaveApproval/>}/>
                    {/* 이상 근태 승인 페이지 */}
                    <Route path='/admin/approval/odd' element={<OddApproval/>}/>

                </Route>
            </Routes>
                ) }
        </Box>
    );
}

export default App;
