import { ValueType } from "realgrid";

export const fields = [{
    fieldName: 'oddBizAdjDate',
    dataType: ValueType.DATETIME,
    datetimeFormat: "yyyyMMdd"
},
{
    fieldName: 'oddBizType',
    dataType: ValueType.TEXT
},
{
    fieldName: 'oddBizDate',
    dataType: ValueType.DATETIME,
    datetimeFormat: "yyyyMMdd"
},
{
    fieldName: 'obbBizAdjState',
    dataType: ValueType.TEXT
},
{
    fieldName: 'oddBizAdjAppro',
    dataType: ValueType.TEXT
}];

export const columns = [{
    name: "oddBizAdjDate",
    fieldName: "oddBizAdjDate",
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
    name: "oddBizType",
    fieldName: "oddBizType",
    type: "data",
    width: "80",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "이상 근태 종류",
        showTooltip: false,
    }
}, {
    name: "oddBizDate",
    fieldName: "oddBizDate",
    type: "data",
    width: "120",
    styles: {
        "textAlignment": "center"
    },
    header: "이상 근태 발생 일자"
},{
    name: "oddBizAdjState",
    fieldName: "oddBizAdjState",
    type: "data",
    width: "80",
    styles: {
        "textAlignment": "center"
    },
    header: "상태",
    displayCallback: (grid, index, value) =>{
        switch (value) {
            case '0':
                return '대기'
            case '1':
                return '승인';
            case '2':
                return '반려'
            default:
                return '-';
        }
    }
},{
    name: "oddBizAdjAppro",
    fieldName: "oddBizAdjAppro",
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