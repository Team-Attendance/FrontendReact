import '../../css/EmpPwdModiModal.scss';
import {useRef, useState} from "react";
import * as api from "../../api/EmpAPI";
import Swal from "sweetalert2";

const EmpPwdModiModal =({closeModal, props}) => {
    const [officeTel, setOfficeTel] = useState('');
    const [empCellPhone, setEmpCellPhone] = useState('');
    const [contactList, setContactList] = useState('');
    const offTel = useRef();
    const cellPhone= useRef();
    const ctList= useRef();
    let empNo = sessionStorage.getItem("empNo");

    // 사내
    const handlehype = (e) => {
        // 숫자가 아닌 문자 공백으로 변경
        const value = e.target.value.replace(/\D+/g,"");
        const numLength = 10;
        let result;
        result ="";
        // 자동 하이픈
        for( let i = 0; i < value.length && i < numLength; i++ ){
            switch (i){
                case 3:
                    result += "-";
                    break;
                case 6:
                    result += "-";
                    break;
                default:
                    break;
            }
            result += value[i];
        }
        offTel.current.value = result;
        setOfficeTel(e.target.value);
    }
    
    //휴대폰
    const handleEmpCellPhone = (e) => {
        // 숫자가 아닌 문자 공백으로 변경
        const value = cellPhone.current.value.replace(/\D+/g,"");
        const numLength = 11;
        let result;
        result ="";
        // 자동 하이픈
        for( let i = 0; i < value.length && i < numLength; i++ ){
            switch (i){
                case 3:
                    result += "-";
                    break;
                case 7:
                    result += "-";
                    break;
                default:
                    break;
            }
            result += value[i];
        }
        cellPhone.current.value = result;
        setEmpCellPhone(e.target.value);
    }

    // 비상연락망
    const handleCtList = (e) => {
        // 숫자가 아닌 문자 공백으로 변경
        const value = ctList.current.value.replace(/\D+/g,"");
        const numLength = 10;
        let result;
        result ="";
        // 자동 하이픈
        for( let i = 0; i < value.length && i < numLength; i++ ){
            switch (i){
                case 3:
                    result += "-";
                    break;
                case 6:
                    result += "-";
                    break;
                default:
                    break;
            }
            result += value[i];
        }
        ctList.current.value = result;
        setContactList(e.target.value);
    }

    console.log("cp"+cellPhone.current+"ot"+offTel.current+"cl"+ctList.current)
    // 정보수정
    const onChangeCheck = (e) => {
        e.preventDefault();
        if(ctList.current != null){
            const data = {
                "empNo" : empNo,
                "empCellPhone" : empCellPhone,
                "empOfficePhone" : officeTel,
                "empContactList" : contactList
            }
            api.empPVChange(data).then((res)=>{
                if(res.data){
                    Swal.fire({ title: '사원 정보가 변경되었습니다.',
                        confirmButtonText: '닫기',
                        confirmButtonColor: '#3085d6',
                        icon: 'success'
                    });
                    window.location.href="/emp/emp-info";
                }else {
                    Swal.fire({ title: '정보 변경 실패하였습니다.',
                        confirmButtonText: '닫기',
                        confirmButtonColor: '#3085d6',
                        icon: 'error'
                    });
                }
            })
        }
    }

    return(
        <div className="pwd-modify">
            <div>
                <h1 className="pwdTitle">사원 정보 수정</h1>
            </div>
            <div className="infoBox">
                <div className="infoContent">
                    <div className="infoUl">
                        <li className="infoLi">
                            <div className="infoLabel"> 사내 전화번호</div>
                            <input className="infoInput" type="tel" maxLength='12'
                                    placeholder="사내 전화번호" ref={offTel}
                                   onChange={handlehype}/>
                        </li>
                        <li className="infoLi">
                            <div className="infoLabel"> 휴대번호</div>
                            <input className="infoInput" type="tel" maxLength='13'
                                    placeholder="휴대폰번호" ref={cellPhone} onChange={handleEmpCellPhone}/>
                        </li>
                        <li className="infoLi">
                            <div className="infoLabel"> 비상연락망</div>
                            <input className="infoInput" type="tel" maxLength='13'
                                   placeholder="비상연락망" ref={ctList} onChange={handleCtList}/>
                        </li>

                        <div className="button" style={{marginTop: '15px'}}>
                            
                            <button className="handleBtn" value='닫기'  onClick={closeModal}> 취소
                            </button>
                            <button className="handleBtn" onClick={onChangeCheck}>
                                수정
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default EmpPwdModiModal;