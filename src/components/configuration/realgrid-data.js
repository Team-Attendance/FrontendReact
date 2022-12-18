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
},
{
    fieldName: 'empAuthority',
    dataType: ValueType.TEXT
}
];

export const filters =[
    {
      name: "ROLE_ADMIN",
      criteria: "value = 'ROLE_ADMIN'"
    },    {
        name: "ROLE_EMP",
        criteria: "value = 'ROLE_EMP'"
      }
    ];

export const columns = [{
    name: "empNo",
    fieldName: "empNo",
    type: "data",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "사번"
    },
    editable: false
},{
    name: "empName",
    fieldName: "empName",
    type: "data",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "이름"
    },
    editable: false
}, {
    name: "empPosition",
    fieldName: "empPosition",
    type: "data",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "직급"
    },
    editable: false
}, 
{
    name: "empAuthority",
    fieldName: "empAuthority",
    lookupDisplay: true,
    values: [
        "ROLE_EMP",
        "ROLE_ADMIN"
    ],
    labels: [
        "사원",
        "관리자",
    ],
    editor: {
        type: "dropdown",
        domainOnly: true,
        textReadOnly: true
    },
    header: {
        text: "권한"
    }
  }
]