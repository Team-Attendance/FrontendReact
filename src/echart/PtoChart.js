import React from 'react';
import { useSelector } from 'react-redux';
import ReactEchart from "echarts-for-react";

export default function PtoChart(){
  const data = useSelector(state => state.pto.data);
 
  const eChartsOption = {
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
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: [data != null && data.Pto[0].ptoYrNo], name: '전체 연차'},
        { value: [data != null && data.Pto[0].ptoUseNum], name: '잔여 연차'},
        
      ]
    },
  };

  return (  
    <div>
      <ReactEchart option={eChartsOption} style={{ height: "180px"}} />
    </div>
  );
}