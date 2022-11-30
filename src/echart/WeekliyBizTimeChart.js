import React,{ useState } from 'react';
import ReactEchart from "echarts-for-react"

export default function WeekliyBizTimeChart(){
  const[value, onChange] = useState(new Date());

  const eChartsOption = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
      
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [8, 8, 9, 8, 10],
          type: 'bar'
        }
      ]
    };

  return (  
    <div>
      <ReactEchart option={eChartsOption} style={{ height: "240px"}} />
    </div>
  );
}