import ReactEchart from "echarts-for-react"
import React from "react";


export default function Chart3() {


  const eChartsOption = {

    xAxis: {
      data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
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
        data: [1, 0, 5, 0, 8, 8, 10, 0, 8, 0, 8, 0],
        barWidth: '50%',
        itemStyle: {
          color: '#059BFF',
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