function footerComponent({footerInside}){
    // creates footer
    let footerEl = document.createElement("footer")
    // creates footer inside div
    let footerInsideEl = document.createElement("div")
    // creates hr line
    let line = document.createElement("hr")
    line.setAttribute("style","margin-top:20px;")
    // adds given argument as HTML element to footerInsideEl
    footerInsideEl.innerHTML = footerInside

    // appends elements to footerEl
    footerEl.append(line)
    footerEl.append(footerInsideEl)
    // returns the footer
    return footerEl
}
export default footerComponent;