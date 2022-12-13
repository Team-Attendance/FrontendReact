import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { GridView, LocalDataProvider } from 'realgrid'
import ConfigurationActions from "../../redux/modules/configuration/ConfigurationActions"
import { columns, fields, filters } from './realgrid-dataAuth'
import { modifyEmpAuthority } from "../../api/ConfigurationAPI"
import { useSelector } from "react-redux"
import Paging from "../Paging"
import Modal from "../Modal/Modal"
import EmpAuthModiModal from "../Modal/EmpAuthModiModal"

const AdminAuthAllList = ({ changeFlag }) => {
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
      //     dp.onValueChanged = (provider, row, field) => {
      //       console.log('DataProvider row Value changed at ' + row + ' on ' + field);
      //  };
    }

    // gv.setPaging(true, 10)
    // Paging(dp.getRowCount(), 10, 5, 1, gv)

    // dataProvider.onRowUpdating = function(provider, row) {
    //   var item = gridView.getEditingItem(); // 현재 편집 중인 행 정보와 값을 가져옵니다.
    //   if (item) {
    //     if (item.values["empAuthority"] <= "ROLE_ADMIN") {
    //       setTimeout(function() {
    //         alert("Age must be greater than 100 !");
    //       }, 10);
    //       return false; // false를 리턴하면 DataProvider에 저장되지 않습니다.
    //     }
    //   }
    //   return true;
    // };

    // dataProvider.onRowUpdated = function(provider, row) {
    //   var r = provider.getJsonRow(row);
    //   alert(JSON.stringify(r));
    // };


    setDataProvider(dp)
    setGridView(gv)

    return () => {


      dp.clearRows()
      gv.destroy()
      dp.destroy()


    }
  }, [(empAllAuthInfo.data)])

  const onSubmit = () => {
    // dispatch(ConfigurationActions.getAuthEmp)
    // console.log(onSubmit)

  }
  //   const changeAuth = async (empNo) => {
  //     const rowDatas = []
  //     const rows = dataProvider.getCheckedRows()



  //     if(rows.length) {
  //         for (let i of rows) {
  //             // var data = dataProvider.getJsonRow(rows[i]);
  //             rowDatas.push({
  //                 'empNo': empAllAuthInfo.data[i].empNo,
  //                 'empAuthority': empAllAuthInfo.data[i].empAuthority,


  //             })
  //         }
  //         console.log(rowDatas)
  //         await modifyEmpAuthority(rowDatas)
  //         changeFlag()
  //     } else {
  //         alert("선택된 신청이 없습니다.")
  //     }
  // }
  // const modiStart = () => {
  // dataProvider.onRowUpdating = function(provider, row) {
  //   var item = gridView.getEditingItem(); // 현재 편집 중인 행 정보와 값을 가져옵니다.
  //   if (item) {
  //     if (item.values["Age"] <= 100) {
  //       setTimeout(function() {
  //         alert("Age must be greater than 100 !");
  //       }, 10);
  //       return false; // false를 리턴하면 DataProvider에 저장되지 않습니다.
  //     }
  //   }

  //   return true;

  // };

  // dataProvider.onRowUpdated = function (provider, row) {
  //   // var data = provider.getJsonRows(row)
  //   console.log("-------------")
  //   console.log(row)
  //   // console.log("DataProvider rows updated: " + row.join(', '))
  // }
  function update(e) {
    let test = dataProvider.getUpdatedCells()
    console.log(test)
    
    

      // const data = {
      //   'empNo':empNo,
      //   'empAuthority':updatedCells.newValue.empAuthority
      // }
      
      console.log("-------test------")
      // console.log(row)
      // console.log(row.join)
      // var r = provider.getJsonRows(row);
      // console.log(r)

      // if (row.length) {
      //   for (let i of row) {
      //     console.log(i)
      //   }
      // }

    // const data =  {
    //   'empNo':JSON.stringify(r).empNo,
    //   'empAuthority':JSON.stringify(r).empAuthority

    // };
    //  }
    // dispatch(ConfigurationActions.modifyEmpAuthority(data))



  }





  return (

    <div>
       {modal && (
                <Modal closeModal={() => setModal(!modal)} >
                    <EmpAuthModiModal
                        closeModal={() => setModal(!modal)}
                        empAllAuthInfo={empAllAuthInfo}
                        data={data}
                        auth={1}
                        changeFlag={changeFlag} />
                </Modal>
            )}
      <button onClick={toggleEmp} >사원</button> <br /><button onClick={toggleAdmin} >관리자</button>
      <br /> <button onClick={toggleAll} >전체</button>
     

      <div
        style={{ height: '350px', width: '440px' }}
        ref={realgridElement}>

      </div>

    </div>

  )
}

export default AdminAuthAllList;