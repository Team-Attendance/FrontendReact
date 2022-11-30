import React from 'react';
import ReactEchart from "echarts-for-react"
import { useSelector } from 'react-redux';



export default function AdminPieChart(){
  const data = useSelector(state => state.adminMain.data)

  const eChartsOption = {

      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },

    series:  {
      name: '근무 현황',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 0,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: [data != null && data.admin.TodayStartCount], name: '출근'},
        { value: [data != null && data.admin.TodayNotStartCount], name: '미 출근'},
        { value: [data != null && data.admin.LeaveSignCount], name: '휴가'},
      ]
    },
};

  return (  
    <div className="Bar" >
      <ReactEchart option={eChartsOption} />
    </div>
  );
  }