function closeButtonOnClick() {
	const silverBox = document.querySelectorAll(".silverBox");
	const silverBoxForm = document.querySelectorAll('.silverBox-form')

	if (silverBoxForm) {
		silverBoxForm[silverBoxForm.length - 1].parentElement.remove()
	}
	else {
		silverBox[silverBox.length - 1].parentElement.remove()
	}


}
export default closeButtonOnClick;
