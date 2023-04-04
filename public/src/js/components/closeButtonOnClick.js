/** selects the silverBox wrapper and closes the element*/
function silverBoxcloseButtonOnClick() {
	// selects the all silverBox-wrapper classes in the page
	const silverBox = document.querySelectorAll(".silverBox-wrapper");
	silverBox[silverBox.length - 1].remove();
}
export default silverBoxcloseButtonOnClick;
