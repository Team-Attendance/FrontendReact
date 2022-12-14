import {useSelector} from 'react-redux'
import '../../css/statusSummary.scss'
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';

const OddApprovalStatus = () => {
    const {countInfo} = useSelector((state) => state.countInfo)
    const approvalStatusList = []
    if (countInfo.data) {
        approvalStatusList.push({title: '이상근태 조정 신청 수', value: countInfo.data.allCount, name:'test1', icon:<AssignmentOutlinedIcon/>})
        approvalStatusList.push({title: '미처리 신청 수', value: countInfo.data.unprocessed, name:'test2', icon:<AssignmentLateOutlinedIcon/>})
        approvalStatusList.push({title: '처리 신청 수', value: countInfo.data.allCount - countInfo.data.unprocessed, name:'test3', icon:<AssignmentTurnedInOutlinedIcon/>})

    }

    return (
        <div className="approval-status-wrap">
            {countInfo.data !== undefined ? (
                    <div className='approval-status-item-list'>
                        {approvalStatusList.map((item) => {
                            return (
                                <div className={`approval-status-item ${item.name}`}>
                                    <div className='icon'>{item.icon}</div>
                                    <h2>{item.title}</h2>
                                    <div className='text'>
                                        <span className='count'>{item.value}</span>
                                        <span>건</span>
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

export default OddApprovalStatus