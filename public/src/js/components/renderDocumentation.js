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
    docArgumentColumn.classList.add("tableColumn", "document-argument")
    docArgumentColumn.textContent = documentArgument
    docArgumentColumn.id = documentArgument
    docArgumentColumn.setAttribute("href", "#" + documentArgument)

    // explanation column 
    const docExplanationColumn = document.createElement("div")
    docExplanationColumn.classList.add("tableColumn", "document-explanation")
    docExplanationColumn.textContent = documentExplanation

    // default value column
    const docDefaultValueColumn = document.createElement("div")
    docDefaultValueColumn.classList.add("tableColumn")
    docDefaultValueColumn.textContent = documentDefaultValue
    // if type of the default value is string this code will be executed
    if (typeof documentDefaultValue === "string") {
        // if the string is empty this code will be executed
        if (documentDefaultValue === "") {
            docDefaultValueColumn.classList.add("document-string")
            docDefaultValueColumn.textContent = '" "'
        } else {
            docDefaultValueColumn.textContent = `"${documentDefaultValue}"`
            docDefaultValueColumn.classList.add("document-string")
        }
    }
    // if type of the default value is boolean this code will be executed
    else if (typeof documentDefaultValue === "boolean") {
        docDefaultValueColumn.classList.add("document-boolean")
    } 
    // if type of the default value is object this code will be executed
    else if (typeof documentDefaultValue === "undefined") {
        docDefaultValueColumn.classList.add("document-undefined")
        docDefaultValueColumn.textContent = `${documentDefaultValue}`
    } 

    // create documentConfig
    const pre = document.createElement('pre')
    pre.classList.add("tableColumn")
    const code = document.createElement('code')
    code.textContent = documentCode
    // if there is a value of config in objects
    if (documentCode) pre.append(code)


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

