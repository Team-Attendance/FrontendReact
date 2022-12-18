import ReactEchart from "echarts-for-react"
import React from "react";


export default function YearOddBizChart({ reportData }) {

  const yearOddBizCount = reportData.yearOddBizCount;

  let highCount = 0;

  if(yearOddBizCount.length > 0){
    highCount = yearOddBizCount[0].odd_biz_count;
  }
  

  let realData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const highItemStyle = {
    color: '#FF4069',
    shadowColor: '#91cc75',
    borderType: 'solid',
    opacity: 1
  }

  yearOddBizCount.forEach(element => {
    if (element.odd_biz_count === highCount) {
      realData[element.month - 1] = { value: element.odd_biz_count, itemStyle: highItemStyle }
    } else {
      realData[element.month - 1] = element.odd_biz_count;
    }

  });

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
        data: realData,
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