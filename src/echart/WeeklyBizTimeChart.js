import React,{ useState, useEffect } from 'react';
import ReactEchart from "echarts-for-react"
import { useDispatch, useSelector } from 'react-redux';
import ReportActions from '../redux/modules/report/ReportActions';
const WeeklyBizTimeChart = ({ WeeklyInfo }) => {
  
//   function getDayOfWeek(날짜문자열){ //ex) getDayOfWeek('2022-06-13')

//     const week = [ '월', '화', '수', '목', '금'];

//     const dayOfWeek = week[new Date(날짜문자열).getDay()];

//     return dayOfWeek;
// useEffect(() => {
  
//   dispatch(ReportActions.getWeeklyBizTime(new Date().getDay()))
// }, [dispatch])
// }
  const dispatch = useDispatch();

  // console.log (WeeklyInfo)
  const data = useSelector(state => state.WeeklyInfo.data)
  // let day = new Date(2022, a-1, b);
  // const WEEKDAY = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  // let week = WEEKDAY[day.getDay(data.empTimeDate)];
  // console.log(WeeklyInfo)

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
        type: 'value'
      },
      series: [
        {
          barWidth: '30%',
          data: [8,
            8,
            8,
            9,
            12
          ],
          type: 'bar'
        }
      ]
    };

  return (  
    <div>
      <ReactEchart option={eChartsOption} style={{ height: "240px"}} />
    </div>
  );
}
export default WeeklyBizTimeChart;