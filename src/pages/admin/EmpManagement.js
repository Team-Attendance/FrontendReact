import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar";
import EmpActions from "../../redux/modules/EmpManagement/EmpActions";
import EmpList from "../../components/EmpManagement/EmpList"

const EmpManagement = () => {

    const {empInfo} = useSelector((state) => state.empInfo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(EmpActions.getAllEmps())
        // EmpActions.getAllEmps()
    }, [dispatch])

    const onSubmit = (query, option) => {
        if(query === ''){
            dispatch(EmpActions.getAllEmps())
        } 
        else{
            dispatch(EmpActions.searchEmp(option, query))
        }

    }
    return (
        <div>
            <SearchBar onSubmit={onSubmit}/>
            <EmpList empInfo = {empInfo}/>
        </div>
    )
}

export default EmpManagement;