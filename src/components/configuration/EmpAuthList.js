import { useEffect, useRef, useState } from "react"
import { GridView, LocalDataProvider } from 'realgrid'
import { columns, fields } from './realgrid-dataAuth'

import 'realgrid/dist/realgrid-style.css'

const EmpAuthList = ({empAuthInfo}) => {
    const [dataProvider, setDataProvider] = useState(null)
    const [gridView, setGridView] = useState(null)
    const realgridElement = useRef(null)
    console.log(empAuthInfo)

    useEffect(() => {
        const container = realgridElement.current
        const dp = new LocalDataProvider(true)
        const gv = new GridView(container)
    
        gv.setDataSource(dp)
        dp.setFields(fields)
        gv.setColumns(columns)
        gv.footer.visible = false
        dp.setRows(empAuthInfo.data)
        gv.setEditOptions({editable: false})

        setDataProvider(dp)
        setGridView(gv)
    
        return () => {
          dp.clearRows()
          gv.destroy()
          dp.destroy()
        }
      }, [empAuthInfo.data])

    return (
        <div>
            <div
                style={{ height: '372px', width: '360px' }}
                ref={realgridElement}></div>
        </div>
    )
}

export default EmpAuthList;