import {useEffect, useRef} from "react"
import {GridView, LocalDataProvider} from 'realgrid'
import {columns, fields} from './realgrid-data'
import '../../css/RealGrid.scss'
import '../../css/ApprovalList.scss'

import Paging from "../Paging"
import {useSelector} from "react-redux";

const EmpList = () => {
    const {empInfo} = useSelector((state) => state.empInfo)
    const realgridElement = useRef(null)

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
            showEmptyMessage: true,
            emptyMessage: "조회된 데이터가 없습니다.",
            fitStyle: "evenFill",
            columnResizable: false
        })
        gv.onCellDblClicked = (grid, clickData) => {
            if (clickData.itemIndex === undefined || clickData.cellType === "check") {
                return;
            }
            const empNo = empInfo.data[clickData.dataRow].empNo
            // window.location.href = `/admin/report/${empNo}`
            window.location.href = `/admin/report`
        }

        // gv.setPaging(true, 10)
        // Paging(dp.getRowCount(), 10, 5, 1, gv)



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
            {/*<div id='paging'*/}
            {/*     style={{float: 'left', height: '100%', paddingTop: '20px'}}> -*/}
            {/*</div>*/}
        </div>

    )
}

export default EmpList