function footerComponent({footerInside}){
    // creates footer
    let footerEl = document.createElement("footer")
    let footerInsideEl = document.createElement("div")
    let line = document.createElement("hr")
    line.setAttribute("style","margin-top:20px;")
    footerInsideEl.innerHTML = footerInside
    footerEl.append(line)
    footerEl.append(footerInsideEl)
    return footerEl
}
export default footerComponent;