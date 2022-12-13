
import "../../css/Configuration.css"

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ConfigurationActions from "../../redux/modules/configuration/ConfigurationActions";
import EmpAuthList from "../../components/configuration/EmpAuthList";
import AdminAuthAllList from "../../components/configuration/AdminAuthAllList";
import FillterButton from "../../components/configuration/FillterButton";
import ConfigMenu from "../../components/configuration/ConfigMenu";

export function ConfigurationPage() {
    const { empAuthInfo } =  useSelector((state) => state.empAuthInfo)
    const { adminAuthInfo } = useSelector((state) => state.adminAuthInfo)  
    const { empAllAuthInfo } = useSelector((state) => state.empAllAuthInfo)
    const { empBizInfo } = useSelector((state) => state.empBizInfo)
    const dispatch = useDispatch();
    useEffect(() => {
        
        dispatch(ConfigurationActions.updateBhTime())
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
         <ConfigMenu />

                
                
         </div>
    )
}
