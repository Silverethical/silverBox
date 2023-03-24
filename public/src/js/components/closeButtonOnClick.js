function closeButtonOnClick() {
	const silverBox = document.querySelectorAll(".silverBox");
	silverBox[silverBox.length - 1].parentElement.remove();
}
export default closeButtonOnClick;
