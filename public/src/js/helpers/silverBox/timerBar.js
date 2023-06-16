// imports
import silverBoxCloseButtonOnClick from "../closeButtonOnClick";

const silverBoxTimerBar = ({ uniqueID, timer }) => {
	// select silverBox to append the timerBar element
	let silverBox = document.querySelectorAll(".silverBox");
	silverBox = silverBox[silverBox.length - 1];

	// create a timerBar element to track the remaining time before closing the silverBox
	const timerBar = document.createElement("div");
	timerBar.classList = "timer-bar";

	// events to pause/unpause the animation
	silverBox.addEventListener("mouseover", () => {
		timerBar.style.animationPlayState = "paused";
	});
	silverBox.addEventListener("mouseout", () => {
		timerBar.style.animationPlayState = "running";
	});

	// defining the animation duration based on the given timer
	timerBar.style.animation = `timer ${timer / 1000}s linear`;

	// appending the timerBar to silverBox
	silverBox.append(timerBar);

	// removes the specific element after the given timeout
	timerBar.addEventListener("animationend", () => {
		silverBoxCloseButtonOnClick({
			uniqueID,
			timer,
		});
	});
};

export default silverBoxTimerBar;
