import React,{ useState } from 'react';
import ReactEchart from "echarts-for-react"




  // axios.get('test/home.do')
  // .then((Response)=>{
  //   if(Response.data === 'ok'){
  //     alert("ok");
  //     window.location.href = "http://www.google.com";
  //   }
    
    
  // })
  // .catch((Error)=>{console.log(Error)})


export default function BarChart(){

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
        { value: 20, name: '미 출근'},
        { value: 40, name: '출근'},
        { value: 50, name: '휴가'},
        { value: 60, name: '외근'},
        { value: 50, name: '출장'}
      ]
    },
};

  return (  
    <div className="Bar" >
      <ReactEchart option={eChartsOption} />
    </div>
  );
  }