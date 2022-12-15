import React from 'react';
import ReactEchart from "echarts-for-react"
import { useSelector } from 'react-redux';



export default function EmpBarChart(){
  const data = useSelector(state => state.eChart.data);

  const eChartsOptions = {
  
    tooltip: {
      trigger: 'item',
    },


    legend: {
      bottom: '10',
      selectedMode: false,
      itemStyle: {
        borderWidth: 0
      },
    },

    grid: {
      top :'-10%',
      left: '10%',
      right: '10%',
      bottom: '15%',
      containLabel: true
    },

    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },

    yAxis: {
      type: 'category',
      data: [ '']
    },
    series: [
      {
        name: '정상근무',
        type: 'bar',
        data: [data != null && data.oddBizHourCount.normalCount]
      },
      {
        name: '이상근태',
        type: 'bar',
        data: [data != null && data.oddBizHourCount.oddBizCount],
      },
          {
        name: '휴가',
        type: 'bar',
        data: [data != null && data.oddBizHourCount.leaveCount]
      },
      {
  
      }
      
    ]
  };

  return (  
    <div>
      <ReactEchart option={eChartsOptions} />
    </div>
  );
}