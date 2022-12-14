import {useSelector} from 'react-redux'
import '../../css/statusSummary.scss'
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
const LeaveStatus = () => {
    const {countLeave} = useSelector((state) => state.countLeave)

    const leaveStatusList = []
    if (countLeave.data !== undefined) {
        leaveStatusList.push({
            title: '총 휴가일 수',
            value: (countLeave.data.ptoYrNo === undefined ? 0 : countLeave.data.ptoYrNo),
            icon: <EventNoteOutlinedIcon/>
        })
        leaveStatusList.push({
            title: '휴가 사용일 수',
            value: countLeave.data.ptoUseNum === undefined ? 0 : countLeave.data.ptoUseNum,
            icon: <InsertInvitationOutlinedIcon/>
        })
        leaveStatusList.push({
            title: '휴가 잔여일 수',
            value: countLeave.data.ptoYrNo === undefined ? 0 : countLeave.data.ptoYrNo - countLeave.data.ptoUseNum,
            icon: <EventAvailableOutlinedIcon/>
        })
    }

    return (
        <div className="approval-status-wrap">
            {countLeave.data !== undefined ? (
                    <div className='approval-status-item-list'>
                        {leaveStatusList.map((item) => {
                            return (
                                <div className='approval-status-item'>
                                    <div className='icon'>{item.icon}</div>
                                    <h2>{item.title}</h2>
                                    <div className='text'>
                                        <span className='count'>{item.value}</span>
                                        <span>개</span>
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