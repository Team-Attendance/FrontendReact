import { useEffect, useRef, useState } from "react"
import { GridView, LocalDataProvider } from 'realgrid'
import { columns, fields } from '../table/realgrid-dataLeave'


const LeaveAdjTable = ({leaveApprovalInfo}) => {
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
        gv.footer.visible = false
        dp.setRows(leaveApprovalInfo.data)
        gv.setEditOptions({editable: false})
        setDataProvider(dp)
        setGridView(gv)
    
        return () => {
          dp.clearRows()
          gv.destroy()
          dp.destroy()
        }
      }, [leaveApprovalInfo.data])

    return (
        <div>
            <div
                style={{ height: '210px', width: '665px' }}
                ref={realgridElement}></div>
        </div>
    )
}

export default LeaveAdjTable;