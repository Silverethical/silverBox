function modalSample({ elementsArray, overlayClass, isInput,theme }) {

    // form 
    let form = document.createElement('form')
    form.classList.add('silverBox-form')

    // form preventDefault
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    // main overlay
    let overlay = document.createElement('div')
    overlay.classList.add("silverBox-wrapper")
    overlay.classList.add(overlayClass)
    if(theme)overlay.setAttribute("data-theme",theme)

    // the modalBox
    let silverBoxModal = document.createElement('div')
    silverBoxModal.classList.add('silverBox')

    // checks if we have inputs in the given config, if true the elements will be added to a form elements, else there will be no form elements
    if (isInput) {

        elementsArray.forEach(element => {
            form.append(element)
        })
        silverBoxModal.append(form)

    }
    else {
        elementsArray.forEach(element => {
            silverBoxModal.append(element)
        })
    }

    overlay.append(silverBoxModal)
    // returns the whole thing
    return overlay

}

export default modalSample