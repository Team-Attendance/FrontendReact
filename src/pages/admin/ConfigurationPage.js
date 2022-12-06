
import "../../css/Configuration.css"

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ConfigurationActions from "../../redux/modules/configuration/ConfigurationActions";
import EmpAuthList from "../../components/configuration/EmpAuthList";
import AdminAuthList from "../../components/configuration/AdminAuthList";


export function ConfigurationPage() {
    const { empAuthInfo } =  useSelector((state) => state.empAuthInfo)
    const { adminAuthInfo } = useSelector((state) => state.adminAuthInfo)
    const { empBizInfo } = useSelector((state) => state.empBizInfo)
    const { empAllAuthInfo } = useSelector((state) => state.empAllAuthInfo)
    const dispatch = useDispatch();
    useEffect(() => {
        
        dispatch(ConfigurationActions.getAllAuthotityEmp())
        dispatch(ConfigurationActions.getResultEmp())
        dispatch(ConfigurationActions.getAuthEmp())
       dispatch(ConfigurationActions.getEmpBiz())
    }, [dispatch])
   
    // const startForm = document.getElementById('start');
    // const start = startForm.value;
    // console.log({start})

    
    
    return (
        <div className="wrapp">
          

                <div className="vbox">
                   <div className="vbox1">
                    <div className="vbox1-1"> 
                        <form>
                            <span>정규 출근시간 설정</span><input className="time" value="출근" type="time" id="start"/> 
                            <span>정규 퇴근시간 설정</span><input className="time" value="퇴근" type="time" id="end"/>  
                            <br/>
                        
                        </form>
                        <span>기존 정규 출퇴근 시간( {empBizInfo?.data?.length > 0 &&  empBizInfo.data.map((data) => {
                                        
                                    return(
                                        <tr>
                                        
                                        <td>{data.bhGetInto} ~</td>
                                        <td>{data.bhGetOff}</td>
                                        
                                        </tr>
                                    );
                            })} )</span>
                            <br/>
                        <button className="register1">설정</button>
                     
                        </div>
                        
                   </div>
                    <div className="vbox2">
                        <div className="vbox2-1">
                            <input className="input" placeholder="이름을 입력해 주세요"/> <button className="register" >검색</button> <br/> 
                           
                               
                               <div className="authresult">
                                <EmpAuthList empAllAuthInfo = {empAllAuthInfo}/>
                                
                             </div>
                        </div>
                            <div className="vbox2-2">
                                <div className="vbox3-1">
                                    <KeyboardDoubleArrowLeftIcon sx={{width:"30px", height:"30px"}}/> 
                                </div>
                                <div className="vbox3-2">
                                    <KeyboardDoubleArrowRightIcon sx={{width:"30px", height:"30px"}}/> 
                                </div>
                            <button className="register2">등록</button>
                            </div>
                        <div className="vbox2-1">
                            <input className="input" placeholder="이름을 입력해 주세요"/> <button className="register">검색</button> <br/>
                           
                            
                            <div className="authresult">
                            <AdminAuthList adminAuthInfo = {adminAuthInfo}/>
                       

                            </div>          
                        </div>
                            
                    </div>

                   
                </div>
                
         </div>
    )
}
