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

export function EmpSide({ sideRef }) {

    const choiceSide = (number) => {
        sideRef.current.forEach((el) => {
            if (el != null) el.className = "";
        })
        if (sideRef.current.length > 0) {
            sideRef.current[number].className = "side-on";
        }
    }
    const location = useLocation()
    const empMenu = [
        { img: <PersonIcon sx={{ color: 'white' }} />, name: '나의 정보', path: '/emp/emp-info' },
        { img: <EqualizerIcon sx={{ color: 'white' }} />, name: '근태 현황(일)', path: '/emp/daily-attendance-info' },
        { img: <EqualizerIcon sx={{ color: 'white' }} />, name: '근태 현황(월)', path: '/emp/monthly-attendance-info' },
        { img: <FlightIcon sx={{ color: 'white' }} />, name: '휴가 현황', path: '/emp/leave-info' },
        { img: <WarningAmberIcon sx={{ color: 'white' }} />, name: '이상근태 현황', path: '/emp/odd-info' }
    ]

    return (
        <List sx={{ color: 'white' }}>
            {empMenu.map((menu, index) => (
                <div className={location.pathname === menu.path? 'side-on':''}>
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