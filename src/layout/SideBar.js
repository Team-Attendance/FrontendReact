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
import {AdminSide} from "./AdminSide";
import {EmpSide} from "./EmpSide";
import { useState } from 'react';
import Modal from '../components/Modal/Modal';
import EmpQrModal from '../components/empMain/EmpQrModal';



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

  // 큐알 모달로 이동
  const [modal, setModal] = useState(false)

  const empName = localStorage.getItem("empName");
  const position = localStorage.getItem("empPosition")
  const deptName = localStorage.getItem("deptName");
  const role = localStorage.getItem("empAuthority");

  const adminPage = ()=>{
    if (role == 'ROLE_ADMIN') {
        return <AdminSide />
    }
  }
  const empPage = ()=>{
    if (role == 'ROLE_ADMIN' || role == 'ROLE_EMP') {
      return <EmpSide />
    }
  }

  const onSubmit = () => {
    setModal(true);
  }

  return(
      <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},

          }}
      >

        <SideWrap className="scroll-hidden">
          <List>

            <Box style={{margin: '0 15px', padding: '15px', textAlign: 'center', fontWeight: ''}}>
              <UserImage>
                <img width={"100%"} height={"100%"} src='/user.jpg' alt=''/>
              </UserImage>
              <Box>
                <UserInfo>
                  {empName} {position}<br/>
                  {deptName} 부서<br/>
                </UserInfo>
                <UserWork>
                  <dt>출근 시간</dt>
                  <dd>08 : 00</dd>
                  <dt>퇴근 시간</dt>
                  <dd>-</dd>
                </UserWork>
                {/* <IntoButton>출근</IntoButton> */}
                <Button onClick={ () => { setModal(true)}} variant="contained" color='primary' sx={{padding: '5px 60px', fontWeight: 'bold', boxShadow: 'none'}}>출근</Button>
                {modal && (
                <Modal closeModal={() => setModal(!modal)} >
                    <EmpQrModal
                        closeModal={() => setModal(!modal)} />
                </Modal>
            )}

              </Box>
            </Box>
          </List>
          <Divider/>
          {adminPage()}
          <Divider/>
          {empPage()}
          <Divider/>
        </SideWrap>
      </Drawer>
  );
}