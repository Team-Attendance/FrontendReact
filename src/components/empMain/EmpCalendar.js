import React,{ useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'




export default function EmpCalendar() {

    const [value, onChange] = useState(new Date());

    return(
        <div>
            <Calendar onChange={onChange} value={value}/>
        </div>
    );
}

