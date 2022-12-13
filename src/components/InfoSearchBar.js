import React, {useCallback, useState} from "react";
import '../css/InfoSearchBar.scss'

const InfoSearchBar = ({onSubmit}) => {

    const [query, setQuery] = useState('')
    const [option, setOption] = useState('emp_name')

    const onQueryChange = useCallback((e) => {
        setQuery(e.target.value);
    }, [])

    const SearchButtonClick = useCallback(() => {
        onSubmit(query, option)
        // setQuery('')
    }, [onSubmit, query, option])

    const EnterKeyPress = useCallback((e) => {
        if (e.key === 'Enter') {
            onSubmit(query, option)
            // setQuery('')
        }
    }, [onSubmit, query, option])

    const handleSelect = (e) => {
        setOption(e.target.value)
    }

    return (
        <div className="infoSearchBar-wrap">
            <select onChange={handleSelect}>
                <option value={'emp_name'}>이름</option>
                <option value={'emp_no'}>사번</option>
            </select>
            <input
                placeholder="사원 검색"
                onChange={onQueryChange}
                onKeyDown={EnterKeyPress}
                value={query}
            />
            <button
                onClick={SearchButtonClick}>
                검색
            </button>
        </div>
    )
}

export default InfoSearchBar