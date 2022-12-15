import React, { useEffect } from "react";
import '../../css/QrCode.scss';
import QRCode from 'react-qr-code';
import EmpInfoActions from "../../redux/modules/EmpInfo/EmpInfoActions";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";



const EmpQrModal = ({ closeModal, props }) => {


    // 로그인시 회원정보 저장 store EmpInfoPage에서 사용
    let empNo = sessionStorage.getItem('empNo');
    const dispatch = useDispatch()
    var links = 'http://localhost:8080/emp/attendance?empNo='+ empNo;


    useEffect(() => {
        dispatch(EmpInfoActions.getEmpinfo(empNo))
    }, []);


    return (
        <div className="empInfo">
            <div>
                <h1 className="infoTitle"><span>사원 Qr 코드</span>
                </h1>
            </div>
            <div style={{marginTop:'80px'}}>
            <QRCode value={links} />
            </div>

            <div className="button">
                <Button variant="contained" size ="small"  style={{marginTop:'70px'}} className="handleBtn" value='취소' name='empRegistclose' onClick={closeModal}> 닫기
                </Button>
            </div>

        </div>
    );
}

export default EmpQrModal;