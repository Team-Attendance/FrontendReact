import React,{ useState, useEffect } from 'react';
import ReactEchart from "echarts-for-react"
import { useDispatch, useSelector } from 'react-redux';
import ReportActions from '../redux/modules/report/ReportActions';
import { useParams } from 'react-router-dom';
const WeeklyBizTimeChart = ({ WeeklyInfo }) => {
  
  console.log(WeeklyInfo)
  const eChartsOption = {
    color: [
    
    '#91c7ae',
    '#749f83',
    '#ca8622',
    '#bda29a',
    ],
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
        
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          barWidth: '30%',
          data: [
            7,
            6,
            5,
            4,
            3,
          // WeeklyInfo.data[0]?.workMinutefrom,
          // WeeklyInfo.data[1]?.workMinutefrom,
          // WeeklyInfo.data[2]?.workMinutefrom,
          // WeeklyInfo.data[3]?.workMinutefrom,
          // WeeklyInfo.data[4]?.workMinutefrom
          ],
          type: 'bar'
        }
      ]
    };

  return (  
    <div>
      <ReactEchart option={eChartsOption} style={{ height: "200px"}} />
    </div>
  );
}
export default WeeklyBizTimeChart;