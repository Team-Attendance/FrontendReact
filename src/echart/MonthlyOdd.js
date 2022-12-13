import React from 'react';
import ReactEchart from "echarts-for-react"

export default function MonthlyOdd(){
  
 

  const eChartsOption =  {
    xAxis: {
        type: 'category',
        data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [
            5,
            {
              value: 10,
              itemStyle: {
                color: '#a90000'
              }
            },
            5,
            7,
            5,
            3,
            0,
            3,
            2,
            1,
            0,
            3
          ],
          type: 'bar'
        }
      ]
    };

  return (  
    <div>
      <ReactEchart option={eChartsOption} style={{ height: "350px"}} />
    </div>
  );
}