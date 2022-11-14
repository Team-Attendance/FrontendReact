import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/EmpManagement/SearchBar";
import EmpActions from "../../redux/modules/EmpManagement/EmpActions";
import EmpList from "../../components/EmpManagement/EmpList"

const EmpManagement = () => {

    const {empInfo} = useSelector((state) => state.empInfo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(EmpActions.getAllEmps())
    }, [])

    const onSubmit = async (query, target, option) => {

        if(query === ''){
            dispatch(EmpActions.getAllEmps())
        } else{
            if(option === 'name'){
                dispatch(EmpActions.searchEmpByName(query, target))
            } else if(option === 'empno'){
                dispatch(EmpActions.searchEmpByNum(query, target))
            }
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