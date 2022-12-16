import ReactEchart from "echarts-for-react"
import React from "react";


export default function Chart1() {
  const eChartsOption = {

    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '1',
      selectedMode: false,
      itemStyle: {
        borderWidth: 0
      },
    },

    series: {
      name: `출근 현황`,
      type: 'pie',
      startAngle: 90,
      radius: ['45%', '75%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 2,
        shadowBlur: 0,
        shadowColor: 'lightgray',
      },
      center: ["50%", "47%"],
      label: {
        show: false,

      },
      emphasis: {
        label: {
          show: false,
          fontSize: '16',
          fontWeight: 'bold'
        },
        disabled: false, //차트 호버 확대 설정
        scaleSize: 1  // //차트 호버시 확대 비율
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 0, name: '잔여 연차', itemStyle: { color: '#C9CBCF' } },
        { value: 0, name: '사용 연차', itemStyle: { color: '#4BC0C0' } },

      ]
    },
  };

  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <div style={{ width: '100%', height: '100%', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', lineHeight: '25px', textAlign: 'center' }}>
        {/* <p style={{ paddingBottom: '10px' }}>
          <span style={{ fontSize: '1rem' }}>출근율</span><br />
          <span style={{ fontSize: '1rem' }}>3%</span>
        </p> */}
      </div>
      <ReactEchart option={eChartsOption} style={{ height: '100%' }} />
    </div>
  );
}