import {useEffect, useRef} from "react"
import {GridView, LocalDataProvider} from 'realgrid'
import {columns, fields} from './realgrid-data'
import {useSelector} from "react-redux";
import '../../css/RealGrid.scss'
import '../../css/ApprovalList.scss'

const EmpAuthList = () => {
    const {empAuthInfo} = useSelector((state) => state.empAuthInfo)
    const realgridElement = useRef(null)

    useEffect(() => {
        const container = realgridElement.current
        const dp = new LocalDataProvider(true)
        const gv = new GridView(container)

        gv.setDataSource(dp)
        dp.setFields(fields)
        gv.setColumns(columns)
        dp.setRows(empAuthInfo.data)
        // realGrid 설정
        gv.footer.visible = false
        // gv.setStateBar({visible: false})
        gv.setCheckBar({visible: false})
        gv.setDisplayOptions({
            showEmptyMessage: true,
            emptyMessage: "조회된 데이터가 없습니다.",
            fitStyle: "evenFill",
            columnResizable: false
        })

        return () => {
            dp.clearRows()
            gv.destroy()
            dp.destroy()
        }
    }, [empAuthInfo.data])

    return (
        <div className="list-wrap">
            <div className="grid-wrap">
                <div className="real-grid"
                     ref={realgridElement}>
                </div>
            </div>
        </div>
    )
}

export default EmpAuthList