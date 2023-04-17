import copyConfig from "../helpers/copyConfig"
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

    // create a button to show the config output
    const button = document.createElement('button')
    button.classList.add('silverBox-showExample')
    button.textContent = 'Hit me!'

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
    copyExampleIcon.setAttribute('src', "/src/images/copyIcon.png")
    copyExampleWrapper.classList.add("silverBox-exampleCopyButton")

    // appending the children
    copyExampleWrapper.append(copyExampleIcon)

    // event for each button
    copyExampleWrapper.addEventListener("click", () => {
        // calls the copyConfig
        copyConfig(config, copyExampleIcon, 1500)
    })



    // appending first column children
    exampleColumn1.append(exampleExplanation)
    exampleColumn1.append(button)
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