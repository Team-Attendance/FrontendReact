import { useEffect, useRef, useState } from "react"
import { GridView, LocalDataProvider } from 'realgrid'
import { columns, fields } from './realgrid-data'
import '../../css/RealGrid.scss'
import '../../css/ApprovalList.scss'
// import 'realgrid/dist/realgrid-style.css'

const EmpList = ({empInfo}) => {

  
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(1) 

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
      dp.setRows(empInfo.data)
      // realGrid 설정
      gv.footer.visible = false
      gv.setEditOptions({editable: false})
      gv.setRowIndicator({visible: false})
      gv.setStateBar({visible: false})
      gv.setCheckBar({width: 50})
      gv.displayOptions.selectionStyle="rows"

      gv.setPaging(true, 10)
      setPageCount(gv.getPageCount()) 

      setDataProvider(dp)
      setGridView(gv)
  
      return () => {
        dp.clearRows()
        gv.destroy()
        dp.destroy()
      }
  }, [empInfo.data])

    // 페이징 처리
    if(gridView !== null){
      gridView.onPageChanged = (grid, page) => {
          setPage(page + 1)
      }
    }
    const setPrevPage = () => {
      gridView.setPage(gridView.getPage() - 1)
    }
    const setNextPage = () => {
      gridView.setPage(gridView.getPage() + 1)
    }

  return (
      <div className="list-wrap">
          <div className="real-grid"
              // style={{ height: '300px', width: '100%' }}
              ref={realgridElement}></div>
          <div className="page-button">
            <button className="prev" onClick={setPrevPage}>이전</button>
            <span>{page}</span>
            /
            <span>{pageCount}</span>
            <button className="next" onClick={setNextPage}>다음</button>
        </div>
      </div>
      
  )
}

export default EmpList