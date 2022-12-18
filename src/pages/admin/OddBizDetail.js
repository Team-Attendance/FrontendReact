export default function OddBizDetail({ reportData }) {

  
  const monthBizCountList = reportData.monthBizCount;

  const now = new Date();

  let totalCount = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  let normalCount = reportData.oddBizStatus.normalCount;
  let tardyCount = 0;
  let leaveEarlyCount = 0;
  let absenteeismCount = 0;

  let normalPersent =  Math.round(((normalCount / (totalCount)) * 100) * 10) / 10;
  let tardyPersent = 0;
  let leaveEarlyPersent = 0;
  let absenteeisimPersent = 0;

  monthBizCountList.forEach(element => {
    switch (element.odd_biz_type) {
      case "지각":
        tardyCount = element.odd_biz_count;
        tardyPersent = Math.round(((tardyCount / (totalCount)) * 100) * 10) / 10;
        break;
      case "조퇴":
        leaveEarlyCount = element.odd_biz_count;
        leaveEarlyPersent = Math.round(((leaveEarlyCount / (totalCount)) * 100) * 10) / 10;
        break;
      case "결근":
        absenteeismCount = element.odd_biz_count;
        absenteeisimPersent = Math.round(((absenteeismCount / (totalCount)) * 100) * 10) / 10;
        break;
      default:
        break;
    }
  });

 



  return (
    <>
      <div className="detail-element">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <div style={{ width: '57px', textAlign: 'right', fontWeight: 'bold' }}>
            <span>정상</span>
          </div>

          <div style={{ width: '170px', height: '10px', backgroundColor: 'whitesmoke', border: '1px solid lightgray', margin: '0 7px', borderRadius: '20px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ width: `${normalPersent}%`, height: '100%', position: 'absolute', backgroundColor: '#059BFF' }}>

            </div>
          </div>
          <div style={{ width: '30px', fontWeight: 'bold' }}>
            <span>{normalCount}일</span>
          </div>
        </div>
      </div>


      <div className="detail-element">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <div style={{ width: '57px', textAlign: 'right', fontWeight: 'bold' }}>
            <span>결근</span>
          </div>

          <div style={{ width: '170px', height: '10px', backgroundColor: 'whitesmoke', border: '1px solid lightgray', margin: '0 7px', borderRadius: '20px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ width: `${absenteeisimPersent}%`, height: '100%', position: 'absolute', backgroundColor: '#DC3535' }}>

            </div>
          </div>
          <div style={{ width: '30px', fontWeight: 'bold' }}>
            <span>{absenteeismCount}회</span>
          </div>
        </div>
      </div>

      <div className="detail-element">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <div style={{ width: '57px', textAlign: 'right', fontWeight: 'bold' }}>
            <span>지각</span>
          </div>

          <div style={{ width: '170px', height: '10px', backgroundColor: 'whitesmoke', border: '1px solid lightgray', margin: '0 7px', borderRadius: '20px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ width: `${tardyPersent}%`, height: '100%', position: 'absolute', backgroundColor: '#F49D1A' }}>

            </div>
          </div>
          <div style={{ width: '30px', fontWeight: 'bold' }}>
            <span>{tardyCount}회</span>
          </div>
        </div>
      </div>




      <div className="detail-element">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <div style={{ width: '57px', textAlign: 'right', fontWeight: 'bold' }}>
            <span>조퇴</span>
          </div>

          <div style={{ width: '170px', height: '10px', backgroundColor: 'whitesmoke', border: '1px solid lightgray', margin: '0 7px', borderRadius: '20px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ width: `${leaveEarlyPersent}%`, height: '100%', position: 'absolute', backgroundColor: '#FFE15D' }}>

            </div>
          </div>
          <div style={{ width: '30px', fontWeight: 'bold' }}>
            <span>{leaveEarlyCount}회</span>
          </div>
        </div>
      </div>








    </>
  );
}