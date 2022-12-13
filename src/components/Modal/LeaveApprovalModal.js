import React from "react";

import {updateLeaveApproval} from '../../api/LeaveApprovalAPI'
import './ApprovalModal.scss'
import Swal from "sweetalert2";

const LeaveApprovalModal = ({auth, data, closeModal, changeFlag}) => {

    const approver = sessionStorage.getItem("empName")


    const dateFormatting = (millisec) => {
        // millisec를 날짜 형식으로, YYYY. MM. DD.를 YYYY-MM-DD로 변경
        const date = new Date(millisec).toLocaleDateString().replace(/\./g, '').replace(/\s/g, '/')

        return date
    }

    const changeState = async (s) => {
        const update = [{
            'empNo': data.empNo,
            'state': s,
            'startDate': data.leaveStartDate,
            'endDate': data.leaveEndDate,
            'approver': approver
        }]

        if (await updateLeaveApproval(update)) {
            Swal.fire({
                title: (s == 1 ? '승인되었습니다.' : '반려되었습니다.'),
                icon: 'success'
            })
        } else {
            Swal.fire({
                title: '상태 변경에 실패했습니다.',
                icon: 'error'
            })
        }
        closeModal()
        changeFlag()
    }

    return (
        <div className="myPage">
            <div>
                <h1 className="infoTitle">휴가 신청</h1>
            </div>
            <div className="infoBox">
                <div className="infoContent">
                    <ul className="infoUl">
                        <li className="infoLi">
                            <div className="infoLabel">이름</div>
                            <div className="infoInput">{data.empName}</div>
                        </li>
                        <li className="infoLi">
                            <div className="infoLabel">직급</div>
                            <div className="infoInput">{data.empPosition}</div>
                        </li>
                        <li className="infoLi">
                            <div className="infoLabel">사번</div>
                            <div className="infoInput" readOnly>{data.empNo}</div>
                        </li>
                        <li className="infoLi">
                            <div className="infoLabel"> 신청 일자</div>
                            <div className="infoInput">{dateFormatting(data.leaveAdjDate)}</div>
                        </li>
                        <li className="infoLi">
                            <div className="infoLabel"> 휴가 시작 일자</div>
                            <div className="infoInput">{dateFormatting(data.leaveStartDate)}</div>
                        </li>
                        <li className="infoLi">
                            <div className="infoLabel"> 휴가 종료 일자</div>
                            <div className="infoInput">{dateFormatting(data.leaveEndDate)}</div>
                        </li>
                        <li className="infoLi">
                            <div className="infoLabel">휴가 종류</div>
                            <div className="infoInput">{data.leaveType} </div>
                        </li>
                        <li className="infoLi">
                            <div className="infoLabel">휴가 사유</div>
                            <div className="infoInput">{data.leaveDetail}</div>
                        </li>
                    </ul>
                    <div className="button">
                        {auth === 1 ?
                            !data.leaveAdjState && (
                                <div>
                                    <button onClick={() => changeState(1)}>승인</button>
                                    <button onClick={() => changeState(2)}>반려</button>
                                </div>
                            ) :
                            !data.leaveAdjState && (
                                <div>
                                    <button onClick={() => changeState(3)}>취소</button>
                                </div>
                            )
                        }
                        <button onClick={closeModal}>닫기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaveApprovalModal;