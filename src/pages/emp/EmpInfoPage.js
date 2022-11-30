import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import EmpInfoActions from "../../redux/modules/EmpInfo/EmpInfoActions";
import axios from "axios";
import {API_URL} from "../../utils/constants/Config";



const EmpInfoPage = () => {

  let empNo = localStorage.getItem("empNo");
  const dispatch = useDispatch()
  const [empInfoDetail , setEmpInfoDetail] = useState([{}])
    

  useEffect(() => {
    axios.get(API_URL+"/emp/emp-info/"+empNo)
        .then((res)=>{
          
          setEmpInfoDetail(res.data);
        })
  }, [empNo])

    return (

      <div>
        {/* store 호출 전 데이터 출력 방지 */}
        {empNo > 0 &&
        <>
        <div>
          
          <h3 id='empIfo'>사원정보</h3>
        </div>
        <div>
          <div>
            <h5> 부서명 : {empInfoDetail.deptName} </h5>
          </div>

          <div>
            <h5>사원이름 :  {empInfoDetail.empName}</h5>
          </div>

          <div>
            <h5> 직급 :  {empInfoDetail.empPosition} </h5>
          </div>
          <div>
            <h5>사원사진  / QR CODE </h5>
          </div>
          <div>
            <h5>메일주소 :{empInfoDetail.empEmail}</h5>
          </div>
          <div>
            <h5>생년월일 :  {empInfoDetail.empBirth}</h5>
          </div>
          <div>
            <h5>휴대폰번호 {empInfoDetail.empCellPhone}</h5>
          </div>
          <div>
            <h5>사내번호  <input type='text' name='empOfficePhone' placeholder='사내번호' ></input></h5>
          </div>
          <div>
            <h5>비상연락  <input type='text' name='empContactList' placeholder='비상연락망' ></input></h5>
          </div>
        </div>
        <div>
          <a href="/admin/emp-management"><input type='button' value='등록' name='empRegistSubmit'  /></a>
        </div>
      </>
    }
  </div>
    )
  }


export default EmpInfoPage;