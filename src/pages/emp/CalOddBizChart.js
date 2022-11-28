import ReactEchart from "echarts-for-react"
import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';


export default function CalOddBizChart() {

  const month = useSelector(state => state.calendar.month);
  const normalCount = useSelector(state => state.calendarStatus.data.oddBizHourCount.normalCount);
  const oddCount = useSelector(state => state.calendarStatus.data.oddBizHourCount.oddBizCount);

  const eChartsOption = {

    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '5',
      selectedMode: false,
      itemStyle: {
        borderWidth: 0
      },
    },

    series: {
      name: `${month}월 이상 근태율`,
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
        oddCount === 0 ?
          [
            { name: '이상 근태', itemStyle: { color: '#FF3800' } },
            { value: 0, name: '정상 근무', itemStyle: { color: '#0080ff ' } },
            
          ]
          :
          [
            { value: oddCount, name: '이상 근태', itemStyle: { color: '#FF3800' } },
            { value: normalCount, name: '정상 근무', itemStyle: { color: '#0080ff ' } },
          ]

    },
  };

  return (
    <div>
      <ReactEchart option={eChartsOption} />
    </div>
  );
}