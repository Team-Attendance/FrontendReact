
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PieChartIcon from '@mui/icons-material/PieChart';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import './reportPage.scss'

import ReportOddBizChart from "./ReportOddBizChart";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import LeaveApplyTable from "../../table/LeaveApplyTable";
import OddBizAdjTable from "../../table/OddBizAdjTable";
import OddBizDetail from "./OddBizDetail";

import ArticleIcon from '@mui/icons-material/Article';
import WeekWorkTimeChart from "./WeekWorkTimeChart";
import YearOddBizChart from "./YearOddBizChart";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import EmpSearchModal from "../../components/Modal/EmpSearchModal";
import EmpInfoActions from "../../redux/modules/EmpInfo/EmpInfoActions";
import EmpActions from "../../redux/modules/EmpManagement/EmpActions";
import BasicInfo from "./BasicInfo";
import ReportLeaveUseChart from './ReportLeaveUseChart';



export function ReportPage() {
  const { empNo } = useParams();

  const dispatch = useDispatch();

  const [reportData, setReportData] = useState(null);
  const [empModal, setEmpModal] = useState(false);
  const [img, setImg] = useState('');


  const getImg = useCallback(async () => {
    await axios({
      url: `${process.env.REACT_APP_API_URL}/emp/images/${empNo}`,
      method: "GET",
      responseType: 'blob'
    }).then((response) => {
      setImg(response.data);
    })
      .catch((error) => {
        console.log(error);
      })
  },[empNo])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/report-data`, {
      params: {
        empNo: empNo,
      }
    }).then(
      (response) => {
        setReportData(response.data)
        getImg();
      }
    )
  }, [empNo, getImg])


  
  useEffect(() => {
    dispatch(EmpActions.getAllEmps())
  }, [dispatch])




  const openSearchModal = () => {
    setEmpModal(!empModal);
    dispatch(EmpInfoActions.getAllEmps())
  }



  return (
    <>
      {reportData &&

        <div className="common-container report-page-wrap">
          {empModal && (
            <EmpSearchModal
              closeModal={() => setEmpModal(!empModal)} />
          )}
          <div>
            <div className="report-wrap">
              <div className="first-area">
                <BasicInfo reportData={reportData} img={img}/>
                <div className="odd-biz-and-leave-area">
                  <div className="leave-use-chart-area">
                    <h3 className="title"><PieChartIcon sx={{ marginRight: '3px' }} /><span>?????? ?????????</span></h3>
                    <div className="leave-use-chart">
                      <ReportLeaveUseChart reportData={reportData} />
                    </div>
                  </div>

                  <div className="odd-biz-chart-area">
                    <h3 className="title"><PieChartIcon sx={{ marginRight: '3px' }} /><span>?????? ???????????????</span></h3>
                    <div className="odd-biz-chart">
                      <ReportOddBizChart reportData={reportData} />
                    </div>
                  </div>

                  <div className="odd-biz-detail-area">
                    <h3 className="title"><ArticleIcon sx={{ marginRight: '3px' }} /><span>?????? ???????????? ??????</span></h3>
                    <div className="odd-biz-detail-wrap">
                      <OddBizDetail reportData={reportData} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="second-area">
                <div className="leave-apply-area">
                  <div>
                    <h3 className="title"><PendingActionsIcon sx={{ marginRight: '3px' }} /><span>?????? ?????? ??????</span></h3>
                    <div className="leave-apply-table-wrap">
                      <LeaveApplyTable reportData={reportData} />
                    </div>
                  </div>
                </div>

                <div className="week-work-time-chart-area">
                  <div>
                    <h3 className="title"><LeaderboardIcon sx={{ marginRight: '3px' }} /><span>?????? ?????? ?????? ??????</span></h3>
                    <div className="week-work-time-chart-wrap">
                      <WeekWorkTimeChart reportData={reportData} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="third-area">
                <div className="odd-biz-adj-table-area">
                  <div>
                    <h3 className="title"><PendingActionsIcon sx={{ marginRight: '3px' }} /><span>???????????? ?????? ?????? ??????</span></h3>
                    <div className="odd-biz-adj-table-wrap">
                      <OddBizAdjTable reportData={reportData} />
                    </div>
                  </div>
                </div>
                
                <div className="year-odd-biz-chart-area">
                  <div>
                    <h3 className="title"><LeaderboardIcon sx={{ marginRight: '3px' }} /><span>?????? ?????? ?????? ??????</span></h3>
                    <div className="year-odd-biz-chart-wrap">
                      <YearOddBizChart reportData={reportData} />
                    </div>
                  </div>
                </div>
              </div>
              <button className="emp-search-button" onClick={openSearchModal}>?????? ??????</button>
            </div>
          </div>
        </div>
      }
    </>
  );
}