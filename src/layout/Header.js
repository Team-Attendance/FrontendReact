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

    const logout = () => {
      sessionStorage.clear();
        window.location.href = "/";
    };

    // 아이피주소 호출
    // const [ ip , setIp ] = useState();

    // useEffect( () => {
    //     axios.get('https://api.ipify.org?format=json/')
    //         .then((res) => {
    //             setIp(res.data)
    //             console.log(res);
    //         })
    // },[])




  return (
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} elevation={0}>
        <Toolbar sx={{ backgroundColor: '#00AAFF' }}>
          <Link to='emp/main'>
          <Typography variant="h6" noWrap component="div"
             sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: '1px' }}>
            Amateur10
          </Typography>
          </Link>

          <Box sx={{ margin: '0 10px' }}>

          </Box>

           {/* 아이콘 버튼 + 알럿 */}
           <IconButton color='inherit'>
            <Badge badgeContent={13} color="error">
              <NotificationsNoneIcon />
            </Badge>
           </IconButton>

           {/* 로그아웃 버튼 */}
           <IconButton color='inherit'>
            <LogoutIcon onClick={()=>{logout();}}/>
           </IconButton>
        </Toolbar>
      </AppBar>
  );
}