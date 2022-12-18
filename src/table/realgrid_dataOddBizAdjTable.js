import { ValueType } from "realgrid";

export const fields = [
  {
    fieldName: 'odd_biz_adj_date',
    dataType: ValueType.DATE,
  },

  {
    fieldName: 'odd_biz_adj_state',
    dataType: ValueType.TEXT
  },
  {
    fieldName: 'odd_biz_date',
    dataType: ValueType.DATE,
  },
  {
    fieldName: 'odd_biz_type',
    dataType: ValueType.TEXT,
  },
  {
    fieldName: 'odd_biz_adj_appro_date',
    dataType: ValueType.DATE,
  },
];

export const columns = [
  {
    name: "odd_biz_adj_date",
    fieldName: "odd_biz_adj_date",
    type: "data",
    styles: {
      textAlignment: "center"
    },
    header: {
      text: "이상근태 조정 신청일",
      showTooltip: false,
    },
    datetimeFormat: "yyyy-MM-dd"
  },
  {
    name: "odd_biz_date",
    fieldName: "odd_biz_date",
    type: "data",
    styles: {
      textAlignment: "center"
    },
    header: {
      text: "이상 근태 발생 일자",
      showTooltip: false,
    },
    datetimeFormat: "yyyy-MM-dd"
  },
  {
    name: "odd_biz_type",
    fieldName: "odd_biz_type",
    type: "data",
    styles: {
      "textAlignment": "center"
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
    },
  },
  {
    name: "odd_biz_adj_appro_date",
    fieldName: "odd_biz_adj_appro_date",
    type: "data",
    styles: {
      "textAlignment": "center"
    },
    header: {
      text: "조정 승인 일자",
      showTooltip: false,
    },
    datetimeFormat: "yyyy-MM-dd"
  },
  {
    name: "odd_biz_adj_state",
    fieldName: "odd_biz_adj_state",
    type: "data",
    styles: {
      textAlignment: "center"
    },
    header: {
      text: "상태",
      showTooltip: false,
    },
    styleCallback: (grid, dataCell) => {
      switch (dataCell.value) {
        case '대기':
          return {
            styleName: 'state-wating'
          }
        case '승인':
          return {
            styleName: 'state-ok'
          }
        case '반려':
          return {
            styleName: 'state-no'
          }
        case '취소':
          return {
            styleName: 'state-cancle'
          }
        default:
          return
      }
    },
  },
  ]