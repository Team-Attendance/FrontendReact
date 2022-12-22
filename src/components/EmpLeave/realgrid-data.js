import {ValueType} from "realgrid";

export const fields = [{
    fieldName: 'leaveAdjDate',
    dataType: ValueType.DATETIME
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
    header: {text: "신청일자"},
    datetimeFormat: "yyyy-MM-dd"
}, {
    name: "leaveType",
    fieldName: "leaveType",
    type: "data",
    styles: {
        textAlignment: "center"
    },
    header: {text: "휴가 종류"},
    styleCallback: (grid, dataCell) => {
        switch (dataCell.value) {
            case '휴가':
                return {
                    styleName: 'normal-leave'
                }
            case '오전휴가':
                return {
                    styleName: 'morning-leave'
                }
            case '오후휴가':
                return {
                    styleName: 'afternoon-leave'
                }
            default:
                return
        }
    }
}, {
    name: "leaveStartDate",
    fieldName: "leaveStartDate",
    type: "data",
    styles: {
        "textAlignment": "center"
    },
    header: "휴가 시작 일자",
    datetimeFormat: "yyyy-MM-dd"
}, {
    name: "leaveEndDate",
    fieldName: "leaveEndDate",
    type: "data",
    styles: {
        "textAlignment": "center"
    },
    header: {text: "휴가 종료 일자"},
    datetimeFormat: "yyyy-MM-dd"
}, {
    name: "leaveAdjState",
    fieldName: "leaveAdjState",
    type: "data",
    styles: {
        "textAlignment": "center"
    },
    header: {text: "상태"},
    styleCallback: (grid, dataCell) => {
        switch (dataCell.value) {
            case '0':
                return {
                    styleName: 'state-wating'
                }
            case '1':
                return {
                    styleName: 'state-ok'
                }
            case '2':
                return {
                    styleName: 'state-no'
                }
            case '3':
                return {
                    styleName: 'state-cancle'
                }
            default:
                return
        }
    },
    displayCallback: (grid, index, value) => {
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
}, {
    name: "leaveAdjApproDate",
    fieldName: "leaveAdjApproDate",
    type: "data",
    styles: {
        textAlignment: "center"
    },
    header: {text: "결재 일자"},
    datetimeFormat: "yyyy-MM-dd"
}, {
    name: "leaveAdjAppro",
    fieldName: "leaveAdjAppro",
    type: "data",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "결재자",
        showTooltip: false,
    }
}]