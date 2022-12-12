import { useSelector } from 'react-redux'
import '../../css/LeaveStatus.scss'

const OddApprovalStatus = () => {
    const { countInfo } = useSelector((state) => state.countInfo)
    console.log(countInfo.data)
    const approvalStatusList = []
    if(countInfo.data){
         approvalStatusList.push({title: '이상근태 조정 신청 수', value: countInfo.data.allCount})
         approvalStatusList.push( {title: '미처리 신청 수', value: countInfo.data.unprocessed})
         approvalStatusList.push({title: '처리 신청 수', value: countInfo.data.allCount-countInfo.data.unprocessed})
                                    
    }

    return(
        <div className="approval-status-wrap">
            {countInfo.data !== undefined ? (
                <div className='approval-status-item-list'>
                    {approvalStatusList.map((item) => {
                        return(
                            <div className='approval-status-item'>
                                    <h2>{item.title}</h2>
                                <div>
                                    <span>{item.value}건</span>
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