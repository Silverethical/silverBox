/**
 * removes all silverBox's
 * @param {string} - value of silverBox that wants to be removed
 */
function removeAllSilverBoxes(value) {
    // selector
    const silverBoxes = document.querySelectorAll('.silverBox-wrapper')
    // all
    if (value === "all") {
        for (let i = 0; i < silverBoxes.length - 1; i++) {
            silverBoxes[i].remove()
        }
    }
    // first
    else if (value === "first") {
        silverBoxes[0].remove()
    }
    // last
    else if (value === "last") {
        silverBoxes[silverBoxes.length - 1].remove()
    }
    // number
    else if (Number(value) > 0) {
        silverBoxes[Number(value) - 1].remove()
    }
}

export default removeAllSilverBoxes;