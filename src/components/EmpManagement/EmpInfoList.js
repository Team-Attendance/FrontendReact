import {useEffect, useRef, useState} from "react"
import {GridView, LocalDataProvider, SyncGridHeight} from 'realgrid'
import {columns, fields} from './realgrid-data'
import '../../css/InfoRealGrid.scss'
import '../../css/EmpInfoList.scss'
import Paging from '../Paging';

const EmpInfoList = ({empInfo, setEmpNo}) => {

    const realgridElement = useRef(null)

    const [gridView, setGridView] = useState(null)
    const [dataProvider, setDataProvider] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)

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
        gv.setStateBar({visible: false})
        gv.setCheckBar({visible: false})
        gv.setDisplayOptions({
            selectionStyle: "rows",
            showEmptyMessage: true,
            emptyMessage: "조회된 데이터가 없습니다.",
            fitStyle: "evenFill",
            // rowHeight: 49
        })

        gv.onCellDblClicked = (grid, clickData) => {
            if (clickData.itemIndex === undefined || clickData.cellType === "check") {
                return;
            }
            setEmpNo(empInfo.data[clickData.dataRow].empNo)
        }

        gv.setPaging(true, 10)

        setGridView(gv)
        setDataProvider(dp)

        return () => {
            dp.clearRows()
            gv.destroy()
            dp.destroy()
        }
    }, [empInfo.data])


    return (
        <div className="empInfolist-wrap">
            <div className="empInfogrid-wrap">
                <div className="empInfo-real-grid"
                     ref={realgridElement}>
                </div>
            </div>
            {dataProvider && gridView &&
                <Paging
                    totalData={dataProvider.getRowCount()}
                    dataPerPage={10}
                    pageCount={5}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    gridView={gridView} />
            }
        </div>

    )
}

export default EmpInfoList