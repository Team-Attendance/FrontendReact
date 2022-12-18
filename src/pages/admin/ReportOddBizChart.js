import ReactEchart from "echarts-for-react"
import React from "react";


export default function ReportOddBizChart({ reportData }) {

  const { normalCount, oddBizCount } = reportData.oddBizStatus;

  let noramlCountObject = {};
  let oddBizCountObject = {};

  if (normalCount === 0) {
    noramlCountObject = { name: '정상 근무', itemStyle: { color: '#36A2EB' } }
  } else {
    noramlCountObject = { value: normalCount, name: '정상 근무', itemStyle: { color: '#36A2EB' } }
  }

  if (oddBizCount === 0) {
    oddBizCountObject = { name: '이상 근무', itemStyle: { color: '#FF4C7D' } }
  } else {
    oddBizCountObject = { value: oddBizCount, name: '이상 근무', itemStyle: { color: '#FF4C7D' } }
  }

  if(normalCount === 0 && oddBizCount === 0){
    noramlCountObject = { value: 0, name: '정상 근무', itemStyle: { color: '#36A2EB' } }
  }

  let oddBizPersent = 0;

  if ((normalCount + oddBizCount) !== 0) {
    oddBizPersent = Math.round(((oddBizCount / (normalCount + oddBizCount)) * 100) * 10) / 10;
  } else {
    oddBizPersent = 0;
  }

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
      name: `이상 근태 현황(일)`,
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
        noramlCountObject,
        oddBizCountObject
      ]
    },
  };

  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <div style={{ width: '100%', height: '100%', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', lineHeight: '20px', textAlign: 'center' }}>
        <p style={{ paddingBottom: '10px' }}>
          <span style={{ fontSize: '0.75rem' }}>이상근태율</span><br />
          <span style={{ fontSize: '1rem', position: 'relative', left: '3px' }}>{oddBizPersent}%</span>
        </p>
      </div>
      <ReactEchart option={eChartsOption} style={{ height: '100%' }} />
    </div>
  );
}