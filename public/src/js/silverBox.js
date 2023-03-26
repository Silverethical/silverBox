// import components
import buttonComponent from "./components/button";
import inputComponent from "./components/input";
import modalSample from "./components/modalSample";
import headerComponent from "./components/header";
import iconsComponent from "./components/icons";
import closeButtonOnClick from "./components/closeButtonOnClick";

const log = console.log;

/**
 * SilverBox modal
 * @param {object} config - object of related keys to silverBox settings
 * puts the config keys as component arguments and creates a component based on given keys from object
 */
export default function silverBox(config) {

	/** selectors(before creating elements)*/
	/** array of all the elements in the modal (inputs/texts/icons/buttons) */
	let elementsArray = [],
		bodyEl = document.body,
		inputWrapper = document.createElement('div'),
		buttonWrapper = document.createElement("div");
	buttonWrapper.classList.add("silverBox-button-wrapper");
	inputWrapper.classList.add("silverBox-input-wrapper")

	/** pushes header into the modal */

	elementsArray.push(
		headerComponent({
			titleText: config.title,
			htmlText: config.html,
			simpleText: config.text,
			imageSource: iconsComponent(config.icon),
			closeButton: config.showCloseButton
		})
	);
	/** inputs */

	/** if inputs exist */
	if ("inputs" in config) {

		// checks if the input key is array
		// if true this code will be deployed
		if (Array.isArray(config.inputs)) {
			config.inputs.forEach((input) => {
				inputWrapper.append(
					inputComponent({
						inputType: input.type,
						hint: input.hint,
						label: input.label,
						placeHolder: input.placeHolder,
						readOnly: input.readOnly,
						width: input.inputWidth,
						height: input.inputHeight,
						inputMaxLength: input.inputMaxLength
					})
				);
			});
		}
		// if false, this code will be deployed
		else {
			inputWrapper.append(
				inputComponent({
					inputType: config.inputs.type,
					hint: config.inputs.hint,
					label: config.inputs.label,
					placeHolder: config.inputs.placeHolder,
					readOnly: config.inputs.readOnly,
					width: config.inputs.inputWidth,
					height: config.inputs.inputHeight,
					inputMaxLength: config.inputs.inputMaxLength
				})
			);
		}
		// adding inputWrapper to elementsArray
		elementsArray.push(inputWrapper)
	} else {
		// if there is no showCancelButton in config this code will be executed
		if (!("showCancelButton" in config) || config.showCancelButton.valueOf() === true) {
			// if the key of "icon" in config is either question or warning
			// (and also no showCancelButton in config)the code will be executed
			if (config.icon.valueOf() === "question" || config.icon.valueOf() === "warning") {
				buttonWrapper.append(
					buttonComponent({
						text: config.cancelButtonText
							? config.cancelButtonText
							: "Cancel",
						elementUniqueClassList: `silverBox-cancel-button`,
						buttonBgColor: config.cancelButtonColor,
						leftIcon: config.cancelButtonIconLeft,
						rightIcon: config.cancelButtonIconRight,
						borderColor:
							"cancelButtonBorderColor" in config
								? config.cancelButtonBorderColor
								: config.cancelButtonColor,
						textColor: config.cancelButtonTextColor,
						closeOnClick:
							config.cancelButtonCloseOnClick === false ? false : true,
					})

				);
			}
		}
	}

	// buttons
	// cancel button
	if (
		!("showCancelButton" in config) ||
		config.showCancelButton.valueOf() === true
	) {
		if ("inputs" in config) {
			buttonWrapper.append(
				buttonComponent({
					text: config.cancelButtonText
						? config.cancelButtonText
						: "Cancel",
					elementUniqueClassList: `silverBox-cancel-button`,
					buttonBgColor: config.cancelButtonColor,
					leftIcon: config.cancelButtonIconLeft,
					rightIcon: config.cancelButtonIconRight,
					borderColor:
						"cancelButtonBorderColor" in config
							? config.cancelButtonBorderColor
							: config.cancelButtonColor,
					textColor: config.cancelButtonTextColor,
					closeOnClick:
						config.cancelButtonCloseOnClick === false ? false : true,
				})

			);
		}
	}
	// deny button
	if (
		"showDenyButton" in config &&
		config.showDenyButton.valueOf() === true
	) {
		buttonWrapper.append(
			buttonComponent({
				text: config.denyButtonText ? config.denyButtonText : "Deny",
				elementUniqueClassList: `silverBox-deny-button`,
				buttonBgColor: config.denyButtonColor,
				leftIcon: config.denyButtonIconLeft,
				rightIcon: config.denyButtonIconRight,
				borderColor:
					"denyButtonBorderColor" in config
						? config.denyButtonBorderColor
						: config.denyButtonColor,
				textColor: config.denyButtonTextColor,
				closeOnClick:
					config.denyButtonCloseOnClick === false ? false : true,
			})
		);
	}
	// confirm button
	if (
		!("showConfirmButton" in config) ||
		config.showConfirmButton.valueOf() === true
	) {
		buttonWrapper.append(
			buttonComponent({
				text: config.confirmButtonText
					? config.confirmButtonText
					: "Confirm",
				elementUniqueClassList: `silverBox-confirm-button`,
				buttonBgColor: config.confirmButtonColor,
				leftIcon: config.confirmButtonIconLeft,
				rightIcon: config.confirmButtonIconRight,
				borderColor:
					"confirmButtonBorderColor" in config
						? config.confirmButtonBorderColor
						: config.confirmButtonColor,
				textColor: config.confirmButtonTextColor,
				closeOnClick:
					config.confirmButtonCloseOnClick === false ? false : true,
			})
		);
	}

	// pushes the buttonWrapper inside the elements Array
	elementsArray.push(buttonWrapper);

	// checks if we have inputs in config, the whole thing will be added into a form
	// else, the whole thing will be added to body w/o form tag
	// also checks for positions , if we have a position, the overlay class will be changed related to the position config

	// if there is input in config this code will be executed
	if ("inputs" in config) {

		// if there is input and position in config this code will be executed
		if ('position' in config) {
			bodyEl.append(modalSample({ elementsArray: elementsArray, overlayClass: `silverBox-${config.position}`, isInput: true }))
		}
		// if there is input and no position in config this code will be executed
		else {
			bodyEl.append(modalSample({ elementsArray: elementsArray, overlayClass: "silverBox-overlay", isInput: true }))
		}

	}
	// if there is not input in config this code will be executed
	else {
		// if there is no input in config and position is in config this code will be executed
		if ('position' in config) {
			bodyEl.append(modalSample({ elementsArray: elementsArray, overlayClass: `silverBox-${config.position}`, isInput: false }))
		}
		// if there is no input and position in config this code will be executed
		else {
			bodyEl.append(modalSample({ elementsArray: elementsArray, overlayClass: "silverBox-overlay", isInput: false }))
		}

	}

	// checks if we have time config, true => the modal will be removed after the given time
	if ("timer" in config) {
		setTimeout(() => {
			closeButtonOnClick()
		}, config.timer)
	}


	// selecting overLay 
	const silverBoxOverlay = document.querySelector('.silverBox-overlay')
	const silverBoxOver = document.querySelector('.silverBox')

	// if centerContent key is true in config this code will be executed
	if (("centerContent" in config) && config.centerContent.valueOf() === true) {
		const silverBoxIcon = document.querySelector('.silverBox-icon')
		silverBoxIcon.style.justifySelf = "center"
		silverBoxIcon.style.gridColumnStart = 2
		silverBoxOver.style.textAlign = "center"
	}
	// adding event listener for overlay
	// if the clicked element has classList of silverBox-overlay this code will be executed
	silverBoxOverlay.addEventListener("click", (e) => {
		silverBoxOverlay.remove()
	})
	silverBoxOver.addEventListener('click', (e) => {
		e.stopPropagation()
	})

}
