export function textareaComponent(placeHolder="default placeHolder"){
    const textArea = document.createElement("textarea")
    textArea.classList.add("silverBox-textArea")
    textArea.setAttribute("placeholder",placeHolder)
    return textArea
}