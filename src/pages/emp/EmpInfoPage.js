import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {API_URL} from "../../utils/constants/Config";
import '../../css/common.scss'
import '../../css/empInfo.scss'
import CoPresentIcon from '@mui/icons-material/CoPresent';


const EmpInfoPage = () => {

  let empNo = sessionStorage.getItem("empNo");
  const dispatch = useDispatch()
  const [empInfoDetail , setEmpInfoDetail] = useState([{}])


  useEffect(() => {
    axios.get(API_URL+"/emp/emp-info/"+empNo)
        .then((res)=>{
          setEmpInfoDetail(res.data);
        })
  }, [empNo])

  const dateFormatting = (millisec) =>{
    // millisec를 날짜 형식으로, YYYY. MM. DD.를 YYYY-MM-DD로 변경
    const date = new Date(millisec).toLocaleDateString().replace(/\./g, '').replace(/\s/g, '-')

    return date
  }


    return (

        <div className="common-container">
            <div className="menu-title">
                <h2><CoPresentIcon sx={{ marginRight: '3px' }}/>
                    <span>사원 정보</span>
                </h2>
                <div className="empInfo">
                  <div>
                  </div>
                  <div className="infoBox">
                    <div className="infoContent">
                      <ul className="infoUl">
                        <li className="infoLi"><div className="infoLabel">사번</div> <div className="infoInput"  readOnly>{empInfoDetail.empNo}</div></li>
                        <li className="infoLi"><div className="infoLabel">이름</div> <div className="infoInput" readOnly>{empInfoDetail.empName}</div></li>
                        <li className="infoLi"><div className="infoLabel">직급</div> <div className="infoInput" readOnly>{empInfoDetail.empPosition}</div></li>
                        <li className="infoLi"><div className="infoLabel">생년월일</div> <div className="infoInput">{empInfoDetail.empBirth}</div></li>
                        <li className="infoLi"><div className="infoLabel">메일주소</div> <div className="infoInput">{empInfoDetail.empEmail}</div></li>
                        <li className="infoLi"><div className="infoLabel">휴대폰번호</div> <div className="infoInput" >{empInfoDetail.empCellPhone}</div></li>
                        <li className="infoLi"><div className="infoLabel">사내번호</div> <div className="infoInput">{empInfoDetail.empOfficePhone}</div></li>
                        <li className="infoLi"><div className="infoLabel">비상연락</div> <div className="infoInput">{empInfoDetail.empContactList}</div></li>
                        <li className="infoLi"><div className="infoLabel">입사일자</div> <div className="infoInput">{dateFormatting(empInfoDetail.empFirstDayOfWork)}</div></li>
                      </ul>
                      {empInfoDetail.empOfficePhone &&(
                          <div className="button">
                            <button className="pwChange" >수정</button>
                            <button className="pwChange" >확인</button>
                          </div>
                      )}
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
  }


export default EmpInfoPage;