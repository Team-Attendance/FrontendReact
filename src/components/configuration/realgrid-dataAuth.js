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
      },
  
      
      
    ];
  




export const columns = [{
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
    width: "80",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "이름",
        showTooltip: true,
        tooltip:'<span style="color: red;">이름</span>',
    },
    renderer: {
        type:"text",
        showTooltip: true
    }
}, {
    name: "deptName",
    fieldName: "deptName",
    type: "data",
    width: "80",
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
    width: "80",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "직급",
        showTooltip: false,
    }
}, 
{
    name: "empAuthority",
    fieldName: "empAuthority",
    width: 100,
    sortable: false,
    lookupDisplay: true,
    values: [
        "ROLE_ADMIN",
        "ROLE_EMP"
        
    ],
    labels: [
        "ROLE_ADMIN",
        "ROLE_EMP",
        
    ],
    editor: {
        type: "dropdown"
    },
    header: {
        text: "권한",
        styleName: "orange-column"
    }
  },
// {
//     name: "empAuthority",
//     fieldName: "empAuthority",
//     type: "data",
//     width: "80",
//     styles: {
//         textAlignment: "center"
//     },
//     header: {
//         text: "권한",
//         showTooltip: false,
//     }
// }

]