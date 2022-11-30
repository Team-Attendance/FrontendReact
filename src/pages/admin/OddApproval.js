import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OddApprovalList from "../../components/OddApproval/OddApprovalList";
import OddStatus from "../../components/OddApproval/OddStatus";
import SearchBar from "../../components/SearchBar";
import CountApprovalActions from "../../redux/modules/CountApproval/CountApprovalActions";
import OddApprovalActions from "../../redux/modules/OddApproval/OddApprovalActions";

const OddApproval = () => {

    const { oddApprovalInfo } = useSelector((state) => state.oddApprovalInfo)
    const [flag, setFlag] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(OddApprovalActions.getAllOddApproval())
        dispatch(CountApprovalActions.countOddApproval(new Date().getFullYear()))
    }, [dispatch, flag])

    const onSubmit = (query, option) => {

        if (query === '') {
            dispatch(OddApprovalActions.getAllOddApproval())
        } else {
            dispatch(OddApprovalActions.searchOddApproval(option, query))
        }

    }

    return (
        <div>
            <OddStatus />
            <SearchBar onSubmit={onSubmit} />
            <OddApprovalList
                oddApprovalInfo={oddApprovalInfo}
                changeFlag={() => setFlag(!flag)} />
        </div>
    )
}

export default OddApproval