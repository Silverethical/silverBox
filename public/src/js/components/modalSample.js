function modalSample(elementsArray) {

    // main overlay
    let overlay = document.createElement('div')
    overlay.classList.add('silver-box-overlay')

    // the modalBox
    let silverBoxModal = document.createElement('div')
    silverBoxModal.classList.add('silver-box')

    // adds the input/text/button to the silverBox modal
    elementsArray.forEach(element => {
        silverBoxModal.append(element)
    })

    overlay.append(silverBoxModal)

    return overlay

}

export default modalSample