/**
 * 
 * @param {Function} component - take in a component function
 */
function testComponent(component) {
    const body = document.body
    body.appendChild(component)
}
export default testComponent;