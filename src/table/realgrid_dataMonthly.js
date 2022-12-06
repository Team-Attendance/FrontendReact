import { ValueType } from "realgrid";

export const fields = [
  {
    fieldName: 'date',
    dataType: ValueType.TEXT,
  },

  {
    fieldName: 'bh_get_into',
    dataType: ValueType.TEXT
  },
  {
    fieldName: 'bh_get_off',
    dataType: ValueType.TEXT,
  },
  {
    fieldName: 'emp_get_into',
    dataType: ValueType.TEXT,
  },

  {
    fieldName: 'emp_get_off',
    dataType: ValueType.TEXT,
  },
  {
    fieldName: 'leave_state',
    dataType: ValueType.TEXT,
  },
  {
    fieldName: 'state',
    dataType: ValueType.TEXT
  },
  {
    fieldName: 'odd_biz_adj',
    dataType: ValueType.TEXT
  }
];

export const columns = [
  {
    name: "date",
    fieldName: "date",
    type: "data",
    styles: {
      textAlignment: "center"
    },
    header: {
      text: "날짜",
      showTooltip: false,
    }
  },
  {
    name: "bh_get_into",
    fieldName: "bh_get_into",
    type: "data",
    styles: {
      textAlignment: "center"
    },
    header: {
      text: "정규 출근 시간",
      showTooltip: false,
    }
  },
  {
    name: "bh_get_off",
    fieldName: "bh_get_off",
    type: "data",
    styles: {
      "textAlignment": "center"
    },
    header: {
      text: "정규 퇴근 시간",
      showTooltip: false,
    }
  },
  {
    name: "emp_get_into",
    fieldName: "emp_get_into",
    type: "data",
    styles: {
      "textAlignment": "center"
    },
    header: "출근 시간"
  },
  {
    name: "emp_get_off",
    fieldName: "emp_get_off",
    type: "data",
    styles: {
      textAlignment: "center"
    },
    header: {
      text: "퇴근 시간",
      showTooltip: false,
    },
    numberFormat: '0'
  },
  {
    name: "leave_state",
    fieldName: "leave_state",
    type: "data",
    styles: {
      textAlignment: "center"
    },
    header: {
      text: "휴가 상태",
      showTooltip: false,
    },
  },
  {
    name: "state",
    fieldName: "state",
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
        case '결석':
          return {
            styleName: 'odd-biz'
          }
        case '지각':
          return {
            styleName: 'odd-biz'
          }
        case '지각, 조퇴':
          return {
            styleName: 'odd-biz'
          }
        case '정상':
          return {
            styleName: 'normal'
          }
        default:
          return
      }
    },
  },
  {
    name: "odd_biz_adj",
    fieldName: "odd_biz_adj",
    type: "data",
    styles: {
      textAlignment: "center"
    },
    header: {
      text: "이상 근태 승인 여부",
      showTooltip: false,
    },
  }]