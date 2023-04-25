/**
 * removes all silverBox's
 */
function removeAllSilverBoxes(){
    // selector
    const silverBox = document.querySelectorAll('.silverBox-wrapper')
    silverBox.forEach(silverBox =>{
        silverBox.remove()
    })
}
export default removeAllSilverBoxes;