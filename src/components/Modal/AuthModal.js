import React from "react";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import '../../css/EmpReg.scss';
import ConfigurationActions from "../../redux/modules/configuration/ConfigurationActions";
import AdminAuthAllList from "../configuration/AdminAuthAllList";


const AuthModal = ({closeModal}) => {
    
     
    const { empAllAuthInfo } = useSelector((state) => state.empAllAuthInfo)
    const dispatch = useDispatch();
    const [flag, setFlag] = useState(false)
    useEffect(() => {
            dispatch(ConfigurationActions.getAllAuthotityEmp())
    },[dispatch,flag])

        const closeButton = () => {
            closeModal();
        }
   

    return(
        <div className="myPage">
        <div>
            <h1 className="infoTitle">관리자권한 설정</h1>
        </div>
        <div className="infoBox">
            <div className="infoContent">
                <ul className="infoUl">
                <li className="infoLi">
                     
                
                           
                         <AdminAuthAllList empAllAuthInfo = {empAllAuthInfo} changeFlag={() => setFlag(!flag)} />
                         
                            <div className="button">
                         <button style={{marginTop:"450px"}} className="stChange" onClick={closeButton}>닫기</button>
                         </div>
                        
                   </li>
                   </ul>
                    
                   </div> 
                </div>
            </div>
       
    )

}

export default AuthModal;