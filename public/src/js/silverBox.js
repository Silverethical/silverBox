// import components
import silverBoxButtonComponent from "./components/button";
import silverBoxInputComponent from "./components/input";
import silverBoxModalSample from "./components/modalSample";
import silverBoxHeaderComponent from "./components/header";
import silverBoxIconsComponent from "./components/icons";
import silverBoxCloseButtonOnClick from "./components/closeButtonOnClick";
import silverBoxFooterComponent from "./components/footer";

const log = console.log;

/**
 * SilverBox modal
 * @param {object} config - object of related keys to silverBox settings
 * puts the config keys as component arguments and creates a component based on given keys from object
 */
export default function silverBox(config) {
	if (Object.keys(config).length !== 0) {

		/** selectors(before creating elements)*/
		/** array of all the elements in the modal (inputs/texts/icons/buttons) */
		let elementsArray = [],
			bodyEl = document.body,
			inputWrapper = document.createElement("div"),
			buttonWrapper = document.createElement("div");
		buttonWrapper.classList.add("silverBox-button-wrapper");
		inputWrapper.classList.add("silverBox-input-wrapper");

		/** pushes header into the modal */

		elementsArray.push(
			silverBoxHeaderComponent({
				titleText: config.title,
				htmlText: config.html,
				simpleText: config.text,
				imageSource: silverBoxIconsComponent(config.alertIcon, config.userIcon, config.centerContent),
				closeButton: config.showCloseButton,
			})
		);
		/** inputs */
		/** if inputs exist */
		if ("input" in config) {
			const inputConfig = (selector) => {
				return {
					type: "type" in selector ? selector.type : '',
					numberOnly: selector.numberOnly,
					hint: selector.hint,
					label: selector.label,
					placeHolder: selector.placeHolder,
					readOnly: selector.readOnly,
					width: selector.inputWidth,
					height: selector.inputHeight,
					inputMaxLength: selector.inputMaxLength,
					textAlign: selector.textAlign,
					fontSize: selector.fontSize,
					placeHolderFontSize: selector.placeHolderFontSize
				};
			};
			// checks if inputs have the multiPlyBy confing or not 
			const multiplyByCheck = (selector) => {
				if ("multiplyBy" in selector) {
					// loops to creates the given number of inputs
					for (let i = 1; i <= selector.multiplyBy; i++) {
						inputWrapper.append(silverBoxInputComponent(inputConfig(selector)));
					}

				}
				else {
					inputWrapper.append(silverBoxInputComponent(inputConfig(selector)));

				}
			}

			// checks if the input key is array
			// if true this code will be deployed
			if (Array.isArray(config.input)) {
				config.input.forEach((input) => {
					multiplyByCheck(input)
				});
			}
			// if false, this code will be deployed
			else {
				multiplyByCheck(config.input)
			}
			// adding inputWrapper to elementsArray
			inputWrapper.childElementCount !== 0 ? elementsArray.push(inputWrapper) : ''

			// if cancel button config does not exist
			if (
				!("cancelButton" in config)
			) {

				buttonWrapper.append(
					silverBoxButtonComponent(config.cancelButton = {
						text: "Cancel",
						closeOnClick: true,
					}, "silverBox-cancel-button")
				);
			}
			// if cancel button config exists and show button is false
			else {
				if (config.cancelButton.showButton !== false) {
					buttonWrapper.append(
						silverBoxButtonComponent(config.cancelButton, "silverBox-cancel-button")
					);
				}
			}

		} else {
			// if there is no cancelButton in config:
			if (
				!("cancelButton" in config)
			) {
				// if the key of "alertIcon" in config is question or warning
				// the code will be executed
				if (
					"alertIcon" in config &&
					(config.alertIcon.valueOf() === "question" ||
						config.alertIcon.valueOf() === "warning")
				) {
					// default cancel button
					buttonWrapper.append(
						silverBoxButtonComponent({
							text: "Cancel",
							closeOnClick: true,
						}, "silverBox-cancel-button")
					)
				}

			}
			else {
				// if the cancelButton config exists and showButton is not false
				if (config.cancelButton.showButton !== false) {
					buttonWrapper.append(
						silverBoxButtonComponent(config.cancelButton, "silverBox-cancel-button")
					);
				}

			}

		}


		// buttons
		// cancel button is created in top
		// deny button

		// if there is deny button in config this code will be executed
		if ("denyButton" in config && config.denyButton.showButton !== false) {
			buttonWrapper.append(
				silverBoxButtonComponent(config.denyButton, 'silverBox-deny-button'))
		}

		// confirm button

		// if there is no confirm button in config this code will be executed
		if (!("confirmButton" in config)) {
			config.confirmButton = {
				text: "Confirm",
				closeOnClick: true,
			}
		}
		else {
			if (config.confirmButton.showButton !== false) {
				// if there is confirm button in config and if the showButton is not false this code will be executed
				buttonWrapper.append(
					silverBoxButtonComponent(config.confirmButton, 'silverBox-confirm-button')
				);
			}

		}

		// pushes the buttonWrapper inside the elements Array
		elementsArray.push(buttonWrapper);

		// adds footer if it is inside the config and it exists
		if (config.footer) {
			elementsArray.push(silverBoxFooterComponent({
				footerInside: config.footer
			}))
		}

		// checks if we have inputs in config, the whole thing will be added into a form
		// else, the whole thing will be added to body w/o form tag
		// also checks for positions , if we have a position, the overlay class will be changed related to the position config

		// modalSampleConfig
		const modalSampleConfig = (className, isInputValue) => {
			return (
				bodyEl.append(
					silverBoxModalSample({
						elementsArray: elementsArray,
						overlayClass: className,
						isInput: isInputValue,
						theme: config.theme,
						direction: config.direction,
						centerContent: config.centerContent
					})
				)
			)
		}


		// if there is position in config this code will be executed
		if ("position" in config) {
			// if the modal has the input config
			if ("input" in config) {
				modalSampleConfig(`silverBox-${config.position}`, true)
			}
			// if the modal doesnt have the input config
			else {
				modalSampleConfig(`silverBox-${config.position}`, false)
			}

		}
		// if there is no position in config this code will be executed
		else {
			// if the modal has the input config
			if ("input" in config) {
				modalSampleConfig("silverBox-overlay", true)
			}
			// if the modal doesnt have the input config
			else {
				modalSampleConfig("silverBox-overlay", false)
			}

		}

		// checks if we have time config, true => the modal will be removed after the given time
		if ("timer" in config) {
			setTimeout(() => {
				silverBoxCloseButtonOnClick();
			}, config.timer);
		}

		// selecting overLay
		const silverBoxWrapper = document.querySelector(".silverBox-wrapper");
		const silverBoxOver = document.querySelector(".silverBox");


		// adding event listener for overlay
		// if the clicked element has classList of silverBox-overlay this code will be executed
		if (silverBoxWrapper) silverBoxWrapper.addEventListener("click", () => {
			silverBoxWrapper.remove();
		});
		silverBoxOver.addEventListener("click", (e) => {
			e.stopPropagation();
		});
	}
}
