import React from "react";
import { useState} from "react";
import { useDispatch } from "react-redux";
import EmpActions from "../../redux/modules/EmpManagement/EmpActions";

import '../../css/empInfo.scss';
import SearchBar from "../SearchBar";
import EmpSearchList from "../report/EmpSearchList";


const EmpInfoUpdateModal = ({ empInfo, closeModal}) => {
    
   
    
    const dispatch = useDispatch();
    const onSubmit = (query, option) => {
        if (query === '') {
            dispatch(EmpActions.getAllEmps())
        }
        else {
            dispatch(EmpActions.searchEmp(option, query))
        }

    }

    

    const closeButton = () => {
        closeModal();
    }

    
    

    return(
        <div className="myPage">
            <div>
                <h1 className="infoTitle">사원 검색</h1>
            </div>
            <div className="infoBox">
                <div className="infoContent">
                    <ul className="infoUl">
                   
                    <SearchBar onSubmit={onSubmit} />
                    
                     
                     <EmpSearchList empInfo={empInfo} />
                     
                    </ul>
                    
                    
                        <div className="button">
                          
                            <button className="stChange" onClick={closeButton}>닫기</button>
                        </div>
                   
                    
                    
                </div>
            </div>
        </div>
    )
}

export default EmpInfoUpdateModal;