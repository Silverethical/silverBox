function modalSample({ elementsArray, overlayClass, isInput }) {

    // form 
    let form = document.createElement('form')
    form.classList.add('silverBox-form')

    // form preventDefault
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });

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

    // checks if we have inputs in the given config, if true the silverBox will be added to a form elements, else there will be no form elements
    if (isInput) {
        form.append(silverBoxModal)
        overlay.append(form)
    }
    else {
        overlay.append(silverBoxModal)
    }

    // returns the whole thing
    return overlay

}

export default modalSample