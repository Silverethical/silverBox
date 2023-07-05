// imports
import silverBoxCloseButtonOnClick from "../closeButtonOnClick";

const silverBoxTimerBar = ({
	uniqueID,
	timer,
	pauseTimerOnHover = true,
	showTimerBar = true,
}) => {
	// select silverBox to append the timerBar element
	let silverBox = document.querySelectorAll(".silverBox");
	silverBox = silverBox[silverBox.length - 1];

	// create a timerBar element to track the remaining time before closing the silverBox
	const timerBar = document.createElement("div");
	timerBar.classList = "timer-bar";

	// checks if the pauseTimerOnHover config is not false (it could either be )
	if (pauseTimerOnHover !== false) {
		silverBox.addEventListener("mouseover", () => {
			timerBar.style.animationPlayState = "paused";
		});
		silverBox.addEventListener("mouseout", () => {
			timerBar.style.animationPlayState = "running";
		});
	}

	// defining the animation duration based on the given timer
	timerBar.style.animation = `timer ${timer / 1000}s linear`;

	// appending the timerBar to silverBox, if users wants it
	if (showTimerBar) {
		silverBox.append(timerBar);
		// removes the specific element after the given timeout
		timerBar.addEventListener("animationend", () => {
			silverBoxCloseButtonOnClick({
				uniqueID,
				timer,
			});
		});
	} else {
		setTimeout(() => {
			silverBoxCloseButtonOnClick({
				uniqueID,
				timer,
			});
		}, timer);
	}
};

export default silverBoxTimerBar;
