import { useEffect, useRef, useState } from "react"
import Modal from "../Modal/Modal"
import OddApprovalModal from "../Modal/OddApprovalModal"
import { GridView, LocalDataProvider } from 'realgrid'
import { columns, fields } from './realgrid-data'

const OddApprovalList = ({oddApprovalInfo}) => {

    const [dataProvider, setDataProvider] = useState(null)
    const [gridView, setGridView] = useState(null)
    const realgridElement = useRef(null)

    const [modal, setModal] = useState(false)
    const [data, setData] = useState({})

    const openModal = (data) => {
        setData(data)
        setModal(!modal)
    }

    useEffect(() => {
        const container = realgridElement.current
        const dp = new LocalDataProvider(true)
        const gv = new GridView(container)
    
        gv.setDataSource(dp)
        dp.setFields(fields)
        gv.setColumns(columns)
        gv.footer.visible = false
        dp.setRows(oddApprovalInfo.data)
        gv.setEditOptions({editable: false})
        gv.onCellClicked = (grid, clickData) => {
            if(clickData.itemIndex === undefined){
                return;
            }
            openModal(oddApprovalInfo.data[clickData.itemIndex])
        }
        setDataProvider(dp)
        setGridView(gv)
    
        return () => {
          dp.clearRows()
          gv.destroy()
          dp.destroy()
        }
      }, [oddApprovalInfo.data])

    return (
        <div>
            {modal&&(
                <Modal closeModal={() => setModal(!modal)} >
                    <OddApprovalModal data={data}/>
                </Modal>
            )}
             <div
                style={{ height: '300px', width: '100%' }}
                ref={realgridElement}></div>
        </div>
    )
}

export default OddApprovalList