import React,{ useState } from 'react';
import ECharts, { EChartsReactProps } from 'echarts-for-react';
import axios from 'axios';


  // axios.get('test/home.do')
  // .then((Response)=>{
  //   if(Response.data === 'ok'){
  //     alert("ok");
  //     window.location.href = "http://www.google.com";
  //   }
    
    
  // })
  // .catch((Error)=>{console.log(Error)})
import ReactEchart from "echarts-for-react"

export default function WeekliyBizTimeChart(){
  const[value, onChange] = useState(new Date());

  const eChartsOption = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [8, 8, 9, 8, 10, 8, 9],
          type: 'bar'
        }
      ]
    };

  return (  
    <div>
      <ReactEchart option={eChartsOption} />
    </div>
  );
}