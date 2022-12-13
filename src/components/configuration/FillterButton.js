import EmpAuthList from "./EmpAuthList";
import { useEffect, useRef, useState } from "react"
import { GridView, LocalDataProvider } from 'realgrid'
import { columns, fields } from './realgrid-dataAuth'

const FillterButton = ({ toggleAllColumnFilters }) => {

   console.log (toggleAllColumnFilters)
    return (
    <div>
        <button onClick={toggleAllColumnFilters}>아아아</button>
    </div>
    )
}


export default FillterButton;