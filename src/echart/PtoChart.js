import React from 'react';
import { useSelector } from 'react-redux';
import ReactEchart from "echarts-for-react";

export default function PtoChart(){
  const data = useSelector(state => state.pto.data);
  


  const eChartsOption = {
    color: [

      '#D49DDC',
      '#9174F2',
    ],
    
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
   
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: false,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        
        { value: [data != null && data.Pto.selectUseCount], name: '잔여 연차'},
        { value: [data != null && data.Pto.selectleftCount], name: '사용 연차'},
        
      ]
    },
  };

  return (  
    <div>
      <ReactEchart option={eChartsOption} style={{ height: "180px", backgroundColor:"white",}} />
    </div>
  );
}