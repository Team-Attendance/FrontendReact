import React from "react";
import { updateOddApproval } from "../../api/OddApprovalAPI";
import './ApprovalModal.scss'
import Swal from "sweetalert2";

const OddApprovalModal = ({ auth, data, closeModal, changeFlag }) => {

    const approver = sessionStorage.getItem("empName")

    const dateFormatting = (millisec) => {
        // millisec를 날짜 형식으로, YYYY. MM. DD.를 YYYY-MM-DD로 변경
        const date = new Date(millisec).toISOString().substring(0, 10)

        return date
    }

    const changeState = async (s) => {
        const update = [{
            'empNo': data.empNo,
            'state': s,
            'type': data.oddBizType,
            'oddBizDate': data.oddBizDate,
            'approver': approver
        }]

        if (await updateOddApproval(update)) {
            switch (s) {
                case 1:
                    Swal.fire({
                        title: '승인되었습니다',
                        confirmButtonText: '닫기',
                        confirmButtonColor: '#3085d6',
                        icon: 'success'
                    })
                    break;
                case 2:
                    Swal.fire({
                        title: '반려되었습니다',
                        confirmButtonText: '닫기',
                        confirmButtonColor: '#3085d6',
                        icon: 'success'
                    })
                    break;
                case 3:
                    Swal.fire({
                        title: '취소되었습니다',
                        confirmButtonText: '닫기',
                        confirmButtonColor: '#3085d6',
                        icon: 'success'
                    })
                    break;
                default:
                    break;
            }
        } else {
            Swal.fire({
                title: '상태 변경에 실패했습니다.',
                confirmButtonText: '닫기',
                confirmButtonColor: '#3085d6',
                icon: 'error'
            })
        }
        closeModal()
        changeFlag()
    }

    return (
        <div className="approvalModal" onClick={closeModal}>
            <div className="modalBody" onClick={(e) => e.stopPropagation()} style={{ height: '550px' }}>
                <button id="modalCloseBtn" onClick={closeModal}>
                    ✖
                </button>
                <div className="approval-modal">
                    <div>
                        <h1 className="approval-title">이상 근태 조정 신청</h1>
                    </div>
                    <div className="approval-box">
                        <div className="approval-content">
                            <ul className="approval-ul">
                                <li className="approval-li">
                                    <div className="approval-label">이름</div>
                                    <div className="approval-data"> {data.empName} </div>
                                </li>
                                <li className="approval-li">
                                    <div className="approval-label">사번</div>
                                    <div className="approval-data"> {data.empNo} </div>
                                </li>
                                <li className="approval-li">
                                    <div className="approval-label">직급</div>
                                    <div className="approval-data"> {data.empPosition} </div>
                                </li>
                                <li className="approval-li">
                                    <div className="approval-label"> 신청 일자</div>
                                    <div className="approval-data"> {dateFormatting(data.oddBizAdjDate)} </div>
                                </li>
                                <li className="approval-li">
                                    <div className="approval-label"> 이상 근태 발생 일자</div>
                                    <div className="approval-data"> {dateFormatting(data.oddBizDate)} </div>
                                </li>
                                <li className="approval-li">
                                    <div className="approval-label"> 이상 근태 종류</div>
                                    <div className="approval-data">{data.oddBizType}</div>
                                </li>
                                <li className="approval-li">
                                    <div className="approval-label">조정 신청 사유</div>
                                    <div className="approval-data"> {data.oddBizAdjDetail} </div>
                                </li>
                            </ul>
                            <div className="approval-button">
                                <button onClick={closeModal}>닫기</button>
                                {auth === 1 ?
                                    !data.oddBizAdjState && (
                                        <div>
                                            <button className="mg-l-15" onClick={() => changeState(1)}>승인</button>
                                            <button className="mg-l-15" onClick={() => changeState(2)}>반려</button>
                                        </div>
                                    ) :
                                    !data.oddBizAdjState && (
                                        <div>
                                            <button onClick={() => changeState(3)}>신청 취소</button>
                                        </div>
                                    )
                                }

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OddApprovalModal;