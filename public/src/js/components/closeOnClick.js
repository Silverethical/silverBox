function closeOnClick(button) {
    button.addEventListener('click', () => {
        let silverBox = document.querySelector('.silver-box')
        silverBox.parentElement.remove()
    })
}
export default closeOnClick