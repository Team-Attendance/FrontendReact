import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const ModalWrap = styled.div`
`

const OpacityArea = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: whitesmoke;
  left: 0;
  top: 0;
  opacity: 0.7;
  z-index: 1;
`

const ModalArea = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: 2s;

  &.open{
    opacity: 1;
  }
`

const LeaveFormWrap = styled.div`
  width: 600px;
  padding: 40px 30px;
  border: 1px solid lightgray;
  box-shadow: 0px 0px 7px 1px lightgray;
  position: absolute;
  left: calc(50% - 300px);
  top: 100px;
  background-color: white;
  z-index: 3;

  & h1, & h3{
    font-weight: bold;
  }

  & h1{
    font-size: 1.2rem;
    border-bottom: 2px solid gray;
    padding-bottom: 7px;
  }

  & h3{
    font-size: 0.8rem;
    margin-bottom: 5px;
  }

  & div.form-item{
    margin: 20px 0;

    & input, & select{
      width: 200px;
      height: 35px;
      padding: 3px 10px;
      outline: none;
    }

    & textarea{
      width: 100%;
      height: 300px;
      resize: none;
      padding: 15px;
      outline: none;
    }
  }

  & input[type=submit]{
    width: 100%;
    padding: 10px 0;
    background-color: whitesmoke;
    border: 1px solid lightgray;
    color: black;
    font-weight: bold;
  }
`

const LeaveModal = ({ data, view, onClose }) => {
  return (
    view === true ?
      <ModalWrap>
        <OpacityArea onClick={onClose}></OpacityArea>
        <ModalArea className={view === true && "open"}>
          <LeaveFormWrap>
            <IconButton size="small" sx={{position: 'absolute', right: '20px', top: '20px'}} onClick={onClose}>
              <CloseIcon />
            </IconButton>
            
            <div>
              <h1>휴가신청</h1>
            </div>
            <div>
              <form>
                <div className="form-item">
                  <h3>휴가종류</h3>
                  <select>
                    <option>휴가 종류를 선택하세요</option>
                    <option>연차</option>
                    <option>오전 반차</option>
                    <option>오후 반차</option>
                  </select>
                </div>
                <div className="form-item">
                  <h3>휴가일 선택</h3>
                  <input type="date" /> - <input type="date" />
                </div>
                <div className="form-item">
                  <h3>신청사유</h3>
                  <textarea placeholder="신청 사유를 입력하세요">

                  </textarea>
                </div>
                <div>
                  <input type="submit" value="신청하기" />
                </div>
              </form>
            </div>
          </LeaveFormWrap>
        </ModalArea>
      </ModalWrap>
      :
      <></>
  );
}

export default LeaveModal;