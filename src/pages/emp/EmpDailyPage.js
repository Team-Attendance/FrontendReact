// import { Calander } from "../../components/common/Calander";
import { useEffect } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import CalanderStatus from "../../components/common/CalanderStatus";
import { ReduxCalander } from "../../components/common/ReduxCalander";
import { TestCalander } from "../../components/common/TestCalander";
import { setCalander, updateCalander } from "../../modules/calander";
import { getStatusData } from "../../modules/calanderStatus";
import { close, open } from "../../modules/leaveModal";
import CalLeaveChart from "./CalLeaveChart";
import CalOddBizChart from "./CalOddBizChart";







export function EmpDailyPage() {

   // store 변수
   const calander = useSelector(state => state.calander.calander);
   const calanderData = useSelector(state => state.calander.data);
   const year = useSelector(state => state.calander.year);
   const month = useSelector(state => state.calander.month);
   const nowDate = useSelector(state => state.calander.nowDate);
   
   // store 함수
   const dispatch = useDispatch();
   const setCompoCalander = useCallback(() => dispatch(setCalander(1)), [dispatch]);
   const onUpdate = useCallback((empNo, year, month) => dispatch(getStatusData(empNo, year, month)), [dispatch]);
 
   useEffect(() => {
    setCompoCalander();
   }, [])

   useEffect(() => {
    if(year != 0 && month != 0){
      onUpdate(1, year, month);
    }
    console.log(`년 : ${year}월 : ${month}`)
   }, [month])

  return (
    <>
      { calander && calanderData && year && month && nowDate && 
        <div style={{ position: 'relative', minHeight: 'calc(100vh - 64px)', padding: '30px', display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ marginBottom: '15px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>일별 근태 현황</h2>
          </div>

          <div style={{ width: '100%', marginBottom: '30px' }}>
            <CalanderStatus />
          </div>
          
          <TestCalander />
          <div style={{ width: '27%', paddingLeft: '35px' }}>

            <div style={{ height: '332px', marginBottom: '15px', position: 'relative' }}>
              <h3 style={{ width: '100%', fontSize: '0.8rem', fontWeight: 'bold' }}>11월 이상근태율</h3>
              <div style={{ border: '1px solid lightgray', marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', height: '300px' }}>
                  <CalOddBizChart />
                </div>
              </div>
              <p style={{ width: '50px', height: '50px', position: 'absolute', top: '46%', left: 'calc(50% - 25px)', textAlign: 'center', fontWeight: 'bold' }}>
                <span>근태율</span><br />
                <span>5%</span>
              </p>
            </div>


            <div style={{ height: '332px', position: 'relative' }}>
              <h3 style={{ width: '100%', fontSize: '0.8rem', fontWeight: 'bold' }}>휴가 사용률</h3>
              <div style={{ border: '1px solid lightgray', marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', height: '300px' }}>
                  <CalLeaveChart />
                </div>
              </div>
              <p style={{ width: '50px', height: '50px', position: 'absolute', top: '46%', left: 'calc(50% - 25px)', textAlign: 'center', fontWeight: 'bold' }}>
                <span>사용률</span><br />
                <span>5%</span>
              </p>
            </div>
          </div>
        </div>
        
        }
    </>

  );
}







