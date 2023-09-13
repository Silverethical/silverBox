// imports
import silverBoxClose from "../closeButtonOnClick";
import validateDuration from "./validateDuration";

const silverBoxTimerBar = ({ uniqueID, timerConfig, onClose }) => {
	// gives the pauseOnHover and showBar config in timer a default value if they're not given
	if (!("showBar" in timerConfig)) timerConfig.showBar = true;
	if (!("pauseOnHover" in timerConfig)) timerConfig.pauseOnHover = true;

	// select silverBox to append the timerBar element
	let silverBox = document.querySelectorAll(".silverBox");
	silverBox = silverBox[silverBox.length - 1];

	// create a timerBar element with it's wrapper to track the remaining time before closing the silverBox
	const timerBar = document.createElement("div");
	timerBar.classList = "timer-bar";

	const timerBarWrapper = document.createElement("div");
	timerBarWrapper.classList = "timer-bar-wrapper";

	// appends the timerBar inside a wrapper
	timerBarWrapper.append(timerBar);

	// defining the animation duration based on the given timer
	timerBar.style.animation = `timer ${validateDuration(timerConfig.timer)} linear`;

	// checks if the pauseTimerOnHover config is not false (it could either be )
	if (timerConfig?.pauseOnHover !== false && silverBox) {
		silverBox.addEventListener("mouseover", () => {
			timerBar.style.animationPlayState = "paused";
		});
		silverBox.addEventListener("mouseout", () => {
			timerBar.style.animationPlayState = "running";
		});
	}

	// appending the timerBar to silverBox, if users wants it
	if (silverBox && timerConfig?.showBar) {
		silverBox.append(timerBarWrapper);

		// removes the specific element after the given timeout
		timerBar.addEventListener("animationend", () => {
			silverBoxClose({
				uniqueID,
				timer: timerConfig.timer,
				onClose,
			});
		});
	} else {
		setTimeout(() => {
			silverBoxClose({
				uniqueID,
				timer: timerConfig.timer,
				onClose,
			});
		}, timerConfig.timer);
	}
};

export default silverBoxTimerBar;
