import { Header } from './Header';
import { SideBar } from './SideBar';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';

const MainLayout = () => {
    return (
        <Box component="main" sx={{ flexGrow: 1, pt: 8, ml: 30 }}>
            <Header />
            <SideBar />
            <Outlet />
        </Box>
    );
};

export default MainLayout;