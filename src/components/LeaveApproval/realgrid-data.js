import { ValueType } from "realgrid";

export const fields = [{
    fieldName: 'leaveAdjDate',
    dataType: ValueType.DATETIME
},
{
    fieldName: 'empNo',
    dataType: ValueType.TEXT,
},
{
    fieldName: 'empName',
    dataType: ValueType.TEXT,
},
{
    fieldName: 'empPosition',
    dataType: ValueType.TEXT
},
{
    fieldName: 'leaveType',
    dataType: ValueType.TEXT
},
{
    fieldName: 'leaveStartDate',
    dataType: ValueType.DATETIME
},
{
    fieldName: 'leaveEndDate',
    dataType: ValueType.DATETIME
},
{
    fieldName: 'leaveAdjState',
    dataType: ValueType.TEXT
},
{
    fieldName: 'leaveAdjApproDate',
    dataType: ValueType.DATETIME
},
{
    fieldName: 'leaveAdjAppro',
    dataType: ValueType.TEXT
}];

export const columns = [{
    name: "leaveAdjDate",
    fieldName: "leaveAdjDate",
    type: "data",
    styles: {
        textAlignment: "center"
    },
    header: { text: "신청일자" },
    datetimeFormat: "yyyy-MM-dd"
},{
    name: "empNo",
    fieldName: "empNo",
    type: "data",
    styles: {
        textAlignment: "center"
    },
    header: { text: "사번" }
},{
    name: "empName",
    fieldName: "empName",
    type: "data",
    styles: {
        textAlignment: "center"
    },
    header: { text: "이름" },
    renderer: {
        type:"text"
    }
}, {
    name: "empPosition",
    fieldName: "empPosition",
    type: "data",
    styles: {
        textAlignment: "center"
    },
    header: { text: "직급" }
}, {
    name: "leaveType",
    fieldName: "leaveType",
    type: "data",
    styles: {
        textAlignment: "center"
    },
    header: { text: "휴가 종류" }
}, {
    name: "leaveStartDate",
    fieldName: "leaveStartDate",
    type: "data",
    styles: {
        "textAlignment": "center"
    },
    header: "휴가 시작 일자",
    datetimeFormat: "yyyy-MM-dd"
},{
    name: "leaveEndDate",
    fieldName: "leaveEndDate",
    type: "data",
    styles: {
        "textAlignment": "center"
    },
    header: {text: "휴가 종료 일자"},
    datetimeFormat: "yyyy-MM-dd"
},{
    name: "leaveAdjState",
    fieldName: "leaveAdjState",
    type: "data",
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
            case '3':
                return '취소'
            default:
                return '-'
        }
    }
},{
    name: "leaveAdjApproDate",
    fieldName: "leaveAdjApproDate",
    type: "data",
    styles: {
        textAlignment: "center"
    },
    header: { text: "결재 일자" },
    datetimeFormat: "yyyy-MM-dd"
},{
    name: "leaveAdjAppro",
    fieldName: "leaveAdjAppro",
    type: "data",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "결재자",
        showTooltip: false,
    },
}]