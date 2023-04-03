/**
 * Creates loading animation element
 * @returns {Element} - loading animation element
 */
function loadingAnimation(){
    let loadingEl = document.createElement("span")
    loadingEl.classList.add("silverBox-button-loading-animation")
    return loadingEl
}
export default loadingAnimation;