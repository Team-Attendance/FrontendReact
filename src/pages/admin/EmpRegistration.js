import {  useState } from "react";
import { postEmpRegist } from "../../api/EmpAPI";


const EmpRegistration =()=>{
 
  const [deptName, setDeptName] = useState();
  const handleDeptName = (e) =>{
    setDeptName(e.target.value);
  }

  const [empName, setEmpName] = useState();
  const handleEmpName = (e) =>{
    setEmpName(e.target.value);
  }
  
  const [empPwd, setEmpPwd] = useState();
  const handleEmpPwd = (e) =>{
    setEmpPwd(e.target.value);
  }

  const [empPosition, setEmpPosition] = useState();
  const handleEmpPosition = (e) =>{
    setEmpPosition(e.target.value);
  }

  const [empEmail, setEmpEmail] = useState();
  const handleEmpEmail = (e) =>{
    setEmpEmail(e.target.value);
  }

  const [empBirth, setEmpBirth] = useState();
  const handleEmpBirth = (e) =>{
    setEmpBirth(e.target.value);
  }
  
  const [empCellPhone, setEmpCellPhone] = useState();
  const handleEmpCellPhone = (e) =>{
    setEmpCellPhone(e.target.value);
  }


 function handleRegist(){
    const data = {
      "deptName" : deptName,
      "empName" : empName,
      "empPwd" : empPwd,
      "empPosition" : empPosition,
      "empEmail" : empEmail,
      "empBirth" : empBirth,
      "empCellPhone" : empCellPhone
    };
    postEmpRegist(data);
  
  }

  return(
    <div>
       <div>
         <h3 id='empRegist'>사원정보 등록</h3>
       </div>
       <div>
         <div>
           <h5> 부서명   
             <select name='deptName' onChange={handleDeptName}  >
               <option value={'none'}>부서</option>
               <option value={'인사'}>인사</option>
               <option value={'인사'}>영업</option>
               <option value={'회계'}>회계</option>
               <option value={'경영지원'}>경영지원</option>
               <option value={'개발'}>개발</option>
             </select>
           </h5>
         </div>

         <div>
           <h5>사원이름  <input type='text' name='empName' placeholder='사원이름' onChange={handleEmpName}></input></h5> 
         </div>
         <div>
           <h5>비밀번호  <input type='password' name='empPwd' placeholder='비밀번호' onChange={handleEmpPwd}></input> </h5>
         </div>
         <div>
           <h5> 직급  
             <select nane='empPosition' onChange={handleEmpPosition}>
               <option value={'none'}>직급</option>
               <option value={'수석연구원'}>수석연구원</option>
               <option value={'책임연구원'}>책임연구원</option>
               <option value={'선임연구원'}>선임연구원</option>
               <option value={'연구원'}>연구원</option>
               <option value={'연구보조원'}>연구보조원</option>
             </select>
           </h5>
         </div>
         <div>
           <h5>사원사진  / QR CODE </h5>
         </div>
         <div>
           <h5>메일주소  <input type='text' name='empEmail' placeholder='메일주소' onChange={handleEmpEmail}></input> </h5>
         </div>
         <div>
           <h5>생년월일  <input type='text' name='empBirth' placeholder='YYYY-MM-DD' onChange={handleEmpBirth}></input></h5>
         </div>
         <div>
           <h5>휴대폰번호  <input type='text' name='empCellPhone' placeholder='010-0000-0000' onChange={handleEmpCellPhone} ></input></h5>
         </div>
         <div>
           <h5>사내번호  <input type='text' name='empOfficePhone' placeholder='사원입력' readOnly></input></h5>
         </div>
         <div>
           <h5>비상연락  <input type='text' name='empContactList' placeholder='사원입력' readOnly></input></h5>
         </div>
       </div>
       <div>
         <a href="/admin/emp-management"><input type='button' value='등록' name='empRegistSubmit' onClick={handleRegist} /></a>
       </div>
     
   </div>
   );
}

export default EmpRegistration;
