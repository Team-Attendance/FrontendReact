import ReactEchart from "echarts-for-react"
import React from "react";


export default function WeekWorkTimeChart({reportData}) {

  const weekWorkTime = reportData.weekWorkTime;

  let realData = [0, 0, 0, 0, 0, 0, 0];

  weekWorkTime.forEach(element => {
    
    realData[(element.day - 1)] = element.work_time;
  });

  const eChartsOption = {

    xAxis: {
      data: ['월', '화', '수', '목', '금', '토', '일'],
    },
    yAxis: {

    },

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      }
    },

    series: [
      {
        type: 'bar',
        data: realData,
        barWidth: '30%',
        itemStyle: {
          color: '#4BC0C0',
          barBorderRadius: 0,
          borderWidth: 0,
          borderType: 'solid',
          borderColor: '#73c0de',
          shadowColor: '#5470c6',
          shadowBlur: 2
        }
      }
    ]
  };

  return (
    <div style={{ height: '100%' }}>
      <ReactEchart option={eChartsOption} style={{ height: '115%' }} />
    </div>
  );
}