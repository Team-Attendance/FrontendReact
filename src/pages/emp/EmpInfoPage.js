import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmpInfoActions from "../../redux/modules/EmpInfo/EmpInfoActions";



const EmpInfoPage = () => {

  let empNo = localStorage.getItem(empNo);
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(EmpInfoActions.getInfoDetail(empNo))
      
  }, [])

    const {empInfoDetail} = useSelector((state) => state.empInfoDetail)

   
    return (

      <div>
        {/* store 호출 전 데이터 출력 방지 */}
        {empInfoDetail.data.empNo > 0 && 
        <>
        <div>
          <h3 id='empIfo'>사원정보</h3>
        </div>
        <div>
          <div>
            <h5> 부서명 <input defaultValue={empInfoDetail.data.deptName} readOnly></input></h5>
          </div>

          <div>
            <h5>사원이름  {empInfoDetail.data.empName}</h5> 
          </div>
          <div>
            <h5>비밀번호  {empInfoDetail.data.deptName}</h5>
          </div>
          <div>
            <h5> 직급  </h5>
          </div>
          <div>
            <h5>사원사진  / QR CODE </h5>
          </div>
          <div>
            <h5>메일주소  <input type='text' name='empEmail' ></input> </h5>
          </div>
          <div>
            <h5>생년월일  <input type='text' name='empBirth'></input></h5>
          </div>
          <div>
            <h5>휴대폰번호  <input type='text' name='empCellPhone' placeholder='010-0000-0000' ></input></h5>
          </div>
          <div>
            <h5>사내번호  <input type='text' name='empOfficePhone' placeholder='사원입력' readOnly></input></h5>
          </div>
          <div>
            <h5>비상연락  <input type='text' name='empContactList' placeholder='사원입력' readOnly></input></h5>
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