import React from 'react';
import ReactEchart from "echarts-for-react"
import { useSelector } from 'react-redux';


  // axios.get('test/home.do')
  // .then((Response)=>{
  //   if(Response.data === 'ok'){
  //     alert("ok");
  //     window.location.href = "http://www.google.com";
  //   }
    
    
  // })
  // .catch((Error)=>{console.log(Error)})


export default function EmpPieChart(){

  const data = useSelector(state => state.pto.data);


  const eChartsOptions = {

    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '10',
      selectedMode: false,
      itemStyle: {
        borderWidth: 0
      },
    },

    series:  {
      name: '2022년 휴가 사용 현황',
      type: 'pie',
      startAngle: '90',
      radius: ['45%', '75%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 2,
        shadowBlur : 0,
        shadowColor: 'lightgray',
      },
      center: ["50%", "40%"],
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: false,
          fontSize: '16',
          fontWeight: 'bold'
        },
        disabled: false, //차트 호버 확대 설정
        scaleSize: 1  // //차트 호버시 확대 비율
      },
      labelLine: {
        show: false
      },
      data: [                                                                                      
        { value: 2, name: '사용 휴가',   itemStyle: {color: '#0080ff' }},                                            
        { value: 18, name: '잔여 휴가', itemStyle: {color: '#afafaf' }},
      ]                                                                         
    },
  };

  return (  
    <div>
      <ReactEchart option={eChartsOptions} />
    </div>
  );
}