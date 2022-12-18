import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import "./empModifyModal.scss";


const EmpModifyModal = () => {

  const firstPage = () => {
    return (
      <div>
        <div className="opacity-area"></div>
        <div className="modal-area">
          <div className="leave-form-wrap">
            <IconButton size="small" sx={{ position: 'absolute', right: '20px', top: '20px' }}>
              <CloseIcon />
            </IconButton>

            <div>
              <h1>사원 정보 수정</h1>
            </div>


            <div className="modify-table" style={{ margin: '15px 0' }}>
              <table>
                <tr>
                  <th>이름</th>
                  <td>
                    <input className="name" type="text" value="aaaa" />
                  </td>
                </tr>

                <tr>
                  <th>부서</th>
                  <td>
                    <select className="dept">
                      <option>

                      </option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>직급</th>
                  <td>
                    <select className="position">
                      <option>

                      </option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>휴대폰 번호</th>
                  <td className="phone">
                    <input className="first-number" type="text" value="aaaa" />-
                    <input className="middle-number" type="text" value="aaaa" />-
                    <input className="end-number" type="text" value="aaaa" />
                  </td>
                </tr>
                <tr>
                  <th>사내 번호</th>
                  <td className="phone">
                    <input className="first-number" type="text" value="aaaa" />-
                    <input className="middle-number" type="text" value="aaaa" />-
                    <input className="end-number" type="text" value="aaaa" />
                  </td>
                </tr>
                <tr>
                  <th>비상연락망</th>
                  <td className="phone">
                    <input className="first-number" type="text" value="aaaa" />-
                    <input className="middle-number" type="text" value="aaaa" />-
                    <input className="end-number" type="text" value="aaaa" />
                  </td>
                </tr>
                <tr>
                  <th>이메일</th>
                  <td className="email">
                    <input type="text" value="aaaa" /> @ <input type="text" value="aaaa" />
                  </td>
                </tr>
              </table>
            </div>




          </div>
        </div>
      </div>
    );
  }



  return (
    true === true &&
    <div>
      {firstPage()}
    </div>
  );
}

export default EmpModifyModal;