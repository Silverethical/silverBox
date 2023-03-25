function closeButtonOnClick() {
	// selects the all silverBox and the silverBoxform classes in the page
	const silverBox = document.querySelectorAll(".silverBox");
	const silverBoxForm = document.querySelectorAll('.silverBox-form')

	// checks if we have a form inside our overLay, if true, the parent of the from will be removed
	// else the parent of the silverBox will be removed as there is no form
	if (silverBoxForm) {
		silverBoxForm[silverBoxForm.length - 1].parentElement.remove()
	}
	else {
		silverBox[silverBox.length - 1].parentElement.remove()
	}


}
export default closeButtonOnClick;
