import {useEffect, useRef} from "react"
import {GridView, LocalDataProvider} from 'realgrid'
import {columns, fields} from './realgrid-data'
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import '../../css/RealGrid.scss'
import '../../css/ApprovalList.scss'

const EmpList = ({closeModal}) => {
    const {empInfo} = useSelector((state) => state.empInfo)
    const realgridElement = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        const container = realgridElement.current
        const dp = new LocalDataProvider(true)
        const gv = new GridView(container)

        gv.setDataSource(dp)
        dp.setFields(fields)
        gv.setColumns(columns)
        dp.setRows(empInfo.data)
        // realGrid 설정
        gv.footer.visible = false
        gv.setEditOptions({editable: false})
        gv.setRowIndicator({visible: false})
        gv.setStateBar({visible: false})
        gv.setCheckBar({visible: false})
        gv.setDisplayOptions({
            selectionStyle: "rows",
            showEmptyMessage: true,
            emptyMessage: "조회된 데이터가 없습니다.",
            fitStyle: "evenFill",
            columnResizable: false
        })
        gv.onCellDblClicked = (grid, clickData) => {
            if (clickData.itemIndex === undefined || clickData.cellType === "check") {
                return;
            }else{
            const empNo = empInfo.data[clickData.dataRow].empNo
            navigate(`/admin/report/${empNo}`)
            }
            closeModal()
            
        }

        return () => {
            dp.clearRows()
            gv.destroy()
            dp.destroy()
        }
    }, [empInfo.data])

    return (
        <div className="list-wrap">
            <div className="grid-wrap">
                <div className="real-grid"
                     ref={realgridElement}>
                </div>
            </div>
        </div>
    )
}

export default EmpList