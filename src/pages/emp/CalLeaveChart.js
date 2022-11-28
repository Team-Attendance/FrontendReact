import ReactEchart from "echarts-for-react"
import { useSelector } from "react-redux";

export default function CalLeaveChart(){
  const year = useSelector(state => state.calendar.year);
  const leaveUtilzition = useSelector(state => state.calendarStatus.data.leaveUtilzition);
  

  const eChartsOption = {

    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '5',
      selectedMode: false,
      itemStyle: {
        borderWidth: 0
      },
    },

    series:  {
      name: `${year}년 휴가 사용률`,
      type: 'pie',
      startAngle: '90',
      radius: ['45%', '75%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 2,
        shadowBlur : 0,
        shadowColor: 'lightgray',
      },
      // silent: true,
      center: ["50%", "47%"],
      label: {
        show: false,
        
      },
      emphasis: {
        label: {
          show: false,
          fontSize: '16',
          fontWeight: 'bold'
        },
        disabled: false, //차트 호버 확대 설정
        scaleSize: 1  // //차트 호버시 확대 비율
      },
      labelLine: {
        show: false
      },
      data: 

      leaveUtilzition === null ?
          [
            { name: '사용 휴가', itemStyle: { color: '#0080ff' } },
            { value: 0, name: '잔여 휴가', itemStyle: { color: '#afafaf' } },
          ]
          :
          leaveUtilzition.leftover_num === 0 ?
          [
            { value: leaveUtilzition != null ? leaveUtilzition.use_num : 0, name: '사용 휴가', itemStyle: { color: '#0080ff' } },
            { name: '잔여 휴가', itemStyle: { color: '#afafaf' } },
          ]
          :
          [
            { value: leaveUtilzition != null ? leaveUtilzition.use_num : 0, name: '사용 휴가', itemStyle: { color: '#0080ff' } },
            { value: leaveUtilzition != null ? leaveUtilzition.leftover_num : 0, name: '잔여 휴가', itemStyle: { color: '#afafaf' } },
          ]
    },
  };

  return (  
    <div>
      <ReactEchart option={eChartsOption} />
    </div>
  );
}