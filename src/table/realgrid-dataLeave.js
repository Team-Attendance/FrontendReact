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
    fieldName: 'leaveAdjState',
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
    name: "leaveAdjState",
    fieldName: "leaveAdjState",
    type: "data",
    width: "80",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "신청상태",
        // displayCallback: (grid, index, value) =>{
        //     switch (value) {
        //         case '0':
        //             return '대기'
        //         case '1':
        //             return '승인'
        //         case '2':
        //             return '반려'
        //         case '3':
        //             return '취소'
        //         default:
        //             return '-'
        //     }
        // }
    },
    styleCallback: (grid, dataCell) => {
        switch (dataCell.value) {
          case '0':
            return {
              styleName: '대기'
            }
          case '1':
            return {
              styleName: '승인'
            }
          case '2':
            return {
              styleName: '반려'
            }
            case '3':
            return {
              styleName: '취소'
            }
          default:
            return '-'
        }
      },
    }
    ,{
}]