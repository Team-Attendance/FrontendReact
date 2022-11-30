import ReactEchart from "echarts-for-react"
import { useSelector } from 'react-redux';

export default function PtoChart(){
  const data = useSelector(state => state.eChart.data)

  const eChartsOption = {
    series:  {
      responsive: false,
      name: '이상 근태율',
      type: 'pie',
      radius: ['35%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 0,
        borderColor: 'white',
        borderWidth: 1
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
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
      ]
    },
  };

  return (  
    <div>
      <ReactEchart option={eChartsOption} style={{ height: "180px"}} />
    </div>
  );
}