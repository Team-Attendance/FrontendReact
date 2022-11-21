import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import FlightIcon from '@mui/icons-material/Flight';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Button from '@mui/material/Button';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SettingsIcon from '@mui/icons-material/Settings';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Meterial UI
const drawerWidth = 240;

// styled-component
const UserImage = styled.div`
  border: 1px solid gray;
  width: 180px;
  height: 180px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
`;

const UserInfo = styled.p`
  font-size: 0.9rem;
  margin : 15px 0;
  color: white;
`
const UserWork = styled.dl`
  font-size: 0.8rem;
  color: white;
  margin : 15px 0;
  
  & dt, dd{
    display: inline-block;
    
  }

  & dt{
    width: 45%;
    text-align: right;
  }
  & dd{
    width: 55%;
    text-align: center;
  }
`

const SideWrap = styled.div`
  background-color: #00AAFF;
  height: 100vh;
  overflow-y: scroll;
  padding-top: 64px;
  &.scroll-hidden::-webkit-scrollbar {
    display: none;
}
`
export function SideBar() {

  const adminMenu = [
    {img: <PeopleAltIcon sx={{ color: 'white' }}/>, name: '사원 관리', path: '/admin/emp-management'},
    {img: <CalendarMonthIcon sx={{ color: 'white' }}/>, name: '부서 일정', path: 'admin2'},
    {img: <EventAvailableIcon sx={{ color: 'white' }}/>, name: '휴가 승인', path: '/admin/leave-approval'},
    {img: <WarningAmberIcon sx={{ color: 'white' }}/>, name: '이상근태', path: '/emp/daily-attendance-info'},
    {img: <SettingsIcon sx={{ color: 'white' }}/>, name: '환경설정', path: 'admin5'},
  ]

  const empMenu = [
    {img: <PersonIcon sx={{ color: 'white' }}/>, name: '나의 정보', path: 'emp1'},
    {img: <EqualizerIcon sx={{ color: 'white' }}/>, name: '근태 현황', path: 'emp2'},
    {img: <FlightIcon sx={{ color: 'white' }}/>, name: '휴가 현황', path: 'emp3'},
    {img: <WarningAmberIcon sx={{ color: 'white' }}/>, name: '이상근태 현황', path: 'emp4'}
  ]
  return(
    
    <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          
        }}
      >
        
        <SideWrap className="scroll-hidden">
          <List>
      
            <Box style={{ margin : '0 15px', padding: '15px', textAlign: 'center', fontWeight: ''}}>
              <UserImage>
                <img width={"100%"} height={"100%"} src='/user.jpg' alt='user'/>
              </UserImage>
              <Box>
                <UserInfo>
                  김경욱 연구원<br/>
                  아마란스 그룹 개발 2부<br/>
                </UserInfo>
                <UserWork>
                  <dt>출근 시간</dt>
                  <dd>08 : 00</dd>
                  <dt>퇴근 시간</dt>
                  <dd>-</dd>
                </UserWork>
                {/* <IntoButton>출근</IntoButton> */}
                <Button variant="contained" color='primary' sx={{padding: '5px 60px', fontWeight: 'bold', boxShadow: 'none'}}>출근</Button>
              </Box>
            </Box>
          </List>
          <Divider />
          <List sx={{color: 'white'}}>
            {adminMenu.map((menu, index) => (
              <Link to={menu.path} key={index}>
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {
                      (function(){
                        return menu.img
                      })()
                    }
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{fontSize: '0.8rem', fontWeight: 'bold'}} primary={menu.name} />
                </ListItemButton>
              </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
          <List sx={{color: 'white'}}>
            {empMenu.map((menu, index) => (
              <Link to={menu.path} key={index}>
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {
                      (function(){
                        return menu.img
                      })()
                    }
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{fontSize: '0.8rem', fontWeight: 'bold'}} primary={menu.name} />
                </ListItemButton>
              </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
        </SideWrap>
      </Drawer>
  );
}