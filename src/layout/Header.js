import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import {Link, Navigate} from 'react-router-dom';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SettingsIcon from "@mui/icons-material/Settings";
import {useState} from "react";
import ConfigurationModal from "../components/Modal/ConfigurationModal";

export function Header() {

    const [configModal, setConfigModal] = useState(false)
    const role = sessionStorage.getItem("empAuthority");
    const logout = () => {
      sessionStorage.clear();
    localStorage.clear();
    window.location.href = "/";
    };

    const token = localStorage.getItem('ACCESS_TOKEN');
    return (
      token != null ?
          <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} elevation={0}>
            <Toolbar sx={{ backgroundColor: '#00AAFF' }}>
              <Link to='emp/main'>
              <Typography variant="h6" noWrap component="div"
                 sx={{ flexGrow: 1, fontWeight: 'bold', fontSize:'1.7rem',letterSpacing: '1px', marginLeft: '20px'}}>
                Amateur10
              </Typography>
              </Link>

              <Box sx={{ margin: '0 10px', width: '100%' }}>

              </Box>
                {/*관리자 */}
                { role === 'ROLE_ADMIN' ?
                    <div style={{display:'flex', alignItems:'center'}}>
                        <Link to='admin/main'>
                            <Typography variant="h6" noWrap component="div"
                                        sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: '1px' }}>
                               <div style={{display: "flex", alignItems:"center"}}>
                                    <ManageAccountsIcon/>ADMIN
                               </div>
                            </Typography>
                        </Link>
                        {/* 환경설정 버튼 */}
                        <div style={{display:'flex', alignItems:'center', margin: '0 15px'}}>
                            <SettingsIcon sx={{cursor:'pointer'}} onClick={()=>{setConfigModal((!configModal))}}/>
                            {configModal && (
                                <ConfigurationModal closeModal={()=>{setConfigModal(!configModal)}}
                                    />
                            )}
                        </div>
                    </div>
                    : null }

               {/* 로그아웃 버튼 */}
               <IconButton color='inherit'>
                <LogoutIcon onClick={()=>{logout();}}/>
               </IconButton>
            </Toolbar>
          </AppBar>
        :  < Navigate to='/'/>
  );
}