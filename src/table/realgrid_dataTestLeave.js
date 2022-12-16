import { ValueType } from "realgrid";

export const fields = [
  {
    fieldName: 'leaveStartDate',
    dataType: ValueType.TEXT,
  },

  {
    fieldName: 'leaveEndDate',
    dataType: ValueType.TEXT
  },
  {
    fieldName: 'leaveAdjDate',
    dataType: ValueType.TEXT,
  },
  {
    fieldName: 'leaveType',
    dataType: ValueType.TEXT,
  },

  {
    fieldName: 'leaveAdjState',
    dataType: ValueType.TEXT,
  },
];

export const columns = [
  {
    name: "leaveStartDate",
    fieldName: "leaveStartDate",
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
    name: "leaveEndDate",
    fieldName: "leaveEndDate",
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
    name: "leaveAdjDate",
    fieldName: "leaveAdjDate",
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
    name: "leaveType",
    fieldName: "leaveType",
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
    name: "leaveAdjState",
    fieldName: "leaveAdjState",
    type: "data",
    styles: {
      "textAlignment": "center"
    },
    header: "출근 시간"
  }
  ]