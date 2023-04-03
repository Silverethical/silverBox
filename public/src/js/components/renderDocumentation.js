/**
 * Returns tableRow element based on given arguments from documentation config
 * @param {string} documentArgument - documentation object configName key's value
 * @param {string} documentExplanation - documentation object explanation key's value
 * @param {object} documentCode - documentation config object key's value
 * @returns {Element} - tableRow element
 */
function renderDocumentation({ documentArgument, documentExplanation, documentCode }) {
    // table row
    const tableRow = document.createElement("div")
    tableRow.classList.add("tableRow")

    // argument column
    const docArgumentColumn = document.createElement("div")
    docArgumentColumn.classList.add("tableColumn")
    docArgumentColumn.textContent = documentArgument
    docArgumentColumn.id = documentArgument
    docArgumentColumn.style.fontWeight = "700"
    docArgumentColumn.style.fontStyle = "italic"
    docArgumentColumn.style.fontSize = "20px"
    docArgumentColumn.style.color = "#f56636"

    // explanation column 
    const docExplanationColumn = document.createElement("div")
    docExplanationColumn.classList.add("tableColumn")
    docExplanationColumn.textContent = "- " + documentExplanation

    // create documentConfig
    const pre = document.createElement('pre')
    pre.classList.add("tableColumn")
    const code = document.createElement('code')
    code.textContent = documentCode
    // if there is a value of config in objects
    if (documentCode){
        pre.append(code)
        tableRow.style.gridTemplateRows = "2fr"
        tableRow.style.gridTemplateColumns = "none"
    }

    // adds columns to tableRow

    // argument column
    tableRow.append(docArgumentColumn)
    // explanation column

    // if there is no documentCode argument given
    if (!documentCode) tableRow.append(docExplanationColumn)
    // config column
    if (documentCode) tableRow.append(pre)

    // returns table wrapper

    return tableRow
}

export default renderDocumentation

