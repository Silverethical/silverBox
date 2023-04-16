// import
import replaceQuotedTextWithSpan from "../helpers/replaceQuotedTextWithSpan";
import documentation from "../data/documentation";
function tableComponent() {
    // tableWrapper selector
    const tableWrapper = document.querySelector(".tableWrapper");
    const configWrapper = document.createElement("div")
    configWrapper.classList.add("silverBox-document-has-config")
    // adds tableHeader to tableWrapper
    tableWrapper.append(tableHeader())
    let configTableRow

    // document argument
    let tableRowFunctionConfig = (selector) => tableRow({
        argument: selector.configName,
        explanation: selector.explanation,
        defaultValue: selector.defaultValue,
        id: "noConfig",
    })
    let eachConfig = []
    // for loop
    documentation.forEach(documentItem => {
        // if there is no config in object item this code will be executed
        if (!("config" in documentItem)) {
            // tableRowFunctionConfig
            tableWrapper.append(tableRowFunctionConfig(documentItem))
        }
        // if there is config in object item this code will be executed
        else {
            // tableRowFunctionConfig
            tableWrapper.append(tableRowFunctionConfig(documentItem))
            // parent config name
            documentItem.config.forEach(config => {
                configTableRow = tableRow({
                    argument: config.configName,
                    explanation: config.explanation,
                    defaultValue: config.defaultValue,
                    id: documentItem,
                })
                tableWrapper.append(tableConfigWrapper(configTableRow))
            });
        }
    })

}
/**
 * creates tableHeader
 * @returns {element} - tableHeader Element
 */
function tableHeader() {
    // create tableHeader
    const tableHeader = document.createElement("div")
    tableHeader.classList.add("tableRow", "tableRowHeader")

    // argument header
    const argumentHeader = document.createElement("div")
    argumentHeader.classList.add("tableColumn", "tableHeaderColumn")
    argumentHeader.textContent = "Argument"

    // default value header
    const defaultValueHeader = document.createElement("div")
    defaultValueHeader.classList.add("tableColumn", "tableHeaderColumn")
    defaultValueHeader.textContent = "Default Value"

    // default value header
    const explanationHeader = document.createElement("div")
    explanationHeader.classList.add("tableColumn", "tableHeaderColumn")
    explanationHeader.textContent = "Explanation"

    // append all items
    tableHeader.append(argumentHeader)
    tableHeader.append(defaultValueHeader)
    tableHeader.append(explanationHeader)

    return tableHeader
}

/**
 * creates table row element
 * @param {string} argument - document argument
 * @param {string} explanation - document explanation
 * @param {string} defaultValue - document defaultValue
 * @param {string} config - document config
 * @param {string} id - determines the status of id (how the id is added)
 * @returns {element} - table row element
 */
function tableRow({ argument, explanation, defaultValue, id }) {
    // selectors
    const tableRowEl = document.createElement("div")
    tableRowEl.classList.add("tableRow")

    // argument column ----

    const docArgumentColumn = document.createElement("a")
    docArgumentColumn.classList.add("tableColumn", "document-argument")
    docArgumentColumn.textContent = argument

    // if id == noConfig this code will be executed
    if (id == "noConfig") {
        docArgumentColumn.id = `${argument}`
        docArgumentColumn.setAttribute("href", "#" + argument)
    }
    // if id != noConfig this code will be executed
    else {
        // gets the id of the configName that contains the config
        docArgumentColumn.id = `${id.configName}${argument}`
        docArgumentColumn.setAttribute("href", `#${id.configName}${argument}`)
    }

    // explanation column ----

    const docExplanationColumn = document.createElement("div")
    docExplanationColumn.classList.add("tableColumn", "document-explanation")
    docExplanationColumn.innerHTML = replaceQuotedTextWithSpan(explanation)

    // default value column ----

    const docDefaultValueColumn = document.createElement("div")
    docDefaultValueColumn.classList.add("tableColumn")
    docDefaultValueColumn.textContent = defaultValue

    // if type of the default value is string this code will be executed
    if (typeof defaultValue === "string") {
        // if the string is empty this code will be executed
        if (defaultValue === "") {
            docDefaultValueColumn.classList.add("document-string")
            docDefaultValueColumn.textContent = '" "'
        } else {
            docDefaultValueColumn.textContent = `"${defaultValue}"`
            docDefaultValueColumn.classList.add("document-string")
        }
    }
    // if type of the default value is boolean this code will be executed
    else if (typeof defaultValue === "boolean") {
        docDefaultValueColumn.classList.add("document-boolean")
    }
    // if type of the default value is object this code will be executed
    else if (typeof defaultValue === "undefined") {
        docDefaultValueColumn.classList.add("document-undefined")
        docDefaultValueColumn.textContent = `${defaultValue}`
    }

    // appends the items to table row

    // argument
    tableRowEl.append(docArgumentColumn)
    // default value
    tableRowEl.append(docDefaultValueColumn)
    // explanation
    tableRowEl.append(docExplanationColumn)

    return tableRowEl
}
function tableConfigWrapper(config) {
    // documentation config 
    const documentConfig = document.createElement("div")
    documentConfig.classList.add("silverBox-document-has-config")
    documentConfig.append(config)
    return documentConfig

}

export default tableComponent;