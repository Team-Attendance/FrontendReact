import React from "react";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import '../../css/EmpInfo.scss';
import ConfigurationActions from "../../redux/modules/configuration/ConfigurationActions";
import AdminAuthAllList from "../configuration/AdminAuthAllList";


const AuthModal = ({closeModal}) => {
    
     
    const { empAllAuthInfo } = useSelector((state) => state.empAllAuthInfo)
    const { empAuthInfo } = useSelector((state) => state.empAuthInfo)
    const { adminAuthInfo } = useSelector((state) => state.adminAuthInfo)
   const dispatch = useDispatch();
   const [flag, setFlag] = useState(false)
   useEffect(() => {
        dispatch(ConfigurationActions.getAllAuthotityEmp())
   },[dispatch,flag])

 
// function handleUpdate (e) {
       
//     const data = {
//         'empName':empName,
//         'empNo': empInfoDetail.empNo,
//         'deptName':deptName,
//         'empPosition':empPosition,
//         'empEmail':empEmail,
//         'empCellPhone':empCellPhone,
//         'empOfficePhone':empOfficePhone,
//         'empContactList':empContactList,
//         'empFirstDayOfWork':empInfoDetail.empFirstDayOfWork,
        
//     };
//     console.log(data)
//     dispatch(EmpInfoActions.updateEmpInfoByAdmin(data))
//     window.location.href = 'http://localhost:3000/admin/report'
    
// }

    const closeButton = () => {
        closeModal();
    }
   

    return(
        
        <div className="myPage">
            <div>
                <h1 className="infoTitle">관리자권한 설정</h1>
            </div>
            <div className="infoBox">
                
                           
                         <AdminAuthAllList empAllAuthInfo = {empAllAuthInfo} changeFlag={() => setFlag(!flag)} />
                    
                        <div className="button">
                            
                            <button className="stChange" onClick={closeButton}>닫기</button>
                        </div>
                   
                    
                    
                </div>
            </div>
       
    )

}

export default AuthModal;