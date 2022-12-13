import React from "react";
import { useState, useEffect} from "react";
import { useDispatch } from "react-redux";

import ConfigurationActions from "../../redux/modules/configuration/ConfigurationActions";


const TimeModal = ({ empBizInfo, closeModal}) => {
    
    console.log(empBizInfo.data)
    

    const [bhGetInto, setBhGetInto] = useState(empBizInfo.bhGetInto);
     const handleBhGetInto = (e) => {
        setBhGetInto(e.target.value);
        
    }
    const [bhGetOff, setBhGetOff] = useState(empBizInfo.bhGetOff);
     const handleBhGetOff = (e) => {
        setBhGetOff(e.target.value);
        
    }
   const dispatch = useDispatch();
 
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

   
    
    function handleUpdate (e) {
       
        const data = {
            'bhGetInto':bhGetInto,
            'bhGetOff':bhGetOff,
            
            
            
        };
        console.log(data)
        dispatch(ConfigurationActions.updateBhTime(data))
        window.location.href = 'http://localhost:3000/admin/configuration'
        
    }



    const closeButton = () => {
        closeModal();
    }
   

    return(
        
        <div className="myPage">
            <div>
                <h1 className="infoTitle">출퇴근시간 설정</h1>
            </div>
            <div className="infoBox">
                <div className="infoContent">
                    <ul className="infoUl">
                    <li className="infoLi">
                         
                         
                         </li>
                         {empBizInfo?.data?.length > 0 &&  empBizInfo.data.map((data) => {
                                        
                                        return(
                                                
                                                <>
                                            <li className="infoLi"> <div className="infoLabel">부서이름</div><div className="infoInput">{data.deptName}</div></li>
                                            <li className="infoLi"> <div className="infoLabel">출퇴근시간설정</div>출근<input className="infoInput" type="time"  onChange={handleBhGetInto}></input> 
                                            퇴근<input className="infoInput" type="Time"  onChange={handleBhGetOff}></input></li>
                                            <li className="infoLi"><div className="infoLabel">정규출퇴근시간</div>{data.bhGetInto} ~{data.bhGetOff}<div className="infoInput" ></div></li> 
                                            </>
                                            
                                            
                                            
                                        );
                                })} 
                          
                        
                       
                    </ul>
                    
                    
                        <div className="button">
                            <button className="stChange" onClick={handleUpdate}>변경하기</button>
                            <button className="stChange" onClick={closeButton}>닫기</button>
                        </div>
                   
                    
                    
                </div>
            </div>
        </div>
    )

}

export default TimeModal;