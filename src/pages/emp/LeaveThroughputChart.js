import ReactEchart from "echarts-for-react"
import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';


export default function LeaveThroughputChart({ documentStatusData }) {

  const { leave_dispose_count, leave_waiting_count } = documentStatusData.documentStatus;

  const eChartsOption = {

    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '2',
      selectedMode: false,
      itemStyle: {
        borderWidth: 0
      },
    },

    series: {
      name: `휴가신청 처리율`,
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
      // silent: true,
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
      data:
        leave_dispose_count === 0 ?
          [
            { name: '처리', itemStyle: { color: '#36A2EB' } },
            { value: leave_waiting_count, name: '미처리', itemStyle: { color: '#C9CBCF ' } },
          ]

          :
          leave_waiting_count === 0 || (leave_waiting_count === 0 && leave_dispose_count === 0) ?
            [
              { value: leave_dispose_count, name: '처리', itemStyle: { color: '#36A2EB' } },
              { name: '미처리', itemStyle: { color: '#C9CBCF ' } },
            ]
            :
            [
              { value: leave_dispose_count, name: '처리', itemStyle: { color: '#36A2EB' } },
              { value: leave_waiting_count, name: '미처리', itemStyle: { color: '#C9CBCF ' } },
            ]


    },
  };

  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <div style={{ width: '100%', height: '100%', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', lineHeight: '20px', textAlign: 'center' }}>
        <p style={{ paddingBottom: '10px' }}>
          <span style={{ fontSize: '1rem' }}>처리율</span><br />
          {leave_waiting_count + leave_dispose_count === 0 ?
            <span style={{ fontSize: '1rem' }}>0%</span>
            : <span style={{ fontSize: '1rem' }}>{Math.round(((leave_dispose_count / (leave_waiting_count + leave_dispose_count)) * 100) * 10) / 10}%</span>}
        </p>
      </div>
      <ReactEchart option={eChartsOption} style={{ height: '100%' }} />
    </div>
  );
}