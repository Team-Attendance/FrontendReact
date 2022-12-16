import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from "@mui/icons-material/Settings";
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ConfigurationActions from '../../redux/modules/configuration/ConfigurationActions';
import BizHourModal from '../Modal/BizHourModal';
import TimeSetModal from '../Modal/TimeSetModal';
import AuthModal from '../Modal/AuthModal';
import Button from '@mui/material/Button';
import Modal from '../Modal/Modal';
import AuthModalSet from '../Modal/AuthModalSet';

export default function ConfigMenu() {

    const [timeModal, setTimeModal] = useState(false)
    const [authModal, setAuthModal] = useState(false)
    const {empBizInfo} = useSelector((state) => state.empBizInfo)
    const {empAllAuthInfo} = useSelector((state) => state.empAllAuthInfo)

    const [anchorEl, setAnchorEl] = React.useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dispatch = useDispatch();
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
    const onSubmit = () => {
        setTimeModal(true);
        dispatch(ConfigurationActions.getEmpBiz)

    }
    const onSubmitt = () => {
        setAuthModal(true);
        dispatch(ConfigurationActions.getAllAuthotityEmp)

    }
    useEffect(() => {
        
        dispatch(ConfigurationActions.getResultEmp())
        dispatch(ConfigurationActions.getAuthEmp())
        dispatch(ConfigurationActions.getAllAuthotityEmp())
        dispatch(ConfigurationActions.getEmpBiz())
        // dispatch(ConfigurationActions.getAllAuthotityEmp())
    }, [ ])
    const role = sessionStorage.getItem("empAuthority");

    return (
        <div>
            {/* 환경설정 버튼 권한 */}
            {role === 'ROLE_ADMIN' ?
                <Button
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <SettingsIcon/>
                </Button>
                : null}
            {/* </SettingsIcon> */}
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={onSubmit}>출퇴근시간 설정</MenuItem>
                {timeModal && (
                    <BizHourModal closeModal={() => setTimeModal(!timeModal)}>
                        <TimeSetModal
                            empBizInfo={empBizInfo}
                            closeModal={() => setTimeModal(!timeModal)}
                        />
                    </BizHourModal>
                )}
                <MenuItem onClick={onSubmitt}>관리자권한 설정</MenuItem>
                {authModal && (
                    <Modal closeModal={() => setAuthModal(!authModal)}>
                        <AuthModal
                            empAllAuthInfo={empAllAuthInfo}
                            closeModal={() => setAuthModal(!authModal)}
                        />
                    </Modal>
                )}
            </Menu>
        </div>
    );
}