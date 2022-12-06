
import { useEffect, useRef, useState } from 'react';
import Modal from '../../components/Modal/Modal';
import '../../components/Modal/modal.scss'
import '../Modal/LeaveApprovalModal'
import LeaveApprovalModal from '../Modal/LeaveApprovalModal';
import { GridView, LocalDataProvider } from 'realgrid'
import { columns, fields } from './realgrid-data'
import { updateLeaveApproval } from '../../api/LeaveApprovalAPI';
import Paging from '../Paging';
import '../../css/ApprovalList.scss'
import '../../css/RealGrid.scss'

import 'realgrid/dist/realgrid-sky-blue.css'
import {useSelector} from "react-redux";

const LeaveApprovalList = ({ changeFlag }) => {
    const { leaveApprovalInfo } = useSelector((state) => state.leaveApprovalInfo)

    const [modal, setModal] = useState(false)
    const [data, setData] = useState({})

    const [dataProvider, setDataProvider] = useState(null)
    const [gridView, setGridView] = useState(null)
    const realgridElement = useRef(null)

    const approver = localStorage.getItem("empName")

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
        gv.setRowIndicator({ visible: false })
        gv.setEditOptions({ editable: false })
        gv.setStateBar({ visible: false })
        gv.setCheckBar({ width: 50 })
        gv.setCheckableExpression("values['leaveAdjState']='0'", true)
        gv.setDisplayOptions({
            selectionStyle: "rows",
            showEmptyMessage: true,
            emptyMessage: "조회된 데이터가 없습니다."
        })
        gv.onCellDblClicked = (grid, clickData) => {
            if (clickData.itemIndex === undefined || clickData.cellType === "check") {
                return;
            }
            setData(leaveApprovalInfo.data[clickData.dataRow])
            setModal(!modal)
        }


        setDataProvider(dp)
        setGridView(gv)
        gv.setPaging(true, 10)
        Paging(dp.getRowCount(), 10, 5, 1, gv)

        return () => {
            dp.clearRows()
            gv.destroy()
            dp.destroy()
        }
    }, [leaveApprovalInfo.data])

    // 승인, 반려
    const changeState = async (s) => {
        const rowDatas = []
        const rows = gridView.getCheckedRows()

        if(rows.length) {
            for (let i of rows) {
                // var data = dataProvider.getJsonRow(rows[i]);
                rowDatas.push({
                    'empNo': leaveApprovalInfo.data[i].empNo,
                    'state': s,
                    'startDate': leaveApprovalInfo.data[i].leaveStartDate,
                    'endDate': leaveApprovalInfo.data[i].leaveEndDate,
                    'approver': approver
                })
            }
            await updateLeaveApproval(rowDatas)
            changeFlag()
        } else {
            alert("선택된 신청이 없습니다.")
        }
    }


    return (
        <div className='list-wrap'>
            {modal && (
                <Modal closeModal={() => setModal(!modal)} >
                    <LeaveApprovalModal
                        closeModal={() => setModal(!modal)}
                        data={data}
                        auth={1}
                        changeFlag={changeFlag} />
                </Modal>
            )}
            <div className='grid-wrap'>
                <div className='real-grid' style={{ width: '1280px' }}
                    ref={realgridElement}>
                </div>
            </div>
            <div className="state-button" style={{ width: '1280px' }}>
                <button onClick={() => changeState(1)}>승인</button>
                <button onClick={() => changeState(2)}>반려</button>
            </div>
            <div id='paging'
                style={{ float: 'left', height: '100%', paddingTop: '20px' }}> - </div>

        </div>
    )
}

export default LeaveApprovalList