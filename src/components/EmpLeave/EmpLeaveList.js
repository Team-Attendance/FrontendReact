import React, {useEffect, useRef, useState} from 'react';
import '../../components/Modal/modal.scss'
import '../Modal/LeaveApprovalModal'
import LeaveApprovalModal from '../Modal/LeaveApprovalModal';
import {GridView, LocalDataProvider} from 'realgrid'
import {columns, fields} from './realgrid-data'
import Paging from "../Paging"
import '../../css/ApprovalList.scss'
import '../../css/RealGrid.scss'
import 'realgrid/dist/realgrid-style.css'

import {useSelector} from "react-redux";

const EmpLeaveList = ({changeFlag}) => {
    const {leaveApprovalInfo} = useSelector((state) => state.leaveApprovalInfo)

    const [modal, setModal] = useState(false)
    const [data, setData] = useState({})
    const [gridView, setGridView] = useState(null)
    const [dataProvider, setDataProvider] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)

    const realgridElement = useRef(null)

    useEffect(() => {
        const container = realgridElement.current
        const dp = new LocalDataProvider(true)
        const gv = new GridView(container)

        gv.setDataSource(dp)
        dp.setFields(fields)
        gv.setColumns(columns)
        dp.setRows(leaveApprovalInfo.data)
        // realGrid 설정
        gv.footer.visible = false
        gv.setEditOptions({editable: false})
        gv.setStateBar({visible: false})
        gv.setCheckBar({visible: false})
        gv.setDisplayOptions({
            showEmptyMessage: true,
            emptyMessage: "조회된 데이터가 없습니다.",
            fitStyle: "evenFill",
            columnResizable: false,
            syncGridHeight: "always"
        })
        gv.onCellDblClicked = (grid, clickData) => {
            if (clickData.itemIndex === undefined || clickData.cellType === "check") {
                return;
            }
            setData(leaveApprovalInfo.data[clickData.dataRow])
            setModal(!modal)
        }
        gv.setPaging(true, 10)

        setGridView(gv)
        setDataProvider(dp)

        return () => {
            dp.clearRows()
            gv.destroy()
            dp.destroy()
        }
    }, [leaveApprovalInfo.data])

    return (
        <div className='list-wrap'>
            {modal && (
                <LeaveApprovalModal
                    closeModal={() => setModal(!modal)}
                    changeFlag={changeFlag}
                    data={data}
                    auth={0}/>
            )}
            <div className='grid-wrap'>
                <div className='real-grid'
                     ref={realgridElement}>
                </div>
            </div>
            {dataProvider && gridView &&
                <Paging
                    totalData={dataProvider.getRowCount()}
                    dataPerPage={10}
                    pageCount={5}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    gridView={gridView} />
            }


        </div>
    )
}

export default EmpLeaveList