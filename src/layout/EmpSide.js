import PersonIcon from "@mui/icons-material/Person";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import FlightIcon from "@mui/icons-material/Flight";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import * as React from "react";
import List from "@mui/material/List";
import {Link, useLocation} from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ListAltIcon from '@mui/icons-material/ListAlt';

export function EmpSide() {

    const location = useLocation();
    const empMenu = [
        { img: <PersonIcon sx={{ color: 'white' }} />, name: '사원 정보', path: '/emp/emp-info' },
        { img: <CalendarMonthIcon sx={{ color: 'white' }} />, name: '근태 현황(달력)', path: '/emp/daily-attendance-info' },
        { img: <ListAltIcon sx={{ color: 'white' }} />, name: '근태 현황(목록)', path: '/emp/monthly-attendance-info' },
        { img: <FlightIcon sx={{ color: 'white' }} />, name: '휴가 신청 내역', path: '/emp/leave-info' },
        { img: <WarningAmberIcon sx={{ color: 'white' }} />, name: '이상근태 신청 내역', path: '/emp/odd-info' }
    ]


    return (
        <List sx={{ color: 'white' }}>
            {empMenu.map((menu, index) => (
                <div className={location.pathname === menu.path? 'side-on' : ''}>
                    <Link to={menu.path} key={index}>
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {
                                        (function () {
                                            return menu.img
                                        })()
                                    }
                                </ListItemIcon>
                                <ListItemText primaryTypographyProps={{ fontSize: '0.8rem', fontWeight: 'bold' }} primary={menu.name} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </div>
            ))}
        </List>
    );
}