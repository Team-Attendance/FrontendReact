import "./basicInfo.scss";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { formatDate, formatHyphenFulldate } from "../../modules/cal_function";
import {useState} from "react";
import ModalUpdate from "../../components/Modal/ModalUpdate";
import EmpInfoUpdateModal from "../../components/Modal/EmpInfoUpdateModal";
import {useSelector} from "react-redux";

export default function BasicInfo({ reportData, img }) {
  const [modal, setModal] = useState(false)
  return (
    <div className="basic-info-area">
      {modal && (
          <ModalUpdate closeModal={() => setModal(!modal)}>
            <EmpInfoUpdateModal
                empInfoDetail={reportData.empInfo}
                closeModal={() => setModal(!modal)}
            />
          </ModalUpdate>
      )}
      <div style={{ paddingRight: '15px' }}>
        <h3 className="title"><EventAvailableIcon sx={{ marginRight: '3px' }} />
          <span>기본 정보</span>
          <button onClick={()=>{setModal(!modal)}}>수정하기</button>
        </h3>

        <div className="basic-info-wrap">
          <div>
            <div className="image-area">
              {img &&
                <img style={{ width: '100%', height: '186px', border: '1px solid lightgray' }} src={URL.createObjectURL(img)} alt="user" />
              }
            </div>
            <div className="info-area">
              <table>
                <tr>
                  <th width="20%">
                    <span>이름</span>
                  </th>
                  <td width="30%">{reportData.empInfo.emp_name}</td>
                  <th width="20%">
                    <span>사번</span>
                  </th>
                  <td width="30%">{reportData.empInfo.emp_no}</td>
                </tr>
                <tr>
                  <th>
                    <span>부서</span>
                  </th>
                  <td>{reportData.empInfo.dept_name}</td>
                  <th>
                    <span>직급</span>
                  </th>
                  <td>{reportData.empInfo.emp_position}</td>
                </tr>
                <tr>
                  <th>
                    <span>입사일자</span>
                  </th>
                  <td>{formatHyphenFulldate(formatDate(reportData.empInfo.emp_first_day_of_work))}</td>
                  <th>
                    <span>휴대폰 번호</span>
                  </th>
                  <td>{reportData.empInfo.emp_cell_phone}</td>
                </tr>
                <tr>
                  <th>
                    <span>사내번호</span>
                  </th>
                  <td>{reportData.empInfo.emp_office_phone}</td>
                  <th>
                    <span>비상연락망</span>
                  </th>
                  <td>{reportData.empInfo.emp_contact_list}</td>
                </tr>
                <tr>
                  <th>
                    <span>이메일</span>
                  </th>
                  <td colSpan={3}>{reportData.empInfo.emp_email}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}