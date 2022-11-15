import React,{ useState } from 'react';
import ReactEchart from "echarts-for-react"
import { color } from 'echarts';

  // axios.get('test/home.do')
  // .then((Response)=>{
  //   if(Response.data === 'ok'){
  //     alert("ok");
  //     window.location.href = "http://www.google.com";
  //   }
    
    
  // })
  // .catch((Error)=>{console.log(Error)})


export default function EmpPieChart(){
  

  const eChartsOptions = {

    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },

    series:  {
      name: '나의 근태 현황',
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
          fontWeight: 'bold',

        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 50, name: '전체 연차'},
        { value: 50, name: '잔여 연차'},
        { value: 50, name: '사용 연차'},
      ]
    },
  };

  return (  
    <div>
      <h1>연차 사용 근황 </h1>
      <h2>전체 연차: 15일 </h2>
      <h2>잔여 연차: 12.5일 </h2>
      <h2>사용 연차: 2.5일 </h2>
      <ReactEchart option={eChartsOptions} />
    </div>
  );
}