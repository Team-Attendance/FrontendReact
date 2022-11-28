import { ValueType } from "realgrid";

export const fields = [{
    fieldName: 'oddBizAdjDate',
    dataType: ValueType.DATETIME,
    datetimeFormat: "yyyyMMdd"
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
    fieldName: 'oddBizType',
    dataType: ValueType.TEXT
},
{
    fieldName: 'oddBizDate',
    dataType: ValueType.DATETIME,
    datetimeFormat: "yyyyMMdd"
},
{
    fieldName: 'oddBizAdjState',
    dataType: ValueType.TEXT
},
{
    fieldName: 'oddBizAdjApproDate',
    dataType: ValueType.DATETIME,
    datetimeFormat: "yyyyMMdd"
},
{
    fieldName: 'oddBizAdjAppro',
    dataType: ValueType.TEXT
}];

export const columns = [{
    name: "oddBizAdjDate",
    fieldName: "oddBizAdjDate",
    type: "data",
    width: "150",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "신청일자",
        showTooltip: false,
    }
},{
    name: "empNo",
    fieldName: "empNo",
    type: "data",
    width: "100",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "사번",
        showTooltip: false,
    }
},{
    name: "empName",
    fieldName: "empName",
    type: "data",
    width: "100",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "이름"
    },
    renderer: {
        type:"text"
    }
}, {
    name: "empPosition",
    fieldName: "empPosition",
    type: "data",
    width: "130",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "직급",
        showTooltip: false,
    }
}, {
    name: "oddBizType",
    fieldName: "oddBizType",
    type: "data",
    width: "100",
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
    width: "150",
    styles: {
        "textAlignment": "center"
    },
    header: "이상 근태 발생 일자"
},{
    name: "oddBizAdjState",
    fieldName: "oddBizAdjState",
    type: "data",
    width: "100",
    styles: {
        "textAlignment": "center"
    },
    header: "상태",
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
                return '승인';
            case '2':
                return '반려'
            default:
                return '-';
        }
    }
},{
    name: "oddBizAdjApproDate",
    fieldName: "oddBizAdjApproDate",
    type: "data",
    width: "150",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "결재 일자",
        showTooltip: false,
    },
    numberFormat: '0'
},{
    name: "oddBizAdjAppro",
    fieldName: "oddBizAdjAppro",
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