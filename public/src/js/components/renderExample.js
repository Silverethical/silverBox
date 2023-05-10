import copyConfig from "../helpers/copyConfig";
import silverBox from "../silverBox"
/**
 * Returns an example wrapper based on given config
 * @param {string} explanation - example object explanation key's value
 * @param {object} config - example object config key's value
 * @returns {Element} - example wrapper element
 */
function renderExample(explanation, config) {

    // create a example wrapper
    const exampleWrapper = document.createElement('div')
    exampleWrapper.classList.add('silverBox-example')

    // create first exampleColumn 
    const exampleColumn1 = document.createElement('div')
    exampleColumn1.classList.add('silverBox-exampleColumn')

    // create example explanation div
    const exampleExplanation = document.createElement('div')
    exampleExplanation.classList.add('silverBox-exampleExplanation')
    exampleExplanation.textContent = explanation

    // create exampleButtonWrapper
    const exampleButtonWrapper = document.createElement('div')
    exampleButtonWrapper.classList.add("silverBox-example-button-wrapper")

    // create a button to show the config output
    const showButton = document.createElement('button')
    showButton.classList.add('silverBox-showExample', 'silverBox-exampleButtons')
    showButton.textContent = 'Show Me'

    // create copy config button
    const copyButton = document.createElement('button')
    copyButton.classList.add('silverBox-copyConfig', 'silverBox-exampleButtons')
    copyButton.textContent = 'Copy Code'

    // create second exampleColumn
    const exampleColumn2 = document.createElement('div')
    exampleColumn2.classList.add('silverBox-exampleColumn')
    exampleColumn2.classList.add('silverBox-exampleColumn-code')

    // create exampleConfig
    const exampleConfig = document.createElement('div')
    exampleConfig.classList.add('silverBox-exampleConfig')
    const pre = document.createElement('pre')
    exampleConfig.append(pre)
    const code = document.createElement('code')
    code.textContent = config
    pre.append(code)

    // create copy example button
    const copyExampleWrapper = document.createElement("button")
    const copyExampleIcon = document.createElement('img')
    copyExampleIcon.setAttribute('src', "/public/src/images/copyIcon.png")
    copyExampleWrapper.classList.add("silverBox-exampleCopyButton")

    // appending the children   
    copyExampleWrapper.append(copyExampleIcon)

    // event for each button
    copyExampleWrapper.addEventListener("click", () => {
        // calls the copyConfig
        copyConfig({ copy: config, iconElement: copyExampleIcon, timeOut: 1500 })
    })
    copyButton.addEventListener("click", () => {
        copyConfig({ copy: config })
        silverBox({
            timer: 1500,
            title: "Copied!",
            theme: "dark",
            position: "top-right",
            centerContent: true
        })
    })



    // appending first column children
    exampleColumn1.append(exampleExplanation)
    exampleButtonWrapper.append(showButton, copyButton)
    exampleColumn1.append(exampleButtonWrapper)
    // appending second column children
    // appending button to exampleConfig
    exampleConfig.append(copyExampleWrapper)
    exampleColumn2.append(exampleConfig)

    // appending the columns into example (parent div)
    exampleWrapper.append(exampleColumn1)
    exampleWrapper.append(exampleColumn2)

    return exampleWrapper

}

export default renderExample