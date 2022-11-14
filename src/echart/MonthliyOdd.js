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

export default function MonthliyOdd(){
  const[value, onChange] = useState(new Date());

  const eChartsOption = {
    xAxis: {
        type: 'category',
        data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [
            5,
            {
              value: 10,
              itemStyle: {
                color: '#a90000'
              }
            },
            5,
            7,
            5,
            3,
            0,
            3,
            2,
            1,
            0,
            3
          ],
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