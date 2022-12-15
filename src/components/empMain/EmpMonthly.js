import React from 'react';
import ReactEchart from "echarts-for-react"

export default function EmpMonthly(){



  const eChartsOption =  {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Rainfall', 'Evaporation']
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: false, readOnly: false },
        magicType: { show: false, type: ['bar'] },
        restore: { show: false },
        saveAsImage: { show: false }
      }
    },
    calculable: true,
    xAxis: [
      {
        data: ['7월', '8월', '9월', '10월', '11월', '12월']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '정상 근무',
        type: 'bar',
        data: [
          0,
          0,
          0,
          20,
          13,
          9,
        ],
      },
      {
        name: '이상 근무',
        type: 'bar',
        data: [
          0, 
          0,
          0,
          1,
          0,
          1
        ],
       
      }
    ]
    };

  return (  
    <div>
      <ReactEchart option={eChartsOption} style={{ height: "360px"}} />
    </div>
  );
}