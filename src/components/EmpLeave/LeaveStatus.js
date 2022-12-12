import {useSelector} from 'react-redux'
import '../../css/LeaveStatus.scss'

const LeaveStatus = () => {
    const {countLeave} = useSelector((state) => state.countLeave)

    const leaveStatusList = []
    if (countLeave.data !== undefined) {
        leaveStatusList.push({title: '총 휴가일 수', value: countLeave.data.ptoYrNo})
        leaveStatusList.push({title: '휴가 사용일 수', value: countLeave.data.ptoUseNum})
        leaveStatusList.push({title: '휴가 잔여일 수', value: countLeave.data.ptoYrNo - countLeave.data.ptoUseNum})
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
                <></>}
        </div>
    )
}

export default LeaveStatus