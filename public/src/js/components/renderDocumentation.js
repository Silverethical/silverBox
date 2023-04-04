/**
 * Returns tableRow element based on given arguments from documentation config
 * @param {string} documentArgument - documentation object configName key's value
 * @param {string} documentExplanation - documentation object explanation key's value
 * @param {object} documentCode - documentation config object key's value
 * @returns {Element} - tableRow element
 */
function renderDocumentation({ documentArgument, documentExplanation, documentCode, documentDefaultValue }) {
    // table row
    const tableRow = document.createElement("div")
    tableRow.classList.add("tableRow")

    // argument column
    const docArgumentColumn = document.createElement("a")
    docArgumentColumn.classList.add("tableColumn")
    docArgumentColumn.textContent = documentArgument
    docArgumentColumn.id = documentArgument
    docArgumentColumn.setAttribute("href", "#" + documentArgument)
    docArgumentColumn.classList.add("document-argument")

    // explanation column 
    const docExplanationColumn = document.createElement("div")
    docExplanationColumn.classList.add("tableColumn")
    docExplanationColumn.textContent = documentExplanation

    // default value column
    const docDefaultValueColumn = document.createElement("div")
    docDefaultValueColumn.classList.add("tableColumn")
    docDefaultValueColumn.textContent = documentDefaultValue

    // create documentConfig
    const pre = document.createElement('pre')
    pre.classList.add("tableColumn")
    const code = document.createElement('code')
    code.textContent = documentCode
    // if there is a value of config in objects
    if (documentCode) {
        pre.append(code)
        tableRow.classList.add("document-has-config")
    }

    // adds columns to tableRow

    // argument column
    tableRow.append(docArgumentColumn)
    // explanation column
    tableRow.append(docDefaultValueColumn)
    // if there is no documentCode argument given
    if (!documentCode) tableRow.append(docExplanationColumn)
    // config column
    if (documentCode) tableRow.append(pre)

    // returns table wrapper

    return tableRow
}

export default renderDocumentation

