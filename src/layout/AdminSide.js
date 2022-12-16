import {Link, useLocation} from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import * as React from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

export function AdminSide() {

    const location = useLocation();
    const adminMenu = [
        { img: <PeopleAltIcon sx={{ color: 'white' }} />, name: '사원 관리', path: '/admin/report' },
        { img: <EventAvailableIcon sx={{ color: 'white' }} />, name: '휴가 승인', path: '/admin/approval/leave' },
        { img: <WarningAmberIcon sx={{ color: 'white' }} />, name: '이상근태', path: '/admin/approval/odd' },
    ]

    return (

        <List sx={{ color: 'white' }}>
            {adminMenu.map((menu, index) => (
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