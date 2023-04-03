function renderDocumentation({ documentArgument, documentExplanation, documentCode }) {
    // table row
    const tableRow = document.createElement("div")
    tableRow.classList.add("tableRow")

    // argument column
    const docArgumentColumn = document.createElement("div")
    docArgumentColumn.classList.add("tableColumn")
    docArgumentColumn.textContent = documentArgument

    // explanation column 
    const docExplanationColumn = document.createElement("div")
    docExplanationColumn.classList.add("tableColumn")
    docExplanationColumn.textContent = documentExplanation

    // create documentConfig
    const pre = document.createElement('pre')
    pre.classList.add("tableColumn")
    const code = document.createElement('code')
    code.textContent = documentCode
    // if there is a value in config
    if (documentCode) pre.append(code)

    // adds columns to tableRow

    // argument column
    tableRow.append(docArgumentColumn)
    // explanation column

    // if there is no documentCode argument given
    if (!documentCode) tableRow.append(docExplanationColumn)
    // config column
    tableRow.append(pre)

    // returns table wrapper

    return tableRow
}

export default renderDocumentation

