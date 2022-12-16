import React from "react";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import './AuthModal.scss';
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
        <div className="AuthModal" >
             <div className="AuthModalBody" >
             <button id="modalCloseBtn" onClick={closeModal}>
                    ✖
                </button>
              <div className="AuthModal-modal">
                <div>
                    <h1 className="AuthModal-title" >관리자권한 설정</h1>
               
      
            
            <div className="AuthModal-box">    
                         <AdminAuthAllList empAllAuthInfo = {empAllAuthInfo} changeFlag={() => setFlag(!flag)} />
                         
                            <div className="AuthSetModal-button">
                         <button  onClick={closeButton}>닫기</button>
                         </div>
                 
                     </div>
                
                </div>  
               
               
               
               
                </div>
                   </div> 
                </div>
          
     
    )

}

export default AuthModal;