const Paging = (totalData, dataPerPage, pageCount, currentPage, gridView) => {
    // console.log("currentPage : " + currentPage);
    const totalPage = Math.ceil(totalData / dataPerPage) // 총 페이지 수
    const pageGroup = Math.ceil(currentPage / pageCount)  // 페이지 그룹

    // console.log("pageGroup : " + pageGroup);

    let last = pageGroup * pageCount    // 화면에 보여질 마지막 페이지 번호
    if(last > totalPage){
        last = totalPage
    }
        
    let first = last - (pageCount - 1) < 1? 1: last - (pageCount - 1) // 화면에 보여질 첫번재 페이지 번호
    let next = last + 1
    let prev = first - 1

    // console.log("last : " + last);
    // console.log("first : " + first);
    // console.log("next : " + next);
    // console.log("prev : " + prev);

    let html = ""

    if(prev === 0) {
        html += "<span id='first' class='disabled'><<</span> ";
        html += "<span id='prev' class='disabled'><</span> ";
    } else {
        html += "<span id='first'><<</span> ";
        html += "<span id='prev'><</span> ";         
    }
    
    
    for(let i=first; i <= last; i++){
        html += "<span id=" + i + ">" + i + "</span> ";
    }
    
    if(last < totalPage) {
        html += "<span id='next'>></span>";
        html += "<span id='last'>>></span>";
    } else {
        html += "<span id='next' class='disabled'>></span>";
        html += "<span id='last' class='disabled'>>></span>";
    }
    
    
    // $("#paging").html(html);    // 페이지 목록 생성
    document.getElementById("paging").innerHTML = html

    // pagination.current.querySelector("#paging").innerHTML = html
    
    // $("#paging a").css({"color": "black",
    //                     "padding-left": "10px"});
    // document.getElementById("paging")
    //         .setAttribute("style", "color: 'black'; padding-left: '10px';")
                        
    // $("#paging a#" + currentPage).css({"text-decoration":"none", 
    //                                     "color":"red", 
    //                                     "font-weight":"bold"});    // 현재 페이지 표시
    if(document.getElementById(currentPage) !== null){
        document.getElementById(currentPage).style.color = 'red'    // 현재 페이지 표시
        document.getElementById(currentPage).style.fontWeight = 'bold'    // 현재 페이지 표시
        document.getElementById(currentPage).style.border = '1px lightgray solid'    // 현재 페이지 표시
        document.getElementById(currentPage).style.backgroundColor = 'whitesmoke'    // 현재 페이지 표시
    }

    // document.getElementById("#paging a#" + currentPage).style.textDecoration = 'none'
    // document.getElementById(currentPage).style.color = 'red'
    // document.getElementById("#paging a#" + currentPage).style.fontWeight = 'bold'
                                        
    // $("#paging a").click(function(event){
    //     event.preventDefault();
        
    //     var $item = $(this);
    //     var $id = $item.attr("id");
    //     var selectedPage = $item.text();
        

    //     if($id == "first")   selectedPage = 1;
    //     if($id == "next")    selectedPage = next;
    //     if($id == "prev")    selectedPage = prev < 1 ? 1 : prev
    //     if($id == "last")    selectedPage = totalPage;
        
    //     gridView.setPage(selectedPage-1);
    //     paging(totalData, dataPerPage, pageCount, selectedPage);
    // });

    let sp = document.getElementById("paging").getElementsByTagName("span")
    for(let i = 0; i < sp.length; i++){
        sp[i].addEventListener("click", function(e) {
            e.preventDefault()
            let id = this.id
            let selectedPage = this.innerText

            if(id === "first") {selectedPage = 1}
            if(id === "next") {selectedPage = next > totalPage? totalPage : next}
            if(id === "prev") {selectedPage = prev < 1 ? 1 : prev}
            if(id === "last") {selectedPage = totalPage}
            
            if(gridView !== null){
                gridView.setPage(selectedPage - 1)
            }
            Paging(totalData, dataPerPage, pageCount, selectedPage, gridView)
        })
    }

}

export default Paging