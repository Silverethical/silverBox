function modalSample(elements) {

    // main overlay
    let overlay = document.createElement('div')
    overlay.classList.add('silver-box-overlay')

    // the modalBox
    let silverBoxModal = document.createElement('div')
    silverBoxModal.classList.add('silver-box')
    overlay.append(silverBoxModal)

    // adds the input/text/button to the silverBox modal
    silverBoxModal.append(elements)


    return overlay

}

export default modalSample