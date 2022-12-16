import React from "react";
import { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import './TimeModal.scss';
import ConfigurationActions from "../../redux/modules/configuration/ConfigurationActions";


const TimeSetModal = ({ empBizInfo, closeModal}) => {
    
    useEffect(() => {
        dispatch(ConfigurationActions.getEmpBiz())
    },[])
   


    const [bhGetInto, setBhGetInto] = useState(empBizInfo.bhGetInto);
        const handleBhGetInto = (e) => {
        setBhGetInto(e.target.value);
          }
    const [bhGetOff, setBhGetOff] = useState(empBizInfo.bhGetOff);
        const handleBhGetOff = (e) => {
        setBhGetOff(e.target.value);       
        }    
        const dispatch = useDispatch();
     
        
    



      
    function handleUpdate (e) {         
        const data = {
            'bhGetInto':bhGetInto,
            'bhGetOff':bhGetOff,                             
        };
        
        dispatch(ConfigurationActions.updateBhTime(data))
        
        // setUpdateHandle(dispatch(ConfigurationActions.getEmpBiz()));
        alert("출퇴근 시간이 변경되었습니다")
        closeModal() ;
    }
    const closeButton = () => {
        closeModal();
    }
    return(
        <div className="TimeModal">
        <div className="TimeModalBody">
        <button id="modalCloseBtn" onClick={closeModal}>
                    ✖
                </button>
        <div className="TimeModal-modal"> 
            <div>
                <h1 className="TimeModal-title">출퇴근시간 설정</h1>
            </div>
            <div className="TimeModal-box ">
                <div className="TimeModal-content" >
                    <ul className="TimeModal-ul" >
                   
                         {empBizInfo?.data?.length > 0 &&  empBizInfo.data.map((data) => {
                                        
                                        return(
                                                
                                                <>
                                            <li className="TimeModal-li"> <div className="TimeModal-label">부서이름</div><div className="infoInput">{data.deptName}</div></li>
                                            <li className="TimeModal-li"> <div className="TimeModal-label">출퇴근시간설정</div>출근<input className="infoInput" type="time"  onChange={handleBhGetInto}></input> 
                                            퇴근<input className="infoInput" type="Time"  onChange={handleBhGetOff}></input></li>
                                            <li className="TimeModal-li"><div className="TimeModal-label">정규출퇴근시간</div>{data.bhGetInto} ~{data.bhGetOff}<div className="infoInput" ></div></li> 
                                            </>
                                            
                                            
                                            
                                        );
                                })} 
                          
                        
                       
                    </ul>
                    
                    
                        <div className="TimeModal-button">
                            <button  onClick={handleUpdate}>변경하기</button>
                            <button  onClick={closeButton}>닫기</button>
                        </div>
                   
                    
                    
                </div>
            </div>
            </div>  
        </div>
        </div>
    )

}

export default TimeSetModal;