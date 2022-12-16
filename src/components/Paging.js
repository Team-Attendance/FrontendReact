import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Paging = ({totalData, dataPerPage, pageCount, currentPage, setCurrentPage, gridView}) => {

    const totalPage = Math.ceil(totalData / dataPerPage) // 총 페이지 수
    const pageGroup = Math.ceil(currentPage / pageCount)  // 페이지 그룹

    let last = pageGroup * pageCount    // 화면에 보여질 마지막 페이지 번호
    if (last > totalPage) {
        last = totalPage
    }

    let first = last - (pageCount - 1) < 1 ? 1 : last - (pageCount - 1) // 화면에 보여질 첫번재 페이지 번호
    let next = last + 1
    let prev = first - 1

    const pageNum = () => {
        const numArr = []
        for (let i = first; i <= last; i++) {
            numArr.push(<span key={i} id={`${i}`}
                              className={`page-button ${i === Number(currentPage) ? 'current' : ''}`}
                              onClick={pageClick}>{i}</span>)
        }
        return numArr
    }

    const pageClick = (e) => {
        e.preventDefault()
        const selectedPage = e.target.innerText
        setCurrentPage(selectedPage)

        if (selectedPage) {
            gridView.setPage(selectedPage - 1)
        }
    }
    const firstClick = (e) => {
        e.preventDefault()
        const selectedPage = 1
        setCurrentPage(selectedPage)

        if (selectedPage) {
            gridView.setPage(selectedPage - 1)
        }
    }
    const prevClick = (e) => {
        e.preventDefault()
        const selectedPage = prev < 1 ? 1 : prev
        setCurrentPage(selectedPage)

        if (selectedPage) {
            gridView.setPage(selectedPage - 1)
        }
    }
    const nextClick = (e) => {
        e.preventDefault()
        const selectedPage = next > totalPage ? totalPage : next
        setCurrentPage(selectedPage)

        if (selectedPage) {
            gridView.setPage(selectedPage - 1)
        }
    }
    const lastClick = (e) => {
        e.preventDefault()
        const selectedPage = totalPage
        setCurrentPage(selectedPage)

        if (selectedPage) {
            gridView.setPage(selectedPage - 1)
        }
    }

    return (
        <div id='paging'
             style={{float: 'left', height: '100%', paddingTop: '20px'}}>
            <KeyboardDoubleArrowLeftIcon id='first' className={`page-button ${prev ? '' : 'disabled'}`}
                                         onClick={firstClick} sx={{fontWeight: "lighter"}}/>
            <KeyboardArrowLeftIcon id={"prev"} className={`page-button ${prev ? '' : 'disabled'}`}
                                   onClick={prevClick}/>
            {pageNum()}
            <KeyboardArrowRightIcon id={"next"} className={`page-button ${last < totalPage ? '' : 'disabled'}`}
                                    onClick={nextClick}/>
            <KeyboardDoubleArrowRightIcon id={"last"}
                                          className={`page-button ${last < totalPage ? '' : 'disabled'}`}
                                          onClick={lastClick}/>
        </div>
    )

}

export default Paging