import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';

export function Header() {
  return (
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} elevation={0}>
        <Toolbar sx={{ backgroundColor: '#00AAFF' }}>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: '1px' }}>
            <Link to='emp/main'>
              Amateur10
            </Link>
          </Typography>

        <Box sx={{ margin: '0 10px' }}>
          192.168.40.4
        </Box>

        {/* 아이콘 버튼 + 알럿 */}
        <IconButton color='inherit'>
          <Badge badgeContent={13} color="error">
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>

        {/* 로그아웃 버튼 */}
        <IconButton color='inherit'>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}