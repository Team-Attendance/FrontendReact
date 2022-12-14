import ReactEchart from "echarts-for-react"
import { useSelector } from 'react-redux';

export default function OddChart(){
  const data = useSelector(state => state.eChart.data)

  const eChartsOption = {
    color:[
      '#1A73E8',
      '#F24646',
      '#FFCD56'
    ],
    
   
    legend: {
      top: '0%',
      left: 'center'
    },
    series:  {
      responsive: false,
      name: '이상 근태율',
      type: 'pie',
      radius: ['35%', '70%'],
      // avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 0,
        borderColor: 'white',
        borderWidth: 1
      },
      label: {
        show: false,
        
      },
      emphasis: {
        label: {
          show: false,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        {
          name: '정상근무',
        
          value : [data != null && data.oddBizHourCount.normalCount]
        },
        {
          name: '이상근태',
          value : [data != null && data.oddBizHourCount.oddBizCount],
        },
        {
          name: '휴가',
          value : [data != null && data.oddBizHourCount.leaveCount],
        },
      ]
    },
  };

  return (  
    <div>
      <ReactEchart option={eChartsOption} style={{ height: "180px"}} />
    </div>
  );
}