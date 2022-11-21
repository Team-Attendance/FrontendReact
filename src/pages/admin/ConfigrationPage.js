import { borderRadius } from "@mui/system"
import "../../css/Configuration.css"
import LeaveAdjTable from "../../table/LeaveAdjTable"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
export function ConfigrationPage() {

    return (
        <div className="wrap">
           
                <div className="vbox">
                   <div className="vbox1">
                    <div className="vbox1-1"> <p>정규 출/퇴근시간 설정</p>
                        <span>정규 출근시간 설정</span><input className="time" type="time"/> 
                        <span>정규 퇴근시간 설정</span><input className="time" type="time"/>  
                        <br/>
                        <button className="register1">설정</button>
                        </div>
                        
                   </div>
                    <div className="vbox2">
                        <div className="vbox2-1">
                            <input className="input"/> <button className="register">검색</button> <br/>
                            <span className="empinfo">사번</span>
                            <span className="empinfo">이름</span>
                            <span className="empinfo">부서</span>
                            <span className="empinfo">직급</span>
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
                            <input className="input"/> <button className="register">검색</button> <br/>
                            <span className="empinfo">사번</span>
                            <span className="empinfo">이름</span>
                            <span className="empinfo">부서</span>
                            <span className="empinfo">직급</span>
                        </div>
                                   
                    </div>

                   
                </div>
                
        </div>
    )
}
