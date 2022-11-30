import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar";
import EmpActions from "../../redux/modules/EmpManagement/EmpActions";
import EmpList from "../../components/EmpManagement/EmpList"
import EmpRegistration from "./EmpRegistration";
import { useNavigate } from "react-router-dom";



const EmpManagement = () => {

    // 사원등록 페이지 이동
    const navigate = useNavigate();
    const handlerClick = () => {
        navigate("/admin/emp-registration");
    }

    const { empInfo } = useSelector((state) => state.empInfo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(EmpActions.getAllEmps())
    }, [dispatch])

    const onSubmit = (query, option) => {
        if (query === '') {
            dispatch(EmpActions.getAllEmps())
        }
        else {
            dispatch(EmpActions.searchEmp(option, query))
        }

    }

    return (
        <div>
            <SearchBar onSubmit={onSubmit} />
            <div align="right">
                <button onClick={handlerClick}> 사원등록</button>
            </div>
            <EmpList empInfo={empInfo} />
        </div>
    )
}

export default EmpManagement;