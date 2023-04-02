function modalSample({ direction, elementsArray, overlayClass, isInput, theme = 'light', centerContent }) {


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
    overlay.setAttribute("data-theme", theme)

    // the modalBox
    let silverBoxModal = document.createElement('div')
    silverBoxModal.classList.add('silverBox')
    if (direction) silverBoxModal.setAttribute('dir', direction)
    // centers the modal contents if the config is given
    if (centerContent) silverBoxModal.style.textAlign = "center";

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