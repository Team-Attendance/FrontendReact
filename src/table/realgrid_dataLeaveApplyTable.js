import { ValueType } from "realgrid";

export const fields = [
  {
    fieldName: 'leave_start_date',
    dataType: ValueType.DATE,
  },

  {
    fieldName: 'leave_end_date',
    dataType: ValueType.DATE
  },
  {
    fieldName: 'leave_adj_date',
    dataType: ValueType.DATE,
  },
  {
    fieldName: 'leave_type',
    dataType: ValueType.TEXT,
  },

  {
    fieldName: 'leave_adj_state',
    dataType: ValueType.TEXT,
  },
];

export const columns = [
  {
    name: "leave_adj_date",
    fieldName: "leave_adj_date",
    type: "data",
    styles: {
      textAlignment: "center"
    },
    header: {
      text: "휴가 신청 일자",
      showTooltip: false,
    },
    datetimeFormat: "yyyy-MM-dd"
  },
  {
    name: "leave_type",
    fieldName: "leave_type",
    type: "data",
    styles: {
      "textAlignment": "center"
    },
    header: {
      text: "휴가 종류",
      showTooltip: false,
    },
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
    },
  },
  {
    name: "leave_start_date",
    fieldName: "leave_start_date",
    type: "data",
    styles: {
      textAlignment: "center"
    },
    header: {
      text: "휴가 시작 일자",
      showTooltip: false,
    },
    datetimeFormat: "yyyy-MM-dd"
  },
  {
    name: "leave_end_date",
    fieldName: "leave_end_date",
    type: "data",
    styles: {
      textAlignment: "center"
    },
    header: {
      text: "휴가 종료 일자",
      showTooltip: false,
    },
    datetimeFormat: "yyyy-MM-dd"
  },
  {
    name: "leave_adj_state",
    fieldName: "leave_adj_state",
    type: "data",
    styles: {
      "textAlignment": "center"
    },
    header: "상태",
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
  }
]