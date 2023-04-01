function exampleSectionCreation(explanation, config) {

    // create a example wrapper
    const exampleWrapper = document.createElement('div')
    exampleWrapper.classList.add('example')

    // create first exampleColumn 
    const exampleColumn1 = document.createElement('div')
    exampleColumn1.classList.add('exampleColumn')

    // create example explanation div
    const exampleExplanation = document.createElement('div')
    exampleExplanation.classList.add('exampleExplanation')
    exampleExplanation.textContent = explanation

    // create a button to show the config output
    const button = document.createElement('button')
    button.classList.add('showExample')
    button.textContent = 'Hit me!'

    // create second exampleColumn
    const exampleColumn2 = document.createElement('div')
    exampleColumn2.classList.add('exampleColumn')

    // create exampleConfig
    const exampleConfig = document.createElement('div')
    exampleConfig.classList.add('exampleConfig')
    const pre = document.createElement('pre')
    exampleConfig.append(pre)
    const code = document.createElement('code')
    code.textContent = config
    pre.append(code)
    // code.onclick = modalSample(config)



    // appending first column children
    exampleColumn1.append(exampleExplanation)
    exampleColumn1.append(button)
    // appending second column children
    exampleColumn2.append(exampleConfig)

    // appending the columns into example (parent div)
    exampleWrapper.append(exampleColumn1)
    exampleWrapper.append(exampleColumn2)

    return exampleWrapper

}

export default exampleSectionCreation