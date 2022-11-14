import React, { useCallback, useState } from "react";

const SearchBar = ({onSubmit}) => {

    const [query, setQuery] = useState('')
    const [target, setTarget] = useState('')
    const [option, setOption] = useState('name')

    const onQueryChange = useCallback((e) => {
        setQuery(e.target.value);
    }, [query])

    const SearchButtonClick = useCallback(() => {
        onSubmit(query, target, option)
        // setQuery('')
    }, [onSubmit, query, target,option])

    const EnterKeyPress = useCallback((e) => {
        if (e.key === 'Enter') {
            onSubmit(query, target, option)
            // setQuery('')
        }
    }, [onSubmit, query, target,option])

    const handleSelect = (e) => {
        setOption(e.target.value)
    }

    return (
        <div>
            <div>
                <select defaultValue={'none'}>
                    <option value={'none'}>부서</option>
                    <option value={'a'}>인사</option>
                    <option value={'b'}>영업</option>
                    <option value={'c'}>회계</option>
                    <option value={'d'}>경영지원</option>
                    <option value={'e'}>개발</option>
                </select>

                <select defaultValue={'none'}>
                    <option value={'none'}>직급</option>
                    <option value={'a'}>수석연구원</option>
                    <option value={'b'}>책임연구원</option>
                    <option value={'c'}>선임연구원</option>
                    <option value={'d'}>연구원</option>
                    <option value={'e'}>연구보조원</option>
                </select>
            </div>

            <div>
                <select onChange={handleSelect}>
                    <option value={'name'}>이름</option>
                    <option value={'empno'}>사번</option>
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
        </div>
    )
}

export default SearchBar