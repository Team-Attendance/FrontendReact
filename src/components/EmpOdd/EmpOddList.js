import { useEffect, useRef, useState } from "react"
import Modal from "../Modal/Modal"
import OddApprovalModal from "../Modal/OddApprovalModal"
import { GridView, LocalDataProvider } from 'realgrid'
import { columns, fields } from './realgrid-data'
import '../../css/ApprovalList.scss'
import '../../css/RealGrid.scss'
import Paging from "../Paging"
import {useSelector} from "react-redux";

const EmpOddList = ({changeFlag}) => {

    const { oddApprovalInfo } = useSelector((state) => state.oddApprovalInfo)

    const [modal, setModal] = useState(false)
    const [data, setData] = useState({})

    const [dataProvider, setDataProvider] = useState(null)
    const [gridView, setGridView] = useState(null)
    const realgridElement = useRef(null)

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
        gv.setCheckBar({ visible: false })
        gv.setDisplayOptions({
            selectionStyle: "rows",
            showEmptyMessage: true,
            emptyMessage: "조회된 데이터가 없습니다.",
            fitStyle: "evenFill"
        })
        gv.onCellDblClicked = (grid, clickData) => {
            if (clickData.itemIndex === undefined || clickData.cellType === "check") {
                return;
            }
            setData(oddApprovalInfo.data[clickData.dataRow])
            setModal(!modal)
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

    return (
        <div className="list-wrap">
            {modal && (
                <Modal closeModal={() => setModal(!modal)} >
                    <OddApprovalModal
                        closeModal={() => setModal(!modal)}
                        changeFlag={changeFlag}
                        data={data}
                        auth={0} />
                </Modal>
            )}
            <div className="grid-wrap">
                <div className="real-grid"
                    ref={realgridElement}>
                </div>
            </div>
            <div id='paging'
                style={{ float: 'left', height: '100%', paddingTop: '20px' }}> - </div>
        </div>
    )
}

export default EmpOddList