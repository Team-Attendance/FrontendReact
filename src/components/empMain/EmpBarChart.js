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


export default function EmpBarChart(){
  

  const eChartsOptions = {
    title: {
      text: '근태차트'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: [ '근태 현황']
    },
    series: [
      {
        name: '정상근무',
        type: 'bar',
        data: [20]
      },
      {
        name: '이상근태',
        type: 'bar',
        data: [8],
      },
          {
        name: '휴가',
        type: 'bar',
        data: [2]
      },
      {
  
      }
      
    ]
  };

  return (  
    <div>
      <ReactEchart option={eChartsOptions} />
    </div>
  );
}