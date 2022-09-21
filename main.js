const search = document.querySelector("#search")

search.addEventListener("keyup", searching);

function searching(e) {
    const searchItem = e.target.value.toLowerCase();
    let itemList = document.querySelectorAll(".item-list");

    itemList.forEach((item) =>{
        const isiItem = item.firstChild.textContent.toLowerCase();

        if(isiItem.indexOf(searchItem) != -1) {
            item.setAttribute("style", "display: block;");
        } else {
            item.setAttribute("style", "display: none !important;");
        }
    })
}