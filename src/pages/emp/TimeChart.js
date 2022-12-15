import ReactEchart from "echarts-for-react"
import React from "react";


export default function TimeChart({ documentStatusData }) {

  let work_count = 0; // 출근
  let go_home_count = 0; // 퇴근
  let leave_count = 0; // 휴가
  let not_work_count = 0; // 결근


  documentStatusData.deptBizStatus.forEach(element => {
    switch (element.bizState) {
      case "출근":
        work_count++;
        break;
      case "지각":
        work_count++;
        break;
      case "휴가":
        leave_count++;
        break;
      case "결근":
        not_work_count++;
        break;
      case "조퇴":
        go_home_count++
        break;
      case "퇴근":
        go_home_count++
        break;
      default:
        break;
    }

  });


  const result = () => {
    if (work_count !== 0 && leave_count === 0 && go_home_count === 0 && not_work_count === 0) {
      return ([
        { value: work_count, name: '근무', itemStyle: { color: '#36A2EB' } },
        { name: '휴가', itemStyle: { color: '#4BC0C0' } },
        { name: '퇴근', itemStyle: { color: '#9966FF ' } },
        { name: '결근', itemStyle: { color: '#FF6384 ' } },
      ])
    }

    if (work_count === 0 && leave_count !== 0 && go_home_count === 0 && not_work_count === 0) {
      return ([
        { name: '근무', itemStyle: { color: '#36A2EB' } },
        { value: leave_count, name: '휴가', itemStyle: { color: '#4BC0C0' } },
        { name: '퇴근', itemStyle: { color: '#9966FF ' } },
        { name: '결근', itemStyle: { color: '#FF6384 ' } },
      ])
    }

    if (work_count === 0 && leave_count === 0 && go_home_count !== 0 && not_work_count === 0) {
      return ([
        { name: '근무', itemStyle: { color: '#36A2EB' } },
        { name: '휴가', itemStyle: { color: '#4BC0C0' } },
        { value: go_home_count, name: '퇴근', itemStyle: { color: '#9966FF ' } },
        { name: '결근', itemStyle: { color: '#FF6384 ' } },
      ])
    }

    if (work_count === 0 && leave_count === 0 && go_home_count === 0 && not_work_count !== 0) {
      return ([
        { name: '근무', itemStyle: { color: '#36A2EB' } },
        { name: '휴가', itemStyle: { color: '#4BC0C0' } },
        { name: '퇴근', itemStyle: { color: '#9966FF ' } },
        { value: not_work_count, name: '결근', itemStyle: { color: '#FF6384 ' } },
      ])
    }

    return (
      [
        { value: work_count, name: '근무', itemStyle: { color: '#36A2EB' } },
        { value: leave_count, name: '휴가', itemStyle: { color: '#4BC0C0' } },
        { value: go_home_count, name: '퇴근', itemStyle: { color: '#9966FF ' } },
        { value: not_work_count, name: '결근', itemStyle: { color: '#FF6384 ' } },
      ]
    )
  }


  let bizPersent = 0;

  if (not_work_count === 0) {
    bizPersent = 100
  } else {
    if (work_count + go_home_count + not_work_count === 0) {
      bizPersent = 0
    } else {
      bizPersent = Math.round((((work_count + go_home_count) / (work_count + go_home_count + not_work_count)) * 100) * 10) / 10
    }
  }





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
      data: result()
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