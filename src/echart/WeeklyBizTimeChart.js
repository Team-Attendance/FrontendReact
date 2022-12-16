import React, { useRef } from 'react';
import ReactEchart from "echarts-for-react"
import { useDispatch, useSelector } from 'react-redux';
import ReportActions from '../redux/modules/report/ReportActions';
import { useParams } from 'react-router-dom';
import { height } from '@mui/system';

export default function WeeklyBizTimeChart ({WeeklyInfo}) {
  
  // console.log(WeeklyInfo)
  // dispatch(ReportActions.getWeeklyBizTime(empNo))
  // const {empNo} = useParams();
  // // 
 
  // const dispatch = useDispatch;

  // const test = useRef('')
  // const test1 = useRef('')
  // const test2 = useRef('')
  // const test3 = useRef('')
  // const test4 = useRef('')

  // if(WeeklyInfo != null &&  WeeklyInfo.data != null && WeeklyInfo.data[0] != null){
  //   test.current = WeeklyInfo.data[0].oddcount;
  //   test1.current =WeeklyInfo.data[1].oddcount;
  //   test2.current =WeeklyInfo.data[2].oddcount;
  //   test3.current =WeeklyInfo.data[3].oddcount;
  //   test4.current =WeeklyInfo.data[4].oddcount;
  // }
  const eChartsOption = {
    color: [
    
    '#91c7ae',
    '#749f83',
    '#ca8622',
    '#bda29a',
    ],
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
        
      },
      yAxis: {
        type: 'value',
        height: '220px'
      },
      grid: {
        top :'15%',
        left: '10%',
        right: '10%',
        bottom: '15%',
        containLabel: true
      },
      series: [
        { 
          
          barWidth: '30%',
          data: [
         8,
         8,
         8,
         8,
         10
         
         
            //  test.current,
          //  test1.current,
          //  test2.current,
          //  test3.current,
          //  test4.current

          // WeeklyInfo.data[0]?.workMinutefrom,
          // WeeklyInfo.data[1]?.workMinutefrom,
          // WeeklyInfo.data[2]?.workMinutefrom,
          // WeeklyInfo.data[3]?.workMinutefrom,
          // WeeklyInfo.data[4]?.workMinutefrom
          ],
          type: 'bar'
        }
      ]
    };

  return (  
    <div >
      <ReactEchart option={eChartsOption} style={{ height: "200px"}} />
    </div>
  );
}
