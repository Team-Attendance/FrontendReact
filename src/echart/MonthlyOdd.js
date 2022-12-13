import React from 'react';
import ReactEchart from "echarts-for-react"
import { useDispatch, useSelector } from "react-redux";
export default function MonthlyOdd({MonthliyInfo}){
  
  // const data = useSelector(state => state.MonthliyInfo.data)

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
          color: [
          
            '#45A5F5',
            '#e69d87',
            '#8dc1a9',
            '#ea7e53',
            '#eedd78',
            '#73a373',
            '#73b9bc',
            '#7289ab',
            '#91ca8c',
            '#f49f42'
          ],
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
      <ReactEchart option={eChartsOption} style={{ height: "240px"}} />
    </div>
  );
}