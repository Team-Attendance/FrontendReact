import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import EmpActions from "../../redux/modules/EmpManagement/EmpActions";
import SearchIcon from "@mui/icons-material/Search";
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
                <h2 align={"right"}><span onClick={openSearchModal}> <SearchIcon/>사원검색 </span>
                </h2>
            </div>
            {empModal && (
                <EmpSearchModal
                    closeModal={() => setEmpModal(!empModal)} />
            )}
        </div>
    )
}

export default EmpManagement;