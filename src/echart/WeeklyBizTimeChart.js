import React,{ useState } from 'react';
import ReactEchart from "echarts-for-react"
import { useSelector } from 'react-redux';

const WeeklyBizTimeChart = ({ WeeklyInfo }) => {
  
 

  // console.log (WeeklyInfo)
  const data = useSelector(state => state.WeeklyInfo.data)
  // let day = new Date(2022, a-1, b);
  // const WEEKDAY = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  // let week = WEEKDAY[day.getDay(data.empTimeDate)];
  // console.log(WeeklyInfo)

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
          data: [8,
            8,
            8,
            9,
            12
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
export default WeeklyBizTimeChart;