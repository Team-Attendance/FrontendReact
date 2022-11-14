const EmpType = {
    GET_EMP: 'GET_EMP',
    GET_EMP_SUCCESS: 'GET_EMP_SUCCESS',
    GET_EMP_FAILURE: 'GET_SAMPLE_FAILURE',
}

const LeaveApprovalType = {
    GET_LEAVE_APPROVAL: 'GET_LEAVE_APPROVAL',
    GET_LEAVE_APPROVAL_SUCCESS: 'GET_LEAVE_APPROVAL_SUCCESS',
    GET_LEAVE_APPROVAL_FAILURE: 'GET_LEAVE_APPROVAL_FAILURE',
}

const Types = {
    ...EmpType,
    ...LeaveApprovalType
}

export default Types;