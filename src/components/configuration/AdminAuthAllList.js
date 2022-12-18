import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { GridView, LocalDataProvider } from 'realgrid'
import ConfigurationActions from "../../redux/modules/Configuration/ConfigurationActions"
import { columns, fields, filters } from './realgrid-data'
import { modifyEmpAuthority } from "../../api/ConfigurationAPI"
import { useSelector } from "react-redux"
import Paging from "../Paging"
import AuthSetModal from "../Modal/AuthSetModal"
import EmpAuthModiModal from "../Modal/EmpAuthModiModal"


const AdminAuthAllList = ({ changeFlag,closeModal }) => {
  const [dataProvider, setDataProvider] = useState(null)
  const [gridView, setGridView] = useState(null)
  

  const [modal, setModal] = useState(false)
  const [data, setData] = useState({})
  const dispatch = useDispatch;

  // const [btnBeginUpdateRow, setBtnBeginUpdateRow] = useState(null)
  // const handleBtnBeginUpdateRow = (e) => {
  //   setBtnBeginUpdateRow(e.tartget.value);
  // }

  // const [btnOnRowUpdating, setBtnOnRowUpdating] = useState(false)
  // const handleBtnOnRowUpdating = (e) => {
  //   setBtnOnRowUpdating(e.target.value);
  // }
  const realgridElement = useRef(null)



  // const []
  function toggleEmp() {

    gridView.toggleColumnFilters("empAuthority", ["ROLE_EMP"]);
    gridView.activateColumnFilters("empAuthority", ["ROLE_ADMIN"], false);

  }
  function toggleAdmin() {

    gridView.toggleColumnFilters("empAuthority", ["ROLE_ADMIN"]);
    gridView.activateColumnFilters("empAuthority", ["ROLE_EMP"], false);

  }

  function toggleAll() {
    gridView.activateAllColumnFilters("empAuthority", ["ROLE_ADMIN"], false);

  }
  const { empAllAuthInfo } = useSelector((state) => state.empAllAuthInfo)
  useEffect(() => {
    const container = realgridElement.current
    const dp = new LocalDataProvider(true)
    const gv = new GridView(container)

    gv.setDataSource(dp)
    dp.setFields(fields)
    gv.setColumns(columns)
    gv.setColumnFilters("empAuthority", filters)

    gv.footer.visible = false
    dp.setRows(empAllAuthInfo.data)
    gv.setEditOptions({ editable: false, updatable: true })
    gv.editOptions.insertable = true;
    gv.editOptions.appendable = true;
    var curr = gv.getCurrent();
    gv.beginUpdateRow(curr.itemIndex);
    gv.showEditor();
    gv.setFocus();
    gv.setStateBar({ visible: false })
        gv.setCheckBar({ visible: false })
    gv.setDisplayOptions({
      fitStyle:"evenFill",
      selectionStyle: "rows",
      emptyMessage: "조회된 데이터가 없습니다."
  })
    dp.restoreMode = 'auto'
    // gv.setPaging(true, 10)
    // Paging(dp.getRowCount(), 10, 5, 1, gv)

    gv.onCellDblClicked = (grid, clickData) => {
      if (clickData.itemIndex === undefined || clickData.cellType === "check") {

        return;
        console.log(clickData)
      }
      setData(empAllAuthInfo.data[clickData.dataRow])
      setModal(!modal)
    
    }

      setDataProvider(dp)
      setGridView(gv)

    return () => {


      dp.clearRows()
      gv.destroy()
      dp.destroy()


    }
  }, [(empAllAuthInfo.data)])

  const closeButton = () => {
    closeModal();
  }

  return (

    <div className="AuthModal-box" >
       {modal && (
                <AuthSetModal closeModal={() => setModal(!modal)} >
                    <EmpAuthModiModal
                        closeModal={() => setModal(!modal)}
                        empAllAuthInfo={empAllAuthInfo}
                        data={data}
                        auth={1}
                        changeFlag={changeFlag} />
                </AuthSetModal>
            )}
      
        <div className="AuthSetModal-button">
      <button style={{margin:"10px"}}  onClick={toggleEmp} >사원</button> <button style={{margin:"10px"}} onClick={toggleAdmin} >관리자</button>
      <button style={{margin:"10px"}} onClick={toggleAll} >전체</button>   
        </div>
        
      <div
        style={{ height: '350px', width: '440px'}}
        ref={realgridElement}>

      </div>

    </div>

  )
}

export default AdminAuthAllList;