import { ValueType } from "realgrid";

export const fields = [{
    fieldName: 'empNo',
    dataType: ValueType.TEXT,
},
{
    fieldName: 'empName',
    dataType: ValueType.TEXT,
},
{
    fieldName: 'deptName',
    dataType: ValueType.TEXT
},
{
    fieldName: 'empPosition',
    dataType: ValueType.TEXT
}];

export const columns = [{
    name: "empNo",
    fieldName: "empNo",
    type: "data",
    width: "150",
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
    width: "150",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "이름"
    }
}, {
    name: "deptName",
    fieldName: "deptName",
    type: "data",
    width: "200",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "부서",
        showTooltip: false,
    }
}, {
    name: "empPosition",
    fieldName: "empPosition",
    type: "data",
    width: "250",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "직급",
        showTooltip: false,
    }
}]