import styled from 'styled-components'

const StatusWrap = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 0 30px;
  padding-bottom: 10px;
`

const OddStatusItem = styled.div`
  width: 32%;
  border-radius: 10px;
  position: relative;
  

  &.normal{
    background-color: #9FE6A0;
  }

  &.odd-biz{
    background-color: #F29191;
  }

  &.percent{
    background-color: #93B5C6;
  }

  & h4{
    position: absolute;
    left: 10px;
    top: 8px;
    font-weight: bold;
  }

  & > div{
    text-align: center;
    padding-top: 25px;
    padding-bottom: 15px;
  }

  & span{
    font-size: 1.4rem;
    font-weight: bold;
  }
`


const LeaveStatusItem = styled.div`
  width: 24%;
  border-radius: 10px;
  background-color: lightgray;
  position: relative;

  & h4{
    position: absolute;
    left: 10px;
    top: 8px;
    font-weight: bold;
  }

  & > div{
    text-align: center;
    padding-top: 25px;
    padding-bottom: 15px;
  }

  &.normal{
    background-color: #CCF2F4;
  }

  &.morning{
    background-color: #FFBC97;
  }

  &.afternoon{
    background-color: #FFE9B1;
  }

  &.remainder{
    background-color: #C9CBFF;
  }

  & span{
    font-size: 1.4rem;
    font-weight: bold;
  }
`

const CalanderStatus = () => {
  return(
    <StatusWrap>
        <div style={{marginBottom: '10px'}}>
          <h2 style={{fontSize: '1rem', fontWeight: 'bold'}}>일별 근태 현황</h2>
        </div>
        
        <div style={{display: 'flex'}}>  
          <div style={{width: '40%', height: '100%', fontSize: '0.8rem', paddingRight: '20px'}}>
            <h3 style={{width: '100%', fontWeight: 'bold'}}>2022년 11월 근태 현황</h3>

            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '5px'}}>

              <OddStatusItem className="normal">
                <h4>정상근무</h4>
                <div>
                  <span>5일</span>
                </div>
              </OddStatusItem>

              <OddStatusItem className="odd-biz">
                <h4>이상근무</h4>
                <div>
                  <span>5일</span>
                </div>
              </OddStatusItem>

              <OddStatusItem className="percent">
                <h4>근태율</h4>
                <div>
                  <span>3%</span>
                </div>
              </OddStatusItem>





            </div>
          </div>


          <div style={{width: '60%', height: '100%', fontSize: '0.8rem', paddingLeft: '20px' }}>
            <h3 style={{width: '100%', fontWeight: 'bold'}}>2022년 11월 휴가 현황</h3>

            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '5px'}}>
              
              <LeaveStatusItem className="normal">
                <h4>휴가</h4>
                <div>
                  <span>5일</span>
                </div>
              </LeaveStatusItem>

              <LeaveStatusItem className="morning">
                <h4>오전휴가</h4>
                <div>
                  <span>5일</span>
                </div>
              </LeaveStatusItem>

              <LeaveStatusItem className="afternoon">
                <h4>오후휴가</h4>
                <div>
                  <span>5일</span>
                </div>
              </LeaveStatusItem>

              <LeaveStatusItem className="remainder">
                <h4>잔여휴가</h4>
                <div>
                  <span>35일</span>
                </div>
              </LeaveStatusItem>



            </div>
          </div>
        </div>
      </StatusWrap>
  );
}

export default CalanderStatus;