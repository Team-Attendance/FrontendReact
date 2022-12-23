import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import {AdminSide} from "./AdminSide";
import {EmpSide} from "./EmpSide";
import {useEffect, useState, useCallback} from 'react';
import Modal from '../components/Modal/Modal';
import EmpQrModal from '../components/empMain/EmpQrModal';
import axios from "axios";
import '../css/Side.scss'
import { getChartData } from "../modules/eChart";
import {Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {API_URL} from "../utils/constants/Config";
import QrModal from '../components/Modal/QrModal';

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


    const [empInfoDetail , setEmpInfoDetail] = useState([{}]);
    useEffect(()=>{
        axios.get(API_URL+"/emp/emp-info/"+empNo)
            .then((res)=>{
                setEmpInfoDetail(res.data);
            })
    },[])
    // 큐알 모달로 이동
    const [modal, setModal] = useState(false)
    const [img, setImg] =  useState('')
    const empNo = sessionStorage.getItem("empNo");
    const empName = empInfoDetail.empName;
    const position = empInfoDetail.empPosition;
    const deptName = empInfoDetail.deptName;
    const role = sessionStorage.getItem("empAuthority");
    const data = useSelector(state => state.eChart.data);
    const dispatch = useDispatch()
    const empMain = useCallback(() => dispatch(getChartData(empNo, 2022, 12)), [dispatch]);


    const adminPage = () => {
        if (role === 'ROLE_ADMIN') {
            return <AdminSide />
        }
    }
    const empPage = () => {
        if (role === 'ROLE_ADMIN' || role === 'ROLE_EMP') {
            return <EmpSide/>
        }
    }

    const getImg = async () => {
        await axios({
            url: `${process.env.REACT_APP_API_URL}/emp/images/${empNo}`,
            method: "GET",
            responseType: 'blob'
        }).then((response) => {
            setImg(response.data);
            console.log(img)
        })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getImg()
        empMain();
    }, [role])

    const token = localStorage.getItem('ACCESS_TOKEN');

    return (
        token != null ?
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
                            {img &&
                                <img width={"100%"} height={"100%"} src={URL.createObjectURL(img)} alt=''/>
                            }
                        </UserImage>
                        <Box>
                            <UserInfo style={{textAlign:'center'}}>
                                {empName} {position}<br/>
                                {deptName} 부서<br/>
                            </UserInfo>
                            <UserWork>
                                <dt>출근 시간</dt>
                                <dd>{data!==null && data.selectEmpNumTime[0]? data.selectEmpNumTime[0].EMP_GET_INTO:'-'}</dd>
                                <dt>퇴근 시간</dt>
                                <dd>{data!==null && data.selectEmpNumTime[0]? data.selectEmpNumTime[0].EMP_GET_OFF:'-'}</dd>
                            </UserWork>
                            {/* <IntoButton>출근</IntoButton> */}
                            <Button onClick={() => {
                                setModal(true)
                            }} variant="contained" color='primary'
                                    sx={{padding: '5px 60px', fontWeight: 'bold', boxShadow: 'none'}}>출근</Button>
                            {modal && (
                                <QrModal className="qr-modal" closeModal={() => setModal(!modal)}>
                                    <EmpQrModal
                                        closeModal={() => setModal(!modal)}/>
                                </QrModal>
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
        :  < Navigate to='/'/>
    );
}