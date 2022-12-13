import {useEffect, useRef, useState} from "react"
import OddApprovalModal from "../Modal/OddApprovalModal"
import {GridView, LocalDataProvider} from 'realgrid'
import {columns, fields} from './realgrid-data'
import {updateOddApproval} from "../../api/OddApprovalAPI"
import Paging from "../Paging"
import '../../css/ApprovalList.scss'
import '../../css/RealGrid.scss'
import {useSelector} from "react-redux";
import Swal from "sweetalert2";

const OddApprovalList = ({changeFlag}) => {

    const {oddApprovalInfo} = useSelector((state) => state.oddApprovalInfo)

    const [modal, setModal] = useState(false)
    const [data, setData] = useState({})

    const [gridView, setGridView] = useState(null)
    const realgridElement = useRef(null)

    const approver = sessionStorage.getItem("empName")

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
        gv.setEditOptions({editable: false})
        gv.setRowIndicator({visible: false})
        gv.setStateBar({visible: false})
        gv.setCheckBar({width: 50})
        gv.setCheckableExpression("values['oddBizAdjState']='0'", true)
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

        setGridView(gv)

        return () => {
            dp.clearRows()
            gv.destroy()
            dp.destroy()
        }
    }, [oddApprovalInfo.data])

    const changeState = async (s) => {
        const rowDatas = []
        const rows = gridView.getCheckedRows()

        if (rows.length) {
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
            if (await updateOddApproval(rowDatas)) {
                Swal.fire({
                    title: (s === 1 ? '승인되었습니다.' : '반려되었습니다.'),
                    icon: 'success'
                })
            } else {
                Swal.fire({
                    title: '상태 변경에 실패했습니다.',
                    icon: 'error'
                })
            }
            changeFlag()
        } else {
            Swal.fire({
                title: "선택된 신청이 없습니다.",
                icon: 'warning'
            })
        }
    }


    return (
        <div className="list-wrap">
            {modal && (
                <OddApprovalModal
                    closeModal={() => setModal(!modal)}
                    data={data}
                    auth={1}
                    changeFlag={changeFlag}/>
            )}
            <div className="grid-wrap">
                <div className="real-grid"
                     ref={realgridElement}>
                </div>
            </div>
            <div className="state-button">
                <button onClick={() => changeState(1)}>승인</button>
                <button onClick={() => changeState(2)}>반려</button>
            </div>
            <div id='paging'
                 style={{float: 'left', height: '100%', paddingTop: '20px'}}> -
            </div>
        </div>
    )
}

export default OddApprovalList