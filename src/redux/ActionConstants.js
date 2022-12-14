const ConfigurationType = {
    GET_AUTH: 'GET_AUTH_ALL',
    GET_AUTH_SUCCESS: 'GET_AUTH_SUCCESS',
    GET_AUTH_FAILURE: 'GET_AUTH_FAILURE',

    GET_BIZ_HOUR: 'GET_BIZ_HOUR',
    GET_BIZ_HOUR_SUCCESS: 'GET_BIZ_HOUR_SUCCESS',
    GET_BIZ_HOUR_FAILURE: 'GET_BIZ_HOUR_FAILURE'
}

const ReportType = {
    GET_REPORT_WEEKLIY: 'GET_REPORT_WEEKLIY',
    GET_REPORT_WEEKLIY_SUCCESS: 'GET_REPORT_WEEKLIY_SUCCESS',
    GET_REPORT_WEEKLIY_FAILURE: 'GET_REPORT_WEEKLIY_FAILURE',

    GET_REPORT_MONTHLIY: 'GET_REPORT_MONTHLIY',
    GET_REPORT_MONTHLIY_SUCCESS: 'GET_REPORT_MONTHLIY_SUCCESS',
    GET_REPORT_MONTHLIY_FAILURE: 'GET_REPORT_MONTHLIY_FAILURE',

    GET_REPORT_ODD: 'GET_REPORT_ODD',
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

    GET_EMPINFO_UPDATE: 'GET_EMPINFO_UPDATE',
    GET_EMPINFO_UPDATE_SUCCESS: 'GET_EMPINFO_UPDATE_SUCCESS',
    GET_EMPINFO_UPDATE_FAILURE: 'GET_EMPINFO_UPDATE_FAILURE',

    GET_EMPEMAIL: 'GET_EMPEMAIL',
    GET_EMPEMAIL_SUCCESS: 'GET_EMPEMAIL_SUCCESS',
    GET_EMPEMAIL_FAILURE: 'GET_EMPEMAIL_FAILURE',

    GET_LEAVE_COUNT : 'GET_LEAVE_COUNT',
    GET_LEAVE_COUNT_SUCCESS : 'GET_LEAVE_COUNT_SUCCESS',
    GET_LEAVE_COUNT_FAILURE : 'GET_LEAVE_COUNT_FAILURE',

}
const LoginType = {
    POST_LOGINEMP : 'POST_LOGINEMP',
    POST_LOGINEMP_SUCCESS : 'POST_LOGINEMP_SUCCESS',
    POST_LOGINEMP_FAILURE : 'POST_LOGINEMP_FAILURE',}

const countType = {
    GET_APPROVAL_COUNT: 'GET_APPROVAL_COUNT',
    GET_APPROVAL_COUNT_SUCCESS: 'GET_APPROVAL_COUNT_SUCCESS',
    GET_APPROVAL_COUNT_FAILURE: 'GET_APPROVAL_COUNT_FAILURE'
}

const Types = {
    ...EmpType,
    ...LeaveApprovalType,
    ...OddApprovalType,
    ...EmpInfoType,
    ...LoginType,
    ...ConfigurationType,
    ...ReportType,
    ...countType
}

export default Types;