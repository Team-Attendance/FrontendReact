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

export default function PtoChart(){
  const[value, onChange] = useState(new Date());

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
        { value: 30, name: '미 사용'},
        { value: 70, name: '사용'},
        
      ]
    },
  };

  return (  
    <div>
      <ReactEchart option={eChartsOption} />
    </div>
  );
}