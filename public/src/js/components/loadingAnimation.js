/**
 * Creates loading animation element
 * @returns {Element} - loading animation element
 */
function silverBoxloadingAnimation() {
    let loadingEl = document.createElement("span")
    loadingEl.classList.add("silverBox-button-loading-animation")
    return loadingEl
}
export default silverBoxloadingAnimation;