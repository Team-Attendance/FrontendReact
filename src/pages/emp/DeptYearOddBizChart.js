import ReactEchart from "echarts-for-react"
import React from "react";


export default function DeptYearOddBizChart({ documentStatusData }) {

  const deptYearOddBizStatus = documentStatusData.deptYearOddBizStatus;

  const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let highCount = 0;

  const highItemStyle = {
    color: '#FF4069',
    shadowColor: '#91cc75',
    borderType: 'solid',
    opacity: 1
  }

  deptYearOddBizStatus.forEach((element, index) => {
    if (index === 0) { highCount = element.odd_biz_count }
    data[(element.month - 1)] = element.odd_biz_count;

  });

  const realData = [];

  data.forEach((element, index) => {
    if (element === highCount) {
      realData[index] = { value: element, itemStyle: highItemStyle }
    } else {
      realData[index] = element
    }
  })

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
      <ReactEchart option={eChartsOption} style={{ height: '100%' }} />
    </div>
  );
}