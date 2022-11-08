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
export function SideBar() {
  return(
    <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', backgroundColor: '#00AAFF', minHeight: 'calc(100vh - 64px)' }}>
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
            {['사원 관리', '부서 일정', '휴가 승인', '이상근태', '환경설정'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {
                      (function(){
                        if(index === 0){
                          return <PeopleAltIcon sx={{ color: 'white' }}/>
                        }else if(index === 1){
                          return <CalendarMonthIcon sx={{ color: 'white' }}/>
                        }else if(index === 2){
                          return <EventAvailableIcon sx={{ color: 'white' }}/>
                        }else if(index === 3){
                          return <WarningAmberIcon sx={{ color: 'white' }}/>
                        }else if(index ===4){
                          return <SettingsIcon sx={{ color: 'white' }}/>
                        }
                      })()
                    }
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{fontSize: '0.8rem', fontWeight: 'bold'}} primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List sx={{color: 'white'}}>
            {['나의 정보', '근태 현황', '휴가 현황', '이상근태 현황'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {
                      (function(){
                        if(index === 0){
                          return <PersonIcon sx={{ color: 'white' }}/>
                        }else if(index === 1){
                          return <EqualizerIcon sx={{ color: 'white' }}/>
                        }else if(index === 2){
                          return <FlightIcon sx={{ color: 'white' }}/>
                        }else if(index === 3){
                          return <WarningAmberIcon sx={{ color: 'white' }}/>
                        }
                      })()
                    }
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{fontSize: '0.8rem', fontWeight: 'bold'}} primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
  );
}