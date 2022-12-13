import {useEffect, useRef, useState} from "react";
import '../../css/EmpReg.scss';
import React from "react";
import QRCode from 'react-qr-code';




const EmpRegistModal = ({closeModal, props}) => {

    
    return (
        <div className="empInfo">
            <div>

                <h1 className="infoTitle"><span>사원 Qr 코드</span>
                
                </h1>
            </div>
                        <QRCode value ="http://localhost:8080/emp/attendance?num=사원번호"/>
                        <div className="button">
                            <button className="handleBtn" value='취소' name='empRegistclose' onClick={closeModal}> 닫기
                            </button>
                        </div>

                    </div>
    );
}

export default EmpRegistModal;