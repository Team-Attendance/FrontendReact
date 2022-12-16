import { useEffect, useRef, useState } from "react"
import { GridView, LocalDataProvider } from 'realgrid'
import { columns, fields } from './realgrid_dataTestLeave';

import '../css/monthlyTable.scss';


const TestLeaveTable = ({testData}) => {
 
  const data = testData.empLeaveList;

  const [gridView, setGridView] = useState(null);

  const pageElement = useRef([]);

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
   


    // var options = gv.getDisplayOptions();
    // options.columnResizable = !options.columnResizable;
    // gv.setDisplayOptions(options);


    // gv.displayOptions.syncGridHeight = "always";

    setGridView(gv)


    return () => {
      dp.clearRows()
      gv.destroy()
      dp.destroy()
    }

  }, [data])


  return (
    <div style={{height: '100%'}}>
      <div
        style={{ width: '100%', height:'100%' }}
        ref={realgridElement} className="monthly-table"></div>
      
    </div>
  )
}

export default TestLeaveTable;