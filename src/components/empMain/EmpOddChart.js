import ReactEchart from "echarts-for-react"
import { useSelector } from 'react-redux';


export default function EmpOddChart() {

  const data = useSelector(state => state.eChart.data);

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

    series: {
      name: `12월 이상 근태율`,
      type: 'pie',
      startAngle: 90,
      radius: ['45%', '73%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 2,
        shadowBlur: 0,
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

      data === null ?
          [
            { name: '결근', itemStyle: { color: '#FF5E80' } },
            { value: 0, name: '잔여휴가', itemStyle: { color: '#36A2EB' } },
            { value: 0, name: '결근', itemStyle: { color: '#FFC234' } },
          ]
          :
          [
            { value: [data != null && data.oddBizHourCount.selectAbsentCount], name: '결근', itemStyle: { color: '#FF5E80' } },
            { value: [data != null && data.oddBizHourCount.EalryCount], name: '조퇴', itemStyle: { color: '#36A2EB' } },
            { value: [data != null && data.oddBizHourCount.selectTardyCount], name: '지각', itemStyle: { color: '#FFC234' } },
          ]
    },
  };

  return (
    <div style={{height: '100%'}}>
      <ReactEchart option={eChartsOption}  style={{height: '100%'}}/>
    </div>
  );
}