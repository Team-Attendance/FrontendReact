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
    fieldName: 'leaveAdjState',
    dataType: ValueType.TEXT
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
    width: "150",
    styles: {
        textAlignment: "center"
    },
    header: { text: "신청일자" }
},{
    name: "leaveType",
    fieldName: "leaveType",
    type: "data",
    width: "120",
    styles: {
        textAlignment: "center"
    },
    header: { text: "휴가 종류" }
}, {
    name: "leaveStartDate",
    fieldName: "leaveStartDate",
    type: "data",
    width: "150",
    styles: {
        "textAlignment": "center"
    },
    header: "휴가 시작 일자"
},{
    name: "leaveEndDate",
    fieldName: "leaveEndDate",
    type: "data",
    width: "150",
    styles: {
        "textAlignment": "center"
    },
    header: {text: "휴가 종료 일자"}
},{
    name: "leaveAdjState",
    fieldName: "leaveAdjState",
    type: "data",
    width: "80",
    styles: {
        "textAlignment": "center"
    },
    header: {text: "상태"},
    styleCallback: (grid, dataCell) => {
        switch(dataCell.value){
            case '1':
                return {
                    styleName: 'approved'
                }
            case '2':
                return {
                    styleName: 'rejected'
                }
            default:
                return
        }
    },
    displayCallback: (grid, index, value) =>{
        switch (value) {
            case '0':
                return '대기'
            case '1':
                return '승인'
            case '2':
                return '반려'
            default:
                return '-';
        }
    }
},{
    name: "leaveAdjApproDate",
    fieldName: "leaveAdjApproDate",
    type: "data",
    width: "150",
    styles: {
        textAlignment: "center"
    },
    header: { text: "결재 일자" }
},{
    name: "leaveAdjAppro",
    fieldName: "leaveAdjAppro",
    type: "data",
    width: "100",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "결재자",
        showTooltip: false,
    },
}]