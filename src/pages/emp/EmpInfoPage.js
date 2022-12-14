import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../../utils/constants/Config";
import '../../css/common.scss'
import '../../css/EmpInfo.scss'
import CoPresentIcon from '@mui/icons-material/CoPresent';
import EmpPwdModiModal from "./EmpPwdModiModal";
import ModalPwd from "../../components/Modal/ModalPwd";
import EmpPVModiModal from "./EmpPVModiModal";
import InfoSearchBar from "../../components/InfoSearchBar";
import {useDispatch, useSelector} from "react-redux";
import EmpActions from "../../redux/modules/EmpManagement/EmpActions";
import EmpInfoList from "../../components/EmpManagement/EmpInfoList";


const EmpInfoPage = () => {

  let empName = sessionStorage.getItem("empName");
  const [empData, setEmpData] = useState()
  const [empInfoDetail , setEmpInfoDetail] = useState([{}]);
  const [pwdModal, setPwdModal] = useState(false);
  const [modiModal, setModiModal] = useState(false);
  const [empNo, setEmpNo] = useState(sessionStorage.getItem("empNo"));
  const [img, setImg] = useState('');


    const getImg = async () => {
        await axios({
            url: `${process.env.REACT_APP_API_URL}/emp/images/${empNo}`,
            method: "GET",
            responseType: 'blob'
        }).then((response) => {
            setImg(response.data);
        })
            .catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        getImg()
        axios.get(API_URL + "/emp/emp-info/" + empNo)
            .then((res) => {
                setEmpInfoDetail(res.data);
            })
    }, [empNo])

    // 수정권한 확인
    const chechAuth = () => {
        if (Number(empNo) === empInfoDetail.empNo && empName === empInfoDetail.empName) {
            return (
                <div className="company-btnWrap">
                    <div className="pwd-btn">
                        <button onClick={() => {
                            setPwdModal(true)
                        }}>비밀번호 수정
                        </button>
                        {pwdModal && (
                            <ModalPwd closeModal={() => setPwdModal(!pwdModal)}>
                                <EmpPwdModiModal
                                    closeModal={() => setPwdModal(!pwdModal)}
                                />
                            </ModalPwd>
                        )}
                    </div>
                    <div className="modify-btn">
                        <button style={{padding: '7px 20px'}} onClick={() => {
                            setModiModal(true)
                        }}>사원 정보 수정
                        </button>
                        {modiModal && (
                            <ModalPwd closeModal={() => setModiModal(!modiModal)}>
                                <EmpPVModiModal
                                    closeModal={() => setModiModal(!modiModal)}
                                />
                            </ModalPwd>
                        )}
                    </div>
                </div>
            )
        }
    }

    // 리얼그리드
    const {empInfo} = useSelector((state) => state.empInfo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(EmpActions.getAllEmps())
    }, [dispatch])

    const onSubmit = (query, option) => {
        if (query === '') {
            dispatch(EmpActions.getAllEmps())
        } else {
            dispatch(EmpActions.searchEmp(option, query))
        }
    }

    return (
        <div className="common-container">
            <div className="menu-title">
                <h2><CoPresentIcon sx={{marginRight: '3px'}}/>
                    <span>사원 정보</span>
                </h2>

                <div className="emp-infoP">
                    <div className="emp-infoContent" style={{marginTop: '59px', padding:'0 20px'}}>
                        <div className="company-info">
                            <InfoSearchBar onSubmit={onSubmit}/>
                            <EmpInfoList
                                empInfo={empInfo}
                                setEmpNo={setEmpNo}
                            />
                        </div>

                    </div>

                    <div className="emp-infoContent">
                        <div className="profile">
                            {img &&
                                <img src={URL.createObjectURL(img)} alt=''/>
                            }

                            {/*<img src="/eee.jpg"/>*/}
                            <div><span>{empInfoDetail.empName}</span></div>
                        </div>

                        <div className="company-info">
                            <h2>사내정보</h2>
                            <div className="company-table">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>사원번호</th>
                                        <td>{empInfoDetail.empNo}</td>
                                    </tr>
                                    <tr>
                                        <th>부서</th>
                                        <td>{empInfoDetail.deptName}</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th>직급</th>
                                        <td>{empInfoDetail.empPosition}</td>
                                    </tr>
                                    <tr>
                                        <th>메일주소</th>
                                        <td>{empInfoDetail.empEmail}</td>
                                    </tr>
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <th>사내번호</th>
                                        <td>{empInfoDetail.empOfficePhone}</td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                        <div className="company-info">
                            <h2>기본정보</h2>
                            <div className="company-table">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>휴대전화</th>
                                        <td>{empInfoDetail.empCellPhone}</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th>생년월일</th>
                                        <td>{empInfoDetail.empBirth}</td>
                                    </tr>
                                    <tr>
                                        <th>비상연락망</th>
                                        <td>{empInfoDetail.empContactList}</td>
                                    </tr>
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <th>입사일</th>
                                        <td>{empInfoDetail.empFirstDayOfWork}</td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                            {chechAuth()}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}


export default EmpInfoPage;