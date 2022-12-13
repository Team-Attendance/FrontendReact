import {useEffect, useRef, useState} from "react";
import '../css/Dropdown.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Dropdown = ({year, setYear, currentYear}) => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef(null)

    const yearList = () => {
        const yearArr = []
        for (let i = currentYear; i > currentYear - 10; i--) {
            yearArr.push(<li key={i} onClick={() => setYear(i)}>{i}</li>)
        }
        return yearArr
    }
    useEffect(() => {
        // dropDown
        const onClick = (e) => {
            if (ref.current !== null && !ref.current.contains(e.target)) {
                // 드롭다운 메뉴 이외의 공간 클릭
                setIsOpen(!isOpen)
            }
        }

        if (isOpen) {
            window.addEventListener("click", onClick)
            return () => {
                window.removeEventListener("click", onClick)
            }
        }
    }, [isOpen])
    return (
        <div className="components-years">
            <span className="year year-select" onClick={() => setIsOpen(!isOpen)}
                  ref={ref}>{year}<KeyboardArrowDownIcon/></span>
            <span>년도</span>
            <div className={`components-dropdown ${isOpen ? 'fade-in-dropdown' : ''}`}>
                {isOpen &&
                    <ul>
                        {yearList()}
                    </ul>
                }
            </div>
        </div>
    )
}

export default Dropdown