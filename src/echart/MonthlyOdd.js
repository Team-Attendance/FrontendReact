import React, { useRef, useState } from 'react';
import ReactEchart from "echarts-for-react"
import { useDispatch, useSelector } from "react-redux";
import ReportActions from '../redux/modules/report/ReportActions';
import { useParams } from 'react-router-dom';
export default function MonthlyOdd({}){

    const {empNo} = useParams();
    const currentYear = new Date().getFullYear()
    const dispatch = useDispatch;
    const { MonthliyInfo } =  useSelector((state) => state.MonthliyInfo)
    dispatch(ReportActions.getMonthlyOdd(empNo, currentYear))
  console.log("===========================")
  const test = useRef('')
  const test1 = useRef('')
  console.log(MonthliyInfo)
    if(MonthliyInfo.data){
        if(MonthliyInfo.data[0] != null && MonthliyInfo.data[0].undefined){

        test.current = MonthliyInfo.data[0].oddcount;
        test1.current = MonthliyInfo.data[1].oddcount;
    }
  }

  console.log(test.current)

  const eChartsOption =  {
    xAxis: {
        type: 'category',
        data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
      },
      yAxis: {
        type: 'value'
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
          color: [

            '#45A5F5',
            '#e69d87',
            '#8dc1a9',
            '#ea7e53',
            '#eedd78',
            '#73a373',
            '#73b9bc',
            '#7289ab',
            '#91ca8c',
            '#f49f42'
          ],
          data:[
            test.current,
            test1.current
            // MonthliyInfo.data[3].oddcount,
            // MonthliyInfo.data[4].oddcount,
            // MonthliyInfo.data[5].oddcount,
            // MonthliyInfo.data[6].oddcount,
            // MonthliyInfo.data[7].oddcount,
            // MonthliyInfo.data[8].oddcount,
            // MonthliyInfo.data[9].oddcount,
            // MonthliyInfo.data[10].oddcount,
            // MonthliyInfo.data[11].oddcount
          ],
          type: 'bar'
        }
      ]
    };

  return (
    <div>
      <ReactEchart option={eChartsOption} style={{ height: "200px"}} MonthliyInfo={MonthliyInfo}/>
    </div>
  );
}