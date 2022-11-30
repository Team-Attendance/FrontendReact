import React,{ useState } from 'react';
import ReactEchart from "echarts-for-react"
import { useSelector } from 'react-redux';



export default function EmpBarChart(){
  const data = useSelector(state => state.eChart.data);

  const eChartsOptions = {
    title: {
      text: '근태차트'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: [ '근태 현황']
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