import { useEffect, useRef, useState } from "react"
import { GridView, LocalDataProvider } from 'realgrid'
import { columns, fields } from '../EmpManagement/realgrid-data'
import '../../css/RealGrid.scss'
import 'realgrid/dist/realgrid-sky-blue.css'
import Paging from "../Paging"

const EmpSearchList = ({ empInfo }) => {

    
  const [dataProvider, setDataProvider] = useState(null)
  const [gridView, setGridView] = useState(null)
  const realgridElement = useRef(null)
//   function fitStyleEvenFill() {
//     gridView.displayOptions.fitStyle = "evenFill";
//   }


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
    gv.setEditOptions({ editable: false })
    gv.setRowIndicator({ visible: false })
    gv.setStateBar({ visible: false })
    gv.setCheckBar({ visible: false })
    gv.displayOptions.selectionStyle = "rows"
    gv.onCellClicked = function (grid, clickData) {
        console.log(clickData)
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
  }, [empInfo.data])

  return (
    <div className="list-wrap">
      <div className="grid-wrap">
        <div className="real-grid" style={{ width: '350px', height: '300px' }}
          ref={realgridElement}>
        </div>
      </div>
      <div id='paging'
        style={{ float: 'left', height: '100%', paddingTop: '20px' }}> - </div>
    </div>

  )
}

export default EmpSearchList