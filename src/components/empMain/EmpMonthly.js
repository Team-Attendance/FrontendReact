import React from 'react';
import ReactEchart from "echarts-for-react"
import { useSelector } from 'react-redux';

export default function EmpMonthly(){
  

  const data = useSelector(state => state.pto.data);

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
        data: [ 0,0,0,7,6,8]
      },
      {
        name: '이상 근무',
        type: 'bar',
        data: [data != null && data.Pto.selectOddJulyCount,
              data != null && data.Pto.selectOddAugCount,
              data != null && data.Pto.selectOddSepCount,
              data != null && data.Pto.selectOddOctCount,
              data != null && data.Pto.selectOddNovCount,
              data != null && data.Pto.selectOddDecCount]
      }
    ]
    };

  return (  
    <div>
      <ReactEchart option={eChartsOption} style={{ height: "360px"}} />
    </div>
  );
}