function modalSample(elementsArray, overlayClass) {

    // main overlay
    let overlay = document.createElement('div')
    overlay.classList.add(overlayClass)

    // the modalBox
    let silverBoxModal = document.createElement('div')
    silverBoxModal.classList.add('silverBox')

    // adds the input/text/button to the silverBox modal
    elementsArray.forEach(element => {
        silverBoxModal.append(element)
    })

    overlay.append(silverBoxModal)

    return overlay

}

export default modalSample