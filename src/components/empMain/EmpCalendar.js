import React,{ useState } from 'react';
import '../../css/calendar.css';
import Calendar from 'react-calendar'





export default function EmpCalendar() {

    const [value, onChange] = useState(new Date());

    return(
        <div>
            <Calendar formatDay={(locale, value) => 
                value.toLocaleDateString("en", {day: "numeric"})
              }style={{ height: "600px", with: "800px"}} onChange={onChange} value={value}/>
         </div>

    );
}

