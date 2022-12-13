import ReactEchart from "echarts-for-react"
import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';


export default function TimeChart({ documentStatusData }) {

  const { leave_count, total_count, work_count } = documentStatusData.bizStatus;
  const notWorkCount = total_count - leave_count - work_count;
  let bizPersent;

  work_count !== 0 ? bizPersent = Math.round(((work_count / (total_count - leave_count)) * 100) * 10) / 10 : bizPersent = 0;




  const eChartsOption = {

    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '12',
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
        leave_count !== 0 ?
          work_count === 0 && notWorkCount === 0 ?
            [
              { name: '출근', itemStyle: { color: '#36A2EB' } },
              { value: leave_count, name: '휴가', itemStyle: { color: '#FFCD56' } },
              { name: '미출근', itemStyle: { color: '#C9CBCF ' } },
            ]
            :
            [
              { value: work_count, name: '출근', itemStyle: { color: '#36A2EB' } },
              { value: leave_count, name: '휴가', itemStyle: { color: '#FFCD56' } },
              { value: notWorkCount, name: '미출근', itemStyle: { color: '#C9CBCF ' } },
            ]
          :

          work_count === 0 ?
            [
              { name: '출근', itemStyle: { color: '#36A2EB' } },
              { name: '휴가', itemStyle: { color: '#FFCD56' } },
              { value: notWorkCount, name: '미출근', itemStyle: { color: '#C9CBCF ' } },
            ]
            :
            notWorkCount === 0 ?
              [
                { value: work_count, name: '출근', itemStyle: { color: '#36A2EB' } },
                { name: '휴가', itemStyle: { color: '#FFCD56' } },
                { name: '미출근', itemStyle: { color: '#C9CBCF ' } },
              ]
              :
              [
                { value: work_count, name: '출근', itemStyle: { color: '#36A2EB' } },
                { value: leave_count, name: '휴가', itemStyle: { color: '#FFCD56' } },
                { value: notWorkCount, name: '미출근', itemStyle: { color: '#C9CBCF ' } },
              ]
    },
  };

  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <div style={{ width: '100%', height: '100%', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', lineHeight: '25px', textAlign: 'center' }}>
        <p style={{ paddingBottom: '10px' }}>
          <span style={{ fontSize: '1rem' }}>출근율</span><br />
          <span style={{ fontSize: '1rem' }}>{bizPersent}%</span>
        </p>
      </div>
      <ReactEchart option={eChartsOption} style={{ height: '100%' }} />
    </div>
  );
}