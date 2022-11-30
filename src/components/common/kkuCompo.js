import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const kkuCompo = () => {
  return (
    <div style={{ width: '450px', border: '1px solid gray', padding: '0 10px', borderRadius: '15px' }}>
      <div style={{ padding: '15px 0' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'cornflowerblue' }}>실시간 기록</h2>
      </div>
      <div>

        {test.map(() => {
          return (
            <div style={{ display: 'flex', padding: '10px 0' }}>
              <div style={{ width: '50px', height: '50px', position: 'relative', borderRadius: '50%', overflow: 'hidden' }}>
                <img src="" alt='img' style={{ width: '100%', height: '100%' }} />
              </div>
              <div style={{ width: '140px', padding: '2px 20px' }}>
                <div><span style={{ fontWeight: 'bold', fontSize: '1rem', lineHeight: '18px' }}>김경욱</span></div>
                <div><span style={{ fontWeight: 'bold', fontSize: '0.8rem', color: 'gray', lineHeight: '18px' }}>연구보조원</span></div>
              </div>
              <div style={{ width: '240px' }}>
                <div style={{ border: '1px solid lightgray', height: '100%', display: 'flex', borderRadius: '10px' }}>
                  <div style={{ width: '40%', backgroundColor: 'yellow', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <AccessAlarmsIcon sx={{ color: 'blue', fontSize: '20px', lineHeight: '20px', marginRight: '5px' }} />
                    <span style={{ fontSize: '1rem', fontWeight: 'bold', lineHeight: '20px' }}>지각</span>
                  </div>
                  <div style={{ width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '1rem', fontWeight: 'bold', lineHeight: '20px' }}>오후 07 : 30</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}





      </div>
    </div>
  );
}

export default kkuCompo;