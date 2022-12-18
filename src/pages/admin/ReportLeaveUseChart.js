import ReactEchart from "echarts-for-react"
import React from "react";


export default function ReportLeaveUseChart({ reportData }) {

  let pto_use_num = 0;
  let pto_yr_no = 0;

  if(reportData.empPto != null){
    pto_use_num = reportData.empPto.pto_use_num;
    pto_yr_no = reportData.empPto.pto_yr_no;
  }
  

  let ptoUsePersent;

  let realData;
  if (pto_yr_no !== 0) {
    ptoUsePersent = Math.round(((pto_use_num / (pto_yr_no)) * 100) * 10) / 10;
  } else {
    ptoUsePersent = 0;
  }


  if (pto_use_num === 0) {
    realData = [
      { name: '사용 연차', itemStyle: { color: '#36A2EB' } },
      { value: pto_yr_no - pto_use_num, name: '잔여 연차', itemStyle: { color: '#C9CBCF' } },
    ]
  } else if (pto_yr_no === 0) {
    realData = [
      {  name: '사용 연차', itemStyle: { color: '#36A2EB' } },
      { value: pto_yr_no - pto_use_num, name: '잔여 연차', itemStyle: { color: '#C9CBCF' } },
    ]
  } else {
    realData = [
      { value: pto_use_num, name: '사용 연차', itemStyle: { color: '#36A2EB' } },
      { value: pto_yr_no - pto_use_num, name: '잔여 연차', itemStyle: { color: '#C9CBCF' } },
    ]
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
      name: `휴가 사용 현황`,
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
      data: realData
    },
  };

  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <div style={{ width: '100%', height: '100%', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', lineHeight: '20px', textAlign: 'center' }}>
        <p style={{ paddingBottom: '10px' }}>
          <span style={{ fontSize: '0.75rem' }}>사용률</span><br />
          <span style={{ fontSize: '1rem', position: 'relative', left: '3px' }}>{ptoUsePersent}%</span>
        </p>
      </div>
      <ReactEchart option={eChartsOption} style={{ height: '100%' }} />
    </div>
  );
}