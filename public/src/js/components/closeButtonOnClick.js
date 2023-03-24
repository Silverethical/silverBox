function closeButtonOnClick() {
	const silverBox = document.querySelectorAll(".silverBox");
	const silverBoxForm = document.querySelector('.silverBox-form')
	if (silverBoxForm) {
		silverBoxForm.remove()
	}
	else {
		silverBox[silverBox.length - 1].parentElement.remove()
	}


}
export default closeButtonOnClick;
