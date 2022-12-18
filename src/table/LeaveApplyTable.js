import { useEffect, useRef, useState } from "react"
import { GridView, LocalDataProvider } from 'realgrid'
import { columns, fields } from './realgrid_dataLeaveApplyTable';

import '../css/monthlyTable.scss';


const LeaveApplyTable = ({ reportData }) => {

  const data = reportData.empLeaveList;

  const [gridView, setGridView] = useState(null);


  const realgridElement = useRef([])

  useEffect(() => {
    const container = realgridElement.current
    const dp = new LocalDataProvider(true)
    const gv = new GridView(container)

    dp.setFields(fields)
    dp.setRows(data)

    gv.footer.visible = false
    gv.setDataSource(dp)
    gv.setColumns(columns)
    gv.setEditOptions({ editable: false })
    gv.setStateBar({
      visible: false
    });
    gv.setCheckBar({
      visible: false
    });
    gv.displayOptions.fitStyle = "evenFill";
    gv.displayOptions.rowHeight = 30;

    setGridView(gv)


    return () => {
      dp.clearRows()
      gv.destroy()
      dp.destroy()
    }

  }, [data])


  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <div
        style={{ width: '100%', height: '100%' }}
        ref={realgridElement} className="monthly-table test-leave-table"></div>
      {data.length === 0 &&
        <div style={{width: '100%', position: 'absolute', top: '120px', left:'0', fontSize: '0.8rem', color: 'gray', textAlign: 'center'}}>
          <span>휴가 신청이 존재하지 않습니다.</span>
        </div>
      }
    </div>
  )
}

export default LeaveApplyTable;