
import { useEffect, useRef, useState } from 'react';
import Modal from '../../components/Modal/Modal';
import '../../components/Modal/modal.scss'
import '../Modal/LeaveApprovalModal'
import LeaveApprovalModal from '../Modal/LeaveApprovalModal';
import { GridView, LocalDataProvider } from 'realgrid'
import { columns, fields } from './realgrid-data'
import { updateLeaveApproval } from '../../api/LeaveApprovalAPI';
import '../../css/ApprovalList.scss'
import '../../css/RealGrid.scss'

import 'realgrid/dist/realgrid-sky-blue.css'

const LeaveApprovalList = ({leaveApprovalInfo, changeFlag}) => {
    
    const [modal, setModal] = useState(false)
    const [data, setData] = useState({})
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(1) 

    const [dataProvider, setDataProvider] = useState(null)
    const [gridView, setGridView] = useState(null)
    const realgridElement = useRef(null)

    const approver = localStorage.getItem("empName")
  
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
      gv.setRowIndicator({visible: false})
      gv.setEditOptions({editable: false})
      gv.setStateBar({visible: false})
      gv.setCheckBar({width: 50})
      gv.setCheckableExpression("values['leaveAdjState']='0'",true)
      gv.displayOptions.selectionStyle="rows"
      gv.onCellClicked = (grid, clickData) => {
        if(clickData.itemIndex === undefined || clickData.cellType === "check"){
            return;
        }
        openModal(leaveApprovalInfo.data[clickData.itemIndex])
      }
      gv.setPaging(true, 10)
      
      setPageCount(gv.getPageCount()) 

      setDataProvider(dp)
      setGridView(gv)
      
      return () => {
        dp.clearRows()
        gv.destroy()
        dp.destroy()
      }
    }, [leaveApprovalInfo.data])

    const openModal = (data) => {
        setData(data)
        setModal(!modal)
    }
    
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

    const changeState = async(s) => {
        const rowDatas = []
        const rows = gridView.getCheckedRows()

        for (let i of rows) {
            // var data = dataProvider.getJsonRow(rows[i]);
            rowDatas.push({
            'empNo': leaveApprovalInfo.data[i].empNo,
            'state': s,
            'startDate': leaveApprovalInfo.data[i].leaveStartDate,
            'endDate': leaveApprovalInfo.data[i].leaveEndDate,
            'approver': approver
            })
        }
        await updateLeaveApproval(rowDatas)
        changeFlag()
    }
    

    return (
        <div className='list-wrap'>
            {modal&&(
                <Modal closeModal={() => setModal(!modal)} >
                    <LeaveApprovalModal
                        closeModal={() => setModal(!modal)}
                        data={data}
                        changeFlag={changeFlag}/>
                </Modal>
            )}
            
            <div className='real-grid'
                // style={{ height: '550px', width: '100%' }}
                ref={realgridElement}></div>
            <div className="state-button">
                <button className="state" onClick={()=>changeState(1)}>승인</button>
                <button className="state" onClick={()=>changeState(2)}>반려</button>
            </div>
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

export default LeaveApprovalList