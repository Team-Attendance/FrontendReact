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
    const [dataProvider, setDataProvider] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
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
        gv.setStateBar({visible: false})
        gv.setCheckBar({width: 50})
        gv.setCheckableExpression("values['oddBizAdjState']='0'", true)
        gv.setDisplayOptions({
            showEmptyMessage: true,
            emptyMessage: "조회된 데이터가 없습니다.",
            fitStyle: "evenFill",
            columnResizable: false
        })
        gv.onCellDblClicked = (grid, clickData) => {
            if (clickData.itemIndex === undefined || clickData.cellType === "check") {
                return;
            }
            setData(oddApprovalInfo.data[clickData.dataRow])
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
                    confirmButtonText: '닫기',
                    confirmButtonColor: '#3085d6',
                    icon: 'success'
                })
            } else {
                Swal.fire({
                    title: '상태 변경에 실패했습니다.',
                    confirmButtonText: '닫기',
                    confirmButtonColor: '#3085d6',
                    icon: 'error'
                })
            }
            changeFlag()
        } else {
            Swal.fire({
                title: "선택된 신청이 없습니다.",
                confirmButtonText: '닫기',
                confirmButtonColor: '#3085d6',
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

export default OddApprovalList