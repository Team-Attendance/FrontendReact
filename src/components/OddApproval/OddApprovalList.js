import { useEffect, useRef, useState } from "react"
import Modal from "../Modal/Modal"
import OddApprovalModal from "../Modal/OddApprovalModal"
import { GridView, LocalDataProvider } from 'realgrid'
import { columns, fields } from './realgrid-data'
import { updateOddApproval } from "../../api/OddApprovalAPI"
import '../../css/ApprovalList.scss'
import '../../css/RealGrid.scss'
import Paging from "../Paging"

const OddApprovalList = ({ oddApprovalInfo, changeFlag }) => {

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
        dp.setRows(oddApprovalInfo.data)
        // realGrid 설정
        gv.footer.visible = false
        gv.setEditOptions({ editable: false })
        gv.setRowIndicator({ visible: false })
        gv.setStateBar({ visible: false })
        gv.setCheckBar({ width: 50 })
        gv.setCheckableExpression("values['oddBizAdjState']='0'", true)
        gv.onCellDblClicked = (grid, clickData) => {
            if (clickData.itemIndex === undefined || clickData.cellType === "check") {
                return;
            }
            openModal(oddApprovalInfo.data[clickData.dataRow])
        }
        gv.setPaging(true, 10)
        Paging(dp.getRowCount(), 10, 5, 1, gv)

        setDataProvider(dp)
        setGridView(gv)

        return () => {
            dp.clearRows()
            gv.destroy()
            dp.destroy()
        }
    }, [oddApprovalInfo.data])

    const openModal = (data) => {
        setData(data)
        setModal(!modal)
    }


    const changeState = async (s) => {
        const rowDatas = []
        const rows = gridView.getCheckedRows()

        for (let i of rows) {
            // var data = dataProvider.getJsonRow(rows[i]);
            rowDatas.push({
                'empNo': oddApprovalInfo.data[i].empNo,
                'state': s,
                'type': oddApprovalInfo.data[i].oddBizType,
                'oddBizDate': oddApprovalInfo.data[i].oddBizDate,
                'approver': approver
            })
        }
        await updateOddApproval(rowDatas)
        changeFlag()
    }


    return (
        <div className="list-wrap">
            {modal && (
                <Modal closeModal={() => setModal(!modal)} >
                    <OddApprovalModal
                        closeModal={() => setModal(!modal)}
                        data={data}
                        auth={1}
                        changeFlag={changeFlag} />
                </Modal>
            )}
            <div className="grid-wrap">
                <div className="real-grid" style={{ width: '1130px' }}
                    ref={realgridElement}>
                </div>
            </div>
            <div className="state-button" style={{ width: '1130px' }}>
                <button className="state" onClick={() => changeState(1)}>승인</button>
                <button className="state" onClick={() => changeState(2)}>반려</button>
            </div>
            <div id='paging'
                style={{ float: 'left', height: '100%', paddingTop: '20px' }}> - </div>
        </div>
    )
}

export default OddApprovalList