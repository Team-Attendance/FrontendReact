import React, {useEffect, useRef, useState} from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {useDispatch, useSelector} from "react-redux";
import ConfigurationActions from "../../redux/modules/Configuration/ConfigurationActions";
import {updateBizHour} from "../../api/ConfigurationAPI"
import Swal from "sweetalert2";

const TimeConfig = ({closeModal}) => {
    const [startOpen, setStartOpen] = useState(false)
    const [finOpen, setFinOpen] = useState(false)
    const {bizHourInfo} = useSelector((state) => state.bizHourInfo)
    const [startTime, setStartTime] = useState('')
    const [finTime, setFinTime] = useState('')
    const startRef = useRef(null)
    const finRef = useRef(null)

    const dispatch = useDispatch()
    const timeArr1 = []
    const timeArr2 = []
    for (let i = 0; i < 24; i++) {
        let hour = ''
        if (i < 10) {
            hour = '0' + i
        } else {
            hour = i
        }
        timeArr1.push(<li key={`${hour}:00`} onClick={() => {
            setStartTime(`${hour}:00`)
        }}>{hour}:00</li>)
        timeArr1.push(<li key={`${hour}:30`} onClick={() => {
            setStartTime(`${hour}:30`)
        }}>{hour}:30</li>)
        timeArr2.push(<li key={`${hour}:00`} onClick={() => {
            setFinTime(`${hour}:00`)
        }}>{hour}:00</li>)
        timeArr2.push(<li key={`${hour}:30`} onClick={() => {
            setFinTime(`${hour}:30`)
        }}>{hour}:30</li>)
    }
    const openStartOptions = () => {
        setStartOpen(!startOpen)
        setFinOpen(false)
    }
    const openFinOptions = () => {
        setStartOpen(false)
        setFinOpen(!finOpen)
    }

    useEffect(() => {
        // // dropDown
        const startClick = (e) => {
            if (startRef.current !== null && !startRef.current.contains(e.target)) {
                // 드롭다운 메뉴 이외의 공간 클릭
                setStartOpen(!startOpen)
            }
        }
        const finClick = (e) => {
            if (finRef.current !== null && !finRef.current.contains(e.target)) {
                setFinOpen(!finOpen)
            }
        }
        if (startOpen) {
            window.addEventListener("click", startClick)
            return () => {
                window.removeEventListener("click", startClick)
            }
        }
        if (finOpen) {
            window.addEventListener("click", finClick)
            return () => {
                window.removeEventListener("click", finClick)
            }
        }
    }, [startOpen, finOpen])

    useEffect(() => {
        dispatch(ConfigurationActions.getBizHour(sessionStorage.getItem("deptName")))
    },[dispatch])

    useEffect(() => {
        setStartTime(bizHourInfo.data?.bhGetInto?.substring(0,5))
        setFinTime(bizHourInfo.data?.bhGetOff?.substring(0,5))
    },[bizHourInfo?.data])

    const updateTime = async() => {
        if(bizHourInfo.data?.bhGetInto.substring(0,5) === startTime &&
            bizHourInfo.data?.bhGetOff.substring(0,5) === finTime){
            return
        }
        const data = {
            'deptName': sessionStorage.getItem("deptName"),
            'bhGetInto': startTime,
            'bhGetOff': finTime
        }
        if(await updateBizHour(data)) {
            alert('설정이 완료되었습니다.')
        } else {
            alert('설정을 변경하지 못했습니다.')
        }
        // dispatch(ConfigurationActions.getBizHour(sessionStorage.getItem("deptName")))
    }
    return (
        <div>
            <div className='setting-time'>
            <span className='time-title'>근무시간</span>
                <div className='select'>
                    <span className={startOpen ? 'open' : ''} onClick={openStartOptions} ref={startRef}>{startTime}
                        <AccessTimeIcon sx={{color: 'gray', marginLeft: '7px'}}/></span>
                    {startOpen &&
                        <ul className={'options'}>
                            {timeArr1}
                        </ul>}
                <span style={{border:"none", padding:"0 10px"}}>-</span>
                </div>
                <div className='select'>
                    <span className={finOpen ? 'open' : ''} onClick={openFinOptions} ref={finRef}>{finTime}
                        <AccessTimeIcon sx={{color: 'gray', marginLeft: '7px'}}/></span>
                    {finOpen &&
                        <ul className={'options'}>
                            {timeArr2}
                        </ul>}
                </div>
            </div>
            <div className='current-time'>
                <span>현재 정규 출퇴근 시간: </span>
                {bizHourInfo.data &&
                    <span>{bizHourInfo?.data?.bhGetInto?.substring(0,5)} ~ {bizHourInfo.data?.bhGetOff?.substring(0,5)}</span>
                }
            </div>
            <div className="config-button">
                <button onClick={updateTime}>저장</button>
                <button onClick={closeModal}>닫기</button>
            </div>
        </div>
    )
}

export default TimeConfig