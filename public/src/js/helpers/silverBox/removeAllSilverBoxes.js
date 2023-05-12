/**
 * removes all silverBox's
 * @param {string} - value of silverBox that wants to be removed
 */
function removeAllSilverBoxes(index) {
    // converts the index to lowercase
    index = index.toLowerCase()
    // selector
    const silverBoxes = document.querySelectorAll('.silverBox-container')

    // changes the indexes
    if (index === "first") index = 1
    if (index === "last") index = silverBoxes.length

    // all
    if (index === "all") {
        for (let i = 0; i < silverBoxes.length; i++) {
            silverBoxes[i].remove()
        }
    }
    // number
    else if (Number(index) > 0) {
        silverBoxes[Number(index) - 1].remove()
    }
}

export default removeAllSilverBoxes;