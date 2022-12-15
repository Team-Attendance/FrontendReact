import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import EmpActions from "../../redux/modules/EmpManagement/EmpActions";
import EmpRegistModal from "./EmpRegistModal";
import ModalReg from "../../components/Modal/ModalReg"
import SearchIcon from "@mui/icons-material/Search";
import EmpSearchModal from "../../components/Modal/EmpSearchModal";
import EmpInfoActions from "../../redux/modules/EmpInfo/EmpInfoActions";


const EmpManagement = () => {

    // 사원등록 페이지 이동
    const [regiModal, setRegiModal] = useState(false)
    const [empModal, setEmpModal] = useState(true)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(EmpActions.getAllEmps())
    }, [dispatch])

    const openSearchModal = () => {
        setEmpModal(!empModal);
        dispatch(EmpInfoActions.getAllEmps())

    }

    return (
        <div>
            <span onClick={openSearchModal}> <SearchIcon onClick={openSearchModal}/>사원검색 </span>
            {empModal && (
                <EmpSearchModal
                    closeModal={() => setEmpModal(!empModal)} />
            )}
            <div align="right">
                <button onClick={() => {
                    setRegiModal(true)
                }}> 사원등록
                </button>
                {regiModal && (
                    <ModalReg closeModal={() => setRegiModal(!regiModal)}>
                        <EmpRegistModal
                            closeModal={() => setRegiModal(!regiModal)}
                        />
                    </ModalReg>
                )}
            </div>
        </div>
    )
}

export default EmpManagement;