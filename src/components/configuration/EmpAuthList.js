import { useEffect, useRef, useState } from "react"
import { GridView, LocalDataProvider } from 'realgrid'
import { columns, fields, filters } from './realgrid-dataAuth'


const EmpAuthList = ({empAuthInfo, empAllAuthInfo, adminAuthInfo}) => {
    const [dataProvider, setDataProvider] = useState(null)
    const [gridView, setGridView] = useState(null)
    const [filters, setFilters] = useState()
    const realgridElement = useRef(null)

   
    

    useEffect(() => {
        const container = realgridElement.current
        const dp = new LocalDataProvider(true)
        const gv = new GridView(container)
    
        gv.setDataSource(dp)
        dp.setFields(fields)
        dp.setFilters(filters)
        gv.setColumnFilters("empAuthority",filters)
        gv.setColumns(columns)
        gv.footer.visible = false
        dp.setRows(empAllAuthInfo.data)
        gv.setEditOptions({editable: false})
        gv.setDisplayOptions({
            fitStyle: "evenFill"
            
        })
        gv.setStateBar({
          visible: false
        });
        gv.toggleAllColumnFilters("empAuthority")
        gv.editOptions.insertable = true;
        gv.editOptions.appendable = true;
        setDataProvider(dp)
        setGridView(gv)
        
        return () => {
          dp.clearRows()
          gv.destroy()
          dp.destroy()
          
        }
      }, [empAllAuthInfo.data])

   

    return (
        
            <div
                
                style={{ height: '100%', width: '100%' }}
                ref={realgridElement}>
               
                  
                </div>
                
   
        
    )
    }

export default EmpAuthList;