import React from 'react';
import { useSelector } from 'react-redux';
import ReactEchart from "echarts-for-react";


export default function PtoChart(){
  const data = useSelector(state => state.pto.data);
  


  const eChartsOption = {
    color: [
      
      '#2f4554',
      '#61a0a8',
    ],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '0%',
      left: 'center'
    },
    series:  {
      
      name: '연차 사용률',
      type: 'pie',
      radius: ['35%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 0,
        borderColor: 'white',
        borderWidth: 1
        
      },
      areaStyle: {
        
      },
      label: {
        show: true,
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
        
        { value: [data != null && data.Pto[0].pto_left_num], name: '잔여 연차'},
        { value: [data != null && data.Pto[0].pto_use_num], name: '사용 연차'},
        
      ]
    },
  };

  return (  
    <div  >
      <ReactEchart option={eChartsOption} style={{ height: "170px", backgroundColor:"white",}} />
    </div>
  );
}