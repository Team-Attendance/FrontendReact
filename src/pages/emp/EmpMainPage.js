import { SideBar } from '../../layout/SideBar';
import { Header } from '../../layout/Header';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '../../layout/GlobalStyles';

export function EmpMainPage(){

  return (
    <Box sx={{ display: 'flex' }}>

    {/* CSS 리셋 */}
    <GlobalStyles/>

    <CssBaseline />
         {/* 헤더 */}
         {/* <Header/> */}
      
         {/* 사이드 바 */}
         {/* <SideBar/> */}
    <div>
      <h1>Emp MainPage</h1>
    </div>
     
    </Box>
  );
}