import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OddApprovalList from "../../components/OddApproval/OddApprovalList";
import SearchBar from "../../components/SearchBar";
import OddApprovalActions from "../../redux/modules/OddApproval/OddApprovalActions";

const OddApproval = () => {

    const {oddApprovalInfo} = useSelector((state) => state.oddApprovalInfo)
    const [flag, setFlag] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(OddApprovalActions.getAllOddApproval())
    }, [dispatch, flag])

    const onSubmit = (query, option) => {

        if(query === ''){
            dispatch(OddApprovalActions.getAllOddApproval())
        } else{
            dispatch(OddApprovalActions.searchOddApproval(option, query))
        }

    }

    return (
        <div>
            <SearchBar onSubmit={onSubmit} />
            <OddApprovalList 
                oddApprovalInfo={oddApprovalInfo} 
                changeFlag={() => setFlag(!flag)}/>
        </div>
    )
}

export default OddApproval