import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import EmpActions from "../../redux/modules/EmpManagement/EmpActions";
import EmpSearchModal from "../../components/Modal/EmpSearchModal";
import EmpInfoActions from "../../redux/modules/EmpInfo/EmpInfoActions";


const EmpManagement = () => {

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
        <div className="common-container">
            <div className="menu-title">
                <div style={{position: 'relative', top: '350px', textAlign: 'center', fontSize: '1.2rem', color: 'gray', fontWeight: 'bold'}}>

                    <p style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        사원을 검색하세요
                        <span style={{cursor:'pointer', border: '1px solid lightgray', padding: '7px 10px', backgroundColor: '#495579', color: 'white', marginLeft: '7px', fontSize: '1rem'}} onClick={openSearchModal}>사원검색</span>
                    </p>
                </div>
            </div>
            {empModal && (
                <EmpSearchModal
                    closeModal={() => setEmpModal(!empModal)}/>
            )}
        </div>
    )
}

export default EmpManagement;