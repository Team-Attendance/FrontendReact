import {useSelector} from 'react-redux'
import '../../css/statusSummary.scss'

const LeaveStatus = () => {
    const {countLeave} = useSelector((state) => state.countLeave)

    const leaveStatusList = []
    if (countLeave.data !== undefined) {
        leaveStatusList.push({
            title: '총 휴가일 수',
            value: (countLeave.data.ptoYrNo === undefined ? 0 : countLeave.data.ptoYrNo)
        })
        leaveStatusList.push({
            title: '휴가 사용일 수',
            value: countLeave.data.ptoUseNum === undefined ? 0 : countLeave.data.ptoUseNum
        })
        leaveStatusList.push({
            title: '휴가 잔여일 수',
            value: countLeave.data.ptoYrNo === undefined ? 0 : countLeave.data.ptoYrNo - countLeave.data.ptoUseNum
        })
    }

    return (
        <div className="approval-status-wrap">
            {countLeave.data !== undefined ? (
                    <div className='approval-status-item-list'>
                        {leaveStatusList.map((item) => {
                            return (
                                <div className='approval-status-item'>
                                    <h2>{item.title}</h2>
                                    <div>
                                        <span>{item.value}개</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>)
                :
                <div className='approval-no-item'>
                    <p>조회된 데이터가 없습니다.</p>
                </div>}
        </div>
    )
}

export default LeaveStatus