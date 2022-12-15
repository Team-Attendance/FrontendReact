import { useEffect, useRef, useState } from "react"
import { GridView, LocalDataProvider } from 'realgrid'
import { columns, fields } from './realgrid_dataMonthly'

import '../css/monthlyTable.scss';

import { useSelector } from "react-redux"

const MonthlyTable = () => {
  const data = useSelector(state => state.monthlyTable.data);

  
  const [maxPage, setMaxPage] = useState(null);
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
    gv.displayOptions.rowHeight = 35;
    gv.setPaging(true, 15);
    gv.setPage(0);

    setMaxPage(() => {
      let page = [];
      for (let i = 1; i <= gv.getPageCount(); i++) {
        page[i] = i;
      }
      return page;
    });

    choicePage(0);

    var options = gv.getDisplayOptions();
    options.columnResizable = !options.columnResizable;
    gv.setDisplayOptions(options);


    gv.displayOptions.syncGridHeight = "always";

    setGridView(gv)


    return () => {
      dp.clearRows()
      gv.destroy()
      dp.destroy()
    }

  }, [data])

  const choicePage = (number) => {
    pageElement.current.forEach((el) => {
      if (el != null) el.className = "";
    })

    if (pageElement.current.length > 0) {
      pageElement.current[number].className = "on";
    }

  }

  return (
    <div>
      <div className="monthly-table"
        style={{ width: '100%' }}
        ref={realgridElement}></div>
      <div style={{ textAlign: 'center', paddingTop: '15px' }}>
        <ul>

          {gridView &&
            maxPage.map((pageNumber, index) => {
              return (
                <li className={index - 1 === 0 ? "on" : ""} ref={(el) => { pageElement.current[index - 1] = el }} onClick={() => { gridView.setPage(pageNumber - 1); choicePage(pageNumber - 1) }} style={{ display: 'inline-block', margin: '0 7px', border: '', padding: '0 5px', fontSize: '0.8rem', cursor: 'pointer' }}> {pageNumber}</li>
              );
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default MonthlyTable;