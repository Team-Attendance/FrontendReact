import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import SearchBar from "../../components/SearchBar";
import EmpActions from "../../redux/modules/EmpManagement/EmpActions";
import EmpList from "../../components/EmpManagement/EmpList"
import {useNavigate} from "react-router-dom";
import EmpRegistModal from "./EmpRegistModal";
import ModalReg from "../../components/Modal/ModalReg"


const EmpManagement = () => {

    // 사원등록 페이지 이동
    const [regiModal, setRegiModal] = useState(false)
    const [regiData, setRegiData] = useState({})
    const openModal = (regiData) => {
        setRegiData(regiData)
        setRegiModal(!regiModal)
    }
    const navigate = useNavigate();
    const handlerClick = () => {
        navigate("/admin/emp-registration");
    }


    const {empInfo} = useSelector((state) => state.empInfo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(EmpActions.getAllEmps())
    }, [dispatch])

    const onSubmit = (query, option) => {
        if (query === '') {
            dispatch(EmpActions.getAllEmps())
        } else {
            dispatch(EmpActions.searchEmp(option, query))
        }

    }

    return (
        <div>
            <SearchBar onSubmit={onSubmit}/>
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
            <EmpList empInfo={empInfo}/>
        </div>
    )
}

export default EmpManagement;