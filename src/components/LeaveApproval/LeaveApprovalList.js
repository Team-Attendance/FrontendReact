
import { useEffect, useRef, useState } from 'react';
import Modal from '../../components/Modal/Modal';
import '../../components/Modal/modal.scss'
import '../Modal/LeaveApprovalModal'
import LeaveApprovalModal from '../Modal/LeaveApprovalModal';
import { GridView, LocalDataProvider } from 'realgrid'
import { columns, fields } from './realgrid-data'

import 'realgrid/dist/realgrid-sky-blue.css'

const LeaveApprovalList = ({leaveApprovalInfo, flag, setFlag}) => {
    
    const [modal, setModal] = useState(false)
    const [data, setData] = useState({})

    const openModal = (data) => {
        setData(data)
        setModal(!modal)
    }

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
      dp.setRows(leaveApprovalInfo.data)
      // realGrid 설정
      gv.footer.visible = false
      gv.setEditOptions({editable: false})
      gv.setStateBar({visible: false})
      gv.setCheckableExpression("values['leaveAdjState']='0'",true)
      gv.onCellClicked = (grid, clickData) => {
        if(clickData.itemIndex === undefined){
            return;
        }
        openModal(leaveApprovalInfo.data[clickData.itemIndex])
      }
      setDataProvider(dp)
      setGridView(gv)
  
      return () => {
        dp.clearRows()
        gv.destroy()
        dp.destroy()
      }
    }, [leaveApprovalInfo.data])
    
    

    return (
        <div>
            {modal&&(
                <Modal closeModal={() => setModal(!modal)} >
                    <LeaveApprovalModal
                        closeModal={() => setModal(!modal)}
                        data={data}
                        flag={flag}
                        setFlag={setFlag}/>
                </Modal>
            )}
            <div
                style={{ height: '300px', width: '100%' }}
                ref={realgridElement}></div>
        </div>
    )
}

export default LeaveApprovalList