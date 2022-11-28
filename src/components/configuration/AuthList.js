import { useEffect, useRef, useState } from "react"
import { GridView, LocalDataProvider } from 'realgrid'
import { columns, fields } from '../EmpManagement/realgrid-data'

import 'realgrid/dist/realgrid-style.css'

const AuthList = ({empAllInfo}) => {
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
        dp.setRows(empAllInfo.data)
        gv.setEditOptions({editable: false})

        setDataProvider(dp)
        setGridView(gv)
    
        return () => {
          dp.clearRows()
          gv.destroy()
          dp.destroy()
        }
      }, [empAllInfo.data])

    return (
        <div>
            <div
                style={{ height: '372px', width: '360px' }}
                ref={realgridElement}></div>
        </div>
    )
}

export default AuthList;