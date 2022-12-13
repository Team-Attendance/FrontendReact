import React from 'react';
import ReactEchart from "echarts-for-react"

export default function EmpPieChart(){



  const eChartsOptions = {
   
    xAxis: {
      type: 'category',
      data: ['월', '화', '수', '목', '금']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '주간 근무 시간',
        data: [8, 9 , 8, 8, 9],
        type: 'line',
        smooth: true,
       itemStyle: { color: '#FF6384' }
      }
    ]
  };

  return (  
    <div>
      <ReactEchart style={{height:'350px'}}  option={eChartsOptions} />
    </div>
  );
}