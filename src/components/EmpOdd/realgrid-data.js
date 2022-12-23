import { ValueType } from "realgrid";

export const fields = [{
    fieldName: 'oddBizAdjDate',
    dataType: ValueType.DATETIME
},
{
    fieldName: 'oddBizType',
    dataType: ValueType.TEXT
},
{
    fieldName: 'oddBizDate',
    dataType: ValueType.DATETIME
},
{
    fieldName: 'oddBizAdjState',
    dataType: ValueType.TEXT
},
{
    fieldName: 'oddBizAdjApproDate',
    dataType: ValueType.DATETIME
},
{
    fieldName: 'oddBizAdjAppro',
    dataType: ValueType.TEXT
}];

export const columns = [{
    name: "oddBizAdjDate",
    fieldName: "oddBizAdjDate",
    type: "data",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "신청일자",
        showTooltip: false,
    },
    datetimeFormat: "yyyy-MM-dd"
},{
    name: "oddBizType",
    fieldName: "oddBizType",
    type: "data",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "이상 근태 종류",
        showTooltip: false,
    },
    styleCallback: (grid, dataCell) => {
        switch (dataCell.value) {
            case '결근':
                return {
                    styleName: 'state-no'
                }
            case '조퇴':
                return {
                    styleName: 'state-no'
                }
            case '지각':
                return {
                    styleName: 'state-no'
                }
            default:
                return
        }
    }
}, {
    name: "oddBizDate",
    fieldName: "oddBizDate",
    type: "data",
    styles: {
        "textAlignment": "center"
    },
    header: "이상 근태 발생 일자",
    datetimeFormat: "yyyy-MM-dd"
},{
    name: "oddBizAdjState",
    fieldName: "oddBizAdjState",
    type: "data",
    styles: {
        "textAlignment": "center"
    },
    header: "상태",
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
    name: "oddBizAdjApproDate",
    fieldName: "oddBizAdjApproDate",
    type: "data",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "결재 일자",
        showTooltip: false,
    },
    datetimeFormat: "yyyy-MM-dd"
},{
    name: "oddBizAdjAppro",
    fieldName: "oddBizAdjAppro",
    type: "data",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "결재자",
        showTooltip: false,
    },
}]