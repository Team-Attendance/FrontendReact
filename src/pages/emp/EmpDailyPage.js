import { Calander } from "../../components/common/Calander";
import CalanderStatus from "../../components/common/CalanderStatus";



export function EmpDailyPage() {

  return (
    <div style={{ position: 'relative', minHeight: 'calc(100vh - 64px)', paddingTop: '15px' }}>
      <CalanderStatus />
      <Calander />
    </div>
  );
}