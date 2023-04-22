// disables scroll
function silverBoxDisableScroll(select) {
    // selector 
    let silverBoxWrapper = document.querySelectorAll(select)
    // if the class node list is empty this code will be executed
    if (silverBoxWrapper.length <= 0) {
        document.body.classList.remove("stop-scrolling")
    }
     // if the class node list is not empty this code will be executed
    else{
        document.body.classList.add("stop-scrolling")
    }
}
export default silverBoxDisableScroll