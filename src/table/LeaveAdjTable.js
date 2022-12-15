import { useEffect, useRef } from "react"
import { GridView, LocalDataProvider } from 'realgrid'
import { columns, fields } from '../table/realgrid-dataLeave'
import '../css/RealGrid.scss'

const LeaveAdjTable = ({leaveApprovalInfo}) => {
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
        dp.setRows(leaveApprovalInfo.data)
        gv.setEditOptions({editable: false})
        gv.setRowIndicator({ visible: false })
        gv.setStateBar({ visible: false })
        gv.setCheckBar({ visible: false })
        
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
      }, [leaveApprovalInfo.data])

    return (
        <div>
            <div
                style={{ height: '220px', width: '680px' }}
                ref={realgridElement}></div>
           
                
        </div>
        
    )
}

export default LeaveAdjTable;