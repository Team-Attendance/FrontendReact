import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ConfigurationActions from "../../redux/modules/Configuration/ConfigurationActions";
import {GridView, LocalDataProvider} from "realgrid";
import {columns, fields} from "./realgrid-data";
import SearchBar from "../SearchBar";
import {updateEmpAuth} from "../../api/ConfigurationAPI";

const AuthConfig = ({closeModal}) => {

    const dispatch = useDispatch()
    const {empAuthInfo} = useSelector((state) => state.empAuthInfo)
    const realgridElement = useRef(null)
    const [dataProvider, setDataProvider] = useState(null)
    const [flag, setFlag] = useState(false)
    const deptName = sessionStorage.getItem("deptName")

    useEffect(() => {
        dispatch(ConfigurationActions.getEmpAuth(deptName))
    }, [dispatch, flag])

    useEffect(() => {
        const container = realgridElement.current
        const dp = new LocalDataProvider(true)
        const gv = new GridView(container)

        gv.setDataSource(dp)
        dp.setFields(fields)
        gv.setColumns(columns)
        dp.setRows(empAuthInfo.data)
        // realGrid 설정
        gv.footer.visible = false
        gv.setRowIndicator({visible: false})
        gv.setStateBar({visible: false})
        gv.setCheckBar({visible: false})
        gv.setDisplayOptions({
            showEmptyMessage: true,
            emptyMessage: "조회된 데이터가 없습니다.",
            fitStyle: "evenFill",
            columnResizable: false
        })
        gv.onCellEdited = (grid, itemIndex, row, field) => {
            // 수정된 내용이 있으면 바로 적용
            grid.commit(true);
        }
        dp.restoreMode = "auto";

        setDataProvider(dp)

        return () => {
            dp.clearRows()
            gv.destroy()
            dp.destroy()
        }
    }, [empAuthInfo.data])

    const onSubmit = (query, option) => {
        if (query === '') {
            dispatch(ConfigurationActions.getEmpAuth(deptName))
        } else {
            dispatch(ConfigurationActions.searchEmpAuth(option, query, deptName))
        }
    }

    const updateAuth = async() => {
        const data = []
        let check = ''
        const updatedCells = dataProvider.getUpdatedCells()
        if(!updatedCells.length){
            return
        }
        for(let i in updatedCells){
            const row = updatedCells[i].__rowId
            if(dataProvider.getJsonRow(row).empNo === sessionStorage.getItem("empNo")){
                check = dataProvider.getJsonRow(row).empAuthority
            }
            data.push({
                'empNo': dataProvider.getJsonRow(row).empNo,
                'empAuthority': dataProvider.getJsonRow(row).empAuthority
            })
        }
        if(await updateEmpAuth(data)){
            if(check){
                sessionStorage.setItem(
                    "empAuthority", check
                )
            }
            alert('설정이 완료되었습니다.')
            setFlag(!flag)
        } else {
            alert('설정을 변경하지 못했습니다.')
        }
    }
    return (
        <div>
            <SearchBar onSubmit={onSubmit}/>
            <div className="list-wrap">
                <div className="grid-wrap">
                    <div className="real-grid"
                         ref={realgridElement}>
                    </div>
                </div>
            </div>
            <div className="config-button">
                <button onClick={updateAuth}>저장</button>
                <button onClick={closeModal}>닫기</button>
            </div>
        </div>
    )
}

export default AuthConfig