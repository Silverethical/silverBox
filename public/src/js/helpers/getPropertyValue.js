/**
 * 
 * @param {string} variable - css variable name ex: --silverBox-confirm-border-color
 * @returns css variable value
 * @example 
 * // returns #fff
 * getPropertyValue("--silverBox-confirm-color")
 */
function getPropertyValue(variable) {
    return getComputedStyle(document.body).getPropertyValue(variable)
}
export default getPropertyValue;