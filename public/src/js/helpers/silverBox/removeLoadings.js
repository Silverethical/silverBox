function silverBoxRemoveLoadings(animationIndex) {
    // select SilverBox buttonWrapper
    let silverBoxButtonWrapper = document.querySelectorAll('.silverBox-button-wrapper')

    // converts the given value to lowerCase
    animationIndex.toLowerCase()

    // removes all modal's button's loading
    if (animationIndex === 'all') {
        for (let i = 0; i < silverBoxButtonWrapper.length; i++) {
            silverBoxButtonWrapper[i].childNodes.forEach(button => {
                button.classList.remove('silverBox-loading-button')
            })

        }

    }
    // removes the first modal's button's loading
    else if (animationIndex === 'first') {
        silverBoxButtonWrapper[0].childNodes.forEach(button => {
            button.classList.remove('silverBox-loading-button')
        })
    }

    // removes the last modal's button's loading
    else if (animationIndex === 'last') {
        silverBoxButtonWrapper[silverBoxButtonWrapper.length - 1].childNodes.forEach(button => {
            button.classList.remove('silverBox-loading-button')
        })
    }

    // removes the nth modal's button's loading
    else if (Number(animationIndex) > 0) {
        silverBoxButtonWrapper[Number(animationIndex) - 1].childNodes.forEach(button => {
            button.classList.remove('silverBox-loading-button')
        })
    }

}
export default silverBoxRemoveLoadings