import { useEffect, useRef } from "react"
import { GridView, LocalDataProvider } from 'realgrid'
import { columns, fields } from '../table/realgrid_dataOdd'
import "../css/RealGrid.scss"
const OddAdjTable = ({oddApprovalInfo}) => {
    const realgridElement = useRef(null)

    useEffect(() => {
        const container = realgridElement.current
        const dp = new LocalDataProvider(true)
        const gv = new GridView(container)
    
        gv.setDataSource(dp)
        dp.setFields(fields)
        dp.setFilters(fields)
        gv.setColumns(columns)
        gv.footer.visible = false
        dp.setRows(oddApprovalInfo.data)
        gv.setEditOptions({editable: false})
        gv.setRowIndicator({ visible: false })
        gv.setStateBar({ visible: false })
        gv.setCheckBar({ visible: false })
        gv.displayOptions.rowHeight = 25;
        gv.setDisplayOptions({
          fitStyle:"evenFill",
          selectionStyle: "rows",
          emptyMessage: "조회된 데이터가 없습니다."
          
      })
        
        return () => {
          dp.clearRows()
          gv.destroy()
          dp.destroy()
        }
      }, [oddApprovalInfo.data])

    return (
        <div>
            <div
                style={{ height: '200px', width: '776px' }}
                ref={realgridElement}></div>
                
        </div>
    )
}

export default OddAdjTable;