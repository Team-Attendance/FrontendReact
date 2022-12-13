import { useEffect, useRef, useState } from "react"
import { GridView, LocalDataProvider } from 'realgrid'
import { columns, fields } from '../table/realgrid_dataOdd'
import Paging from "../components/Paging"
import "../css/RealGrid.scss"
const OddAdjTable = ({oddApprovalInfo}) => {
    const [dataProvider, setDataProvider] = useState(null)
    const [gridView, setGridView] = useState(null)
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
        gv.setDisplayOptions({
          fitStyle:"evenFill",
          selectionStyle: "rows",
          emptyMessage: "조회된 데이터가 없습니다."
          
      })
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
        <div>
            <div
                style={{ height: '180px', width: '680px' }}
                ref={realgridElement}></div>
                 <div id='paging'
        style={{ float: 'left', height: '100%', paddingTop: '20px' }}> - </div>
        </div>
    )
}

export default OddAdjTable;