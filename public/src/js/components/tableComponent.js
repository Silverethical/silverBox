// import
import replaceQuotedTextWithSpan from "../helpers/replaceQuotedTextWithSpan";
import documentation from "../data/documentation";
function tableComponent() {
    // tableWrapper selector
    const tableWrapper = document.querySelector(".tableWrapper");
    // adds tableHeader to tableWrapper
    tableWrapper.append(tableHeader())

    // document argument
    let tableRowFunctionConfig = (selector, idValue, configValue) => tableRow({
        argument: selector.configName,
        explanation: selector.explanation,
        defaultValue: selector.defaultValue,
        id: idValue,
        config: configValue,
    })
    // for loop
    documentation.forEach(documentItem => {

        // tableRowFunctionConfig
        tableWrapper.append(tableRowFunctionConfig(documentItem, "noConfig", documentItem))

        // if there is no config in object item this code will be executed
        if (("config" in documentItem)) {

            // creates document configs wrapper
            let documentConfigWrapper = document.createElement('div')
            documentConfigWrapper.classList.add('silverBox-document-has-config')

            documentItem.config.forEach(config => {
                let configTableRow = tableRowFunctionConfig(config, "hasConfig", documentItem)
                // appending each config to the parent div
                documentConfigWrapper.append(configTableRow)
            });
            // appending the whole parent div after the related config explanation
            tableWrapper.append(documentConfigWrapper)

        }
    })
    toggleConfig()
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
function tableRow({ argument, explanation, defaultValue, id, config }) {
    // selectors
    const tableRowEl = document.createElement("div")
    tableRowEl.classList.add("tableRow")

    // argument column ----

    const docArgumentColumn = document.createElement("a")
    docArgumentColumn.classList.add("tableColumn", "document-argument")
    docArgumentColumn.textContent = argument


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

    // if id == "noConfig" this code will be executed
    if (id == "noConfig") {
        docArgumentColumn.id = `${argument}`
        docArgumentColumn.setAttribute("href", "#" + argument)

        // if there is config keyword in the value of config which is documentation in our case
        // this code will be executed
        if ("config" in config) {
            // creates the show more button
            let documentShowMore = document.createElement('span')
            documentShowMore.innerHTML = "show less"
            documentShowMore.classList.add("silverBox-document-show-more")
            docExplanationColumn.append(documentShowMore)
        }
    }
    // if id == "hasConfig" this code will be executed
    else if (id == "hasConfig") {
        // gets the id of the configName that contains the config
        docArgumentColumn.id = `${config.configName}${argument}`
        docArgumentColumn.setAttribute("href", `#${config.configName}${argument}`)

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
function toggleConfig() {
    // select all configs
    const showMoreBtn = document.querySelectorAll('.silverBox-document-show-more')
    const documentThatHasConfig = document.querySelectorAll('.silverBox-document-has-config')

    // for loop
    for (let i = 0; i < showMoreBtn.length; i++) {
        // click event for each showMoreBtn
        showMoreBtn[i].addEventListener("click", () => {
            // if each document that has config contains "hide" class this code will be executed
            if (documentThatHasConfig[i].classList.contains("hide")) {
                documentThatHasConfig[i].classList.remove("hide")
                documentThatHasConfig[i].classList.remove("hide")
                configItem.textContent = "show less"
            }
            // if each document that has config doesn't contain "hide" class this code will be executed
            else {
                documentThatHasConfig[i].classList.add("hide")
                showMoreBtn[i].classList.add("hide")
                configItem.textContent = "show more"
            }
        })
    }
}

export default tableComponent;
