// import components
import buttonComponent from "./button";
import inputComponent from "./input";
import modalSample from "./modalSample";
import headerComponent from "./header";
import iconsComponent from "./icons";
import closeButtonOnClick from "./closeButtonOnClick";

const log = console.log;

// comments to be added.
export default function silverBox(config) {
	// array of all the elements in the modal (inputs/texts/icons/buttons)
	let elementsArray = [],
		bodyEl = document.body,
		form = document.createElement("form"),
		buttonWrapper = document.createElement("div");
	buttonWrapper.classList.add("silverBox-button-wrapper");

	// header
	elementsArray.push(
		headerComponent({
			titleText: config.title,
			htmlText: config.html,
			simpleText: config.text,
			imageSource: iconsComponent(config.icon),
			closeButton: config.showCloseButton
		})
	);

	// inputs

	/** if inputs exist */
	if ("inputs" in config) {
		// checks if the input key is array
		// if true this code will be deployed
		if (Array.isArray(config.inputs)) {
			config.inputs.forEach((input) => {
				elementsArray.push(
					inputComponent({
						inputType: input.type,
						hint: input.hint,
						label: input.label,
						placeHolder: input.placeHolder,
						readOnly: input.readOnly,
					})
				);
			});
		}
		// if false, this code will be deployed
		else {
			elementsArray.push(
				inputComponent({
					inputType: config.inputs.type,
					hint: config.inputs.hint,
					label: config.inputs.label,
					placeHolder: config.inputs.placeHolder,
					readOnly: config.inputs.readOnly,
				})
			);
		}
	}

	// buttons

	// cancel button
	if (
		!("showCancelButton" in config) ||
		config.showCancelButton.valueOf() === true
	) {
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
	// also checks for positions

	if ("inputs" in config) {

		// checks if position config is given, if true the overlay will have a position in the body
		if ('position' in config) {
			form.append(modalSample(elementsArray, `silverBox-${config.position}`))
			form.classList.add('silverBox-form')
			bodyEl.append(form);

			// form preventDefault
			form.addEventListener("submit", (e) => {
				e.preventDefault();
			});
		}
		else {
			bodyEl.append(modalSample(elementsArray, "silverBox-overlay"))
		}

	}
	else {
		// checks if position config is given, if true the overlay will have a position in the body
		if ('position' in config) {
			bodyEl.append(modalSample(elementsArray, `silverBox-${config.position}`))
		}
		else {
			bodyEl.append(modalSample(elementsArray, "silverBox-overlay"))
		}

	}


	// checks if we have time config, true => the modal will be removed after the given time
	if ("timer" in config) {
		setTimeout(() => {
			closeButtonOnClick()
		}, config.timer)
	}


}
