function closeButtonOnClick() {
	const silverBox = document.querySelectorAll(".silver-box");
	silverBox[silverBox.length - 1].parentElement.remove();
}
export default closeButtonOnClick;
