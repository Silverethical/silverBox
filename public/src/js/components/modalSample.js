function modalSample({ elementsArray, overlayClass, isInput }) {

    if (isInput === true) {
        console.log('true');
    }
    else {
        console.log('false');
    }
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

    if (isInput) {
        form.append(silverBoxModal)
        overlay.append(form)
    }
    else {
        overlay.append(silverBoxModal)
    }


    return overlay

}

export default modalSample