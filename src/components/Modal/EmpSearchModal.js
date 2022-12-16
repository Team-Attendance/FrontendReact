import React, {useState} from "react";
import {useDispatch} from "react-redux";
import EmpActions from "../../redux/modules/EmpManagement/EmpActions";

import './EmpSearchModal.scss';
import SearchBar from "../SearchBar";
import EmpList from "../EmpManagement/EmpList";
import ModalReg from "./ModalReg";
import EmpRegistModal from "../../pages/admin/EmpRegistModal";


const EmpSearchModal = ({closeModal}) => {

    const [regiModal, setRegiModal] = useState(false)
    const dispatch = useDispatch();
    const onSubmit = (query, option) => {
        if (query === '') {
            dispatch(EmpActions.getAllEmps())
        } else {
            dispatch(EmpActions.searchEmp(option, query))
        }
    }


    return (
        <div className="searchEmpModal" onClick={closeModal}>
            <div className="modalBody" onClick={(e) => e.stopPropagation()} >
                <button id="modalCloseBtn" onClick={closeModal}>
                    ✖
                </button>
                <div className="search-modal">
                    {regiModal && (
                        <ModalReg closeModal={() => setRegiModal(!regiModal)}>
                            <EmpRegistModal
                                closeModal={() => setRegiModal(!regiModal)}
                            />
                        </ModalReg>
                    )}
                    <div>
                        <h1 className="search-title">사원 검색</h1>
                    </div>
                    <div className="search-box">
                        <div className="search-content">
                                <SearchBar onSubmit={onSubmit}/>
                                <EmpList closeModal={closeModal}/>
                            <div className="search-button">
                                <button onClick={() => {
                                    setRegiModal(true)
                                }}> 사원등록
                                </button>
                                <button onClick={closeModal}>닫기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmpSearchModal;