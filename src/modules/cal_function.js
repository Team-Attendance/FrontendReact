
export function initCalendar() {
    let now = new Date();
    let calYear = now.getFullYear();
    let calMonth = now.getMonth();
    let nowDate = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();

    // 이전 달 날짜
    let beforeDate = new Date(calYear, calMonth - 1, 1);

    // 이번 달 날짜
    let thisDate = new Date(calYear, calMonth, 1);

    // 다음 달 날짜
    let nextDate = new Date(calYear, calMonth + 1, 1);

    // 이전달 마지막 일자
    let prevLastDate = new Date(calYear, calMonth, 0).getDate();

    //이번달 첫번째 요일
    let thisFirstDay = new Date(calYear, calMonth, 1).getDay();

    // 이번달 마지막 일자
    let thisLastDate = new Date(calYear, calMonth + 1, 0).getDate();

    // 한달(42개)의 데이터
    let calendarMonth = [];

    // 한달(42개)을 6주로 나눈 데이터
    let calendarWeek = [];

    let temp = [];



    for (let i = 0; i < 42; i++) {
        // 저번달
        if (thisFirstDay > i) {
            calendarMonth[i] = {
                index: i,
                date: `${beforeDate.getFullYear()}-${beforeDate.getMonth() + 1}-${prevLastDate - (thisFirstDay - 1) + i}`,
                day: prevLastDate - (thisFirstDay - 1) + i,
                type: 'prev'
            }
            // 이번달
        } else if (i <= thisLastDate + (thisFirstDay - 1)) {
            calendarMonth[i] = {
                index: i,
                date: `${thisDate.getFullYear()}-${thisDate.getMonth() + 1}-${i - (thisFirstDay - 1)}`,
                day: i - (thisFirstDay - 1),
                type: 'normal'
            }
            // 다음달
        } else {
            calendarMonth[i] = {
                index: i,
                date: `${nextDate.getFullYear()}-${nextDate.getMonth() + 1}-${i - (thisLastDate + thisFirstDay - 1)}`,
                day: i - (thisLastDate + thisFirstDay - 1),
                type: 'next'
            }
        }
    }

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            temp[j] = {
                date: calendarMonth[(7 * i) + j].date,
                day: calendarMonth[(7 * i) + j].day,
                type: calendarMonth[(7 * i) + j].type
            }
        }
        calendarWeek[i] = temp;
        temp = [];
    }

    let thisYear = thisDate.getFullYear();
    let thisMonth = thisDate.getMonth();
    calendarWeek[6] = [{ thisYear }, { thisMonth }, { nowDate }];

    return calendarWeek;
}

export function moveMonth(year, month, direction, nowDate) {
    let calMonth;

    
    
    direction === 'prev' ? calMonth = ((month) - 1) : calMonth = ((month) + 1);

    calMonth--;

    console.log("moveMonth : " + year, month, direction, nowDate + "calMonth : " + calMonth);

    
    // 이전 달 날짜
    let beforeDate = new Date(year, calMonth - 1, 1);

    // 이번 달 날짜
    let thisDate = new Date(year, calMonth, 1);

    console.log(thisDate);
    // 다음 달 날짜
    let nextDate = new Date(year, calMonth + 1, 1);

    // 이전달 마지막 일자
    let prevLastDate = new Date(year, calMonth, 0).getDate();

    //이번달 첫번째 요일
    let thisFirstDay = new Date(year, calMonth, 1).getDay();

    // 이번달 마지막 일자
    let thisLastDate = new Date(year, calMonth + 1, 0).getDate();

    let calendarMonth = [];
    let temp = [];
    let calendarWeek = [];

    for (let i = 0; i < 42; i++) {
        // 저번달
        if (thisFirstDay > i) {
            calendarMonth[i] = {
                index: i,
                date: `${beforeDate.getFullYear()}-${beforeDate.getMonth() + 1}-${prevLastDate - (thisFirstDay - 1) + i}`,
                day: prevLastDate - (thisFirstDay - 1) + i,
                type: 'prev'
            }
            // 이번달
        } else if (i <= thisLastDate + (thisFirstDay - 1)) {
            calendarMonth[i] = {
                index: i,
                date: `${thisDate.getFullYear()}-${thisDate.getMonth() + 1}-${i - (thisFirstDay - 1)}`,
                day: i - (thisFirstDay - 1),
                type: 'normal'
            }
            // 다음달
        } else {
            calendarMonth[i] = {
                index: i,
                date: `${nextDate.getFullYear()}-${nextDate.getMonth() + 1}-${i - (thisLastDate + thisFirstDay - 1)}`,
                day: i - (thisLastDate + thisFirstDay - 1),
                type: 'next'
            }
        }
    }

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            temp[j] = {
                date: calendarMonth[(7 * i) + j].date,
                day: calendarMonth[(7 * i) + j].day,
                type: calendarMonth[(7 * i) + j].type
            }
        }
        calendarWeek[i] = temp;
        temp = [];
    }

    let thisYear = thisDate.getFullYear();
    let thisMonth = thisDate.getMonth();

    calendarWeek[6] = [{ thisYear }, { thisMonth }, {nowDate}];

    return calendarWeek;
}

export function deleteHyphen(date) {
    return (date.split('-')[0] + date.split('-')[1] + date.split('-')[2]);
}

export function formatFulldate(date) {
    let fullDate = date.split("-")[0];

    date.split('-')[1] < 10 ? fullDate = `${fullDate}0${date.split('-')[1]}` : fullDate = fullDate + date.split('-')[1];

    date.split('-')[2] < 10 ? fullDate = `${fullDate}0${date.split('-')[2]}` : fullDate = fullDate + date.split('-')[2];

    return fullDate;
}

export function formatDate(date) {
    let dateObject = new Date(date);
    return dateObject.getFullYear() + "-" + (dateObject.getMonth() + 1) + "-" + dateObject.getDate();
}

export function formatHyphenFulldate(date) {
    let fullDate = date.split("-")[0];

    date.split('-')[1] < 10 ? fullDate = `${fullDate}-0${date.split('-')[1]}` : fullDate = `${fullDate}-${date.split('-')[1]}`;

    date.split('-')[2] < 10 ? fullDate = `${fullDate}-0${date.split('-')[2]}` : fullDate = `${fullDate}-${date.split('-')[2]}`;

    return fullDate;
}

export function formatHyphenToKorean(date) {
    return `${date.split("-")[0]}년 ${date.split("-")[1]}월 ${date.split("-")[2]}일`;
}