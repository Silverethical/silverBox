// imports
import silverBoxClose from "../silverBoxClose";

const silverBoxTimerBar = ({
	uniqueID,
	timer,
	pauseTimerOnHover = true,
	showTimerBar = true,
	onClose,
}) => {
	// select silverBox to append the timerBar element
	let silverBox = document.querySelectorAll(".silverBox");
	silverBox = silverBox[silverBox.length - 1];

	// create a timerBar element to track the remaining time before closing the silverBox
	const timerBar = document.createElement("div");
	timerBar.classList = "timer-bar";

	// defining the animation duration based on the given timer
	timerBar.style.animation = `timer ${timer / 1000}s linear`;

	// checks if the pauseTimerOnHover config is not false (it could either be )
	if (pauseTimerOnHover !== false && silverBox) {
		silverBox.addEventListener("mouseover", () => {
			timerBar.style.animationPlayState = "paused";
		});
		silverBox.addEventListener("mouseout", () => {
			timerBar.style.animationPlayState = "running";
		});
	}

	// appending the timerBar to silverBox, if users wants it
	if (silverBox && showTimerBar) {
		silverBox.append(timerBar);

		// removes the specific element after the given timeout
		timerBar.addEventListener("animationend", () => {
			silverBoxClose({
				uniqueID,
				timer,
				onClose,
			});
		});
	} else {
		setTimeout(() => {
			silverBoxClose({
				uniqueID,
				timer,
				onClose,
			});
		}, timer);
	}
};

export default silverBoxTimerBar;
