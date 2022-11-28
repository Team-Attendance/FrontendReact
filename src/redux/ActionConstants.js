const ConfigurationType = {
    GET_CONFIG: 'GET_CONFIG',
    GET_CONFIG_SUCCESS: 'GET_CONFIG_SUCCESS',
    GET_CONFIG_FAILURE: 'GET_CONFIG_FAILURE',
    
    GET_CONFIG_RESULT: 'GET_CONFIG_RESULT',
    GET_CONFIG_RESULT_SUCCESS: 'GET_CONFIG_RESULT_SUCCESS',
    GET_CONFIG_RESULT_FAILURE: 'GET_CONFIG_RESULT_FAILURE',

    GET_CONFIG_BIZ: 'GET_CONFIG_BIZ',
    GET_CONFIG_BIZ_SUCCESS: 'GET_CONFIG_BIZ_SUCCESS',
    GET_CONFIG_BIZ_FAILURE: 'GET_CONFIG_BIZ_FAILURE',
}

const ReportType = {
    GET_REPORT_LEAVE: 'GET_REPORT_LEAVE',
    GET_REPORT_LEAVE_SUCCESS: 'GET_REPORT_LEAVE_SUCCESS',
    GET_REPORT_LEAVE_FAILURE: 'GET_REPORT_LEAVE_FAILURE',

    GET_REPORT_ODD: 'GET_REPORT_Odd',
    GET_REPORT_ODD_SUCCESS: 'GET_REPORT_ODD_SUCCESS',
    GET_REPORT_ODD_FAILURE: 'GET_REPORT_ODD_FAILURE',

}

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

const OddApprovalType = {
    GET_ODD_APPROVAL: 'GET_ODD_APPROVAL',
    GET_ODD_APPROVAL_SUCCESS: 'GET_ODD_APPROVAL_SUCCESS',
    GET_ODD_APPROVAL_FAILURE: 'GET_ODD_APPROVAL_FAILURE',
}

const EmpInfoType = {
    POST_EMP_INFO : 'POST_EMP_INFO',
    POST_EMP_INFO_SUCCESS : 'POST_EMP_INFO_SUCCESS',
    POST_EMP_INFO_FAILURE : 'POST_EMP_INFO_FAILURE',
    GET_EMPINFO : 'GET_EMPINFO',
    GET_EMPINFO_SUCCESS : 'GET_EMPINFO_SUCCESS',
    GET_EMPINFO_FAILURE : 'GET_EMPINFO_FAILURE',
    
}
const LoginType = {
    POST_LOGINEMP : 'POST_LOGINEMP',
    POST_LOGINEMP_SUCCESS : 'POST_LOGINEMP_SUCCESS',
    POST_LOGINEMP_FAILURE : 'POST_LOGINEMP_FAILURE',}

const Types = {
    ...EmpType,
    ...LeaveApprovalType,
    ...OddApprovalType,
    ...EmpInfoType,
    ...LoginType,
    ...ConfigurationType,
    ...ReportType
}

export default Types;