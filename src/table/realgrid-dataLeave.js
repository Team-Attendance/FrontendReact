import { ValueType } from "realgrid";

export const fields = [{
    fieldName: 'leaveAdjDate',
    dataType: ValueType.DATETIME,
    datetimeFormat: "yyyyMMdd"
},

{
    fieldName: 'leaveType',
    dataType: ValueType.TEXT
},
{
    fieldName: 'leaveStartDate',
    dataType: ValueType.DATETIME,
    datetimeFormat: "yyyyMMdd"
},
{
    fieldName: 'leaveEndDate',
    dataType: ValueType.DATETIME,
    datetimeFormat: "yyyyMMdd"
},

{
    fieldName: 'leaveAdjApproDate',
    dataType: ValueType.DATETIME,
    datetimeFormat: "yyyyMMdd"
},
{
    fieldName: 'leaveAdjAppro',
    dataType: ValueType.TEXT
}];

export const columns = [{
    name: "leaveAdjDate",
    fieldName: "leaveAdjDate",
    type: "data",
    width: "120",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "신청일자",
        showTooltip: false,
    }
}, {
    name: "leaveType",
    fieldName: "leaveType",
    type: "data",
    width: "80",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "휴가 종류",
        showTooltip: false,
    }
}, {
    name: "leaveStartDate",
    fieldName: "leaveStartDate",
    type: "data",
    width: "120",
    styles: {
        "textAlignment": "center"
    },
    header: "휴가 시작 일자"
},{
    name: "leaveEndDate",
    fieldName: "leaveEndDate",
    type: "data",
    width: "120",
    styles: {
        "textAlignment": "center"
    },
    header: "휴가 종료 일자"
},{
    name: "leaveAdjApproDate",
    fieldName: "leaveAdjApproDate",
    type: "data",
    width: "120",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "결재 일자",
        showTooltip: false,
    },
    numberFormat: '0'
},{
    name: "leaveAdjAppro",
    fieldName: "leaveAdjAppro",
    type: "data",
    width: "80",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "결재자",
        showTooltip: false,
    },
}]