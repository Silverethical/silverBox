// import components
import silverBoxButtonComponent from "./components/silverBox/button";
import silverBoxInputComponent from "./components/silverBox/input";
import createSilverBox from "./components/silverBox/createSilverBox";
import silverBoxHeaderComponent from "./components/silverBox/header";
import silverBoxIconsComponent from "./components/silverBox/icons";
import silverBoxBodyComponent from "./components/silverBox/silverBoxBody";
import silverBoxFooterComponent from "./components/silverBox/footer";
import silverBoxUniqueNumberMaker from "./helpers/silverBox/uniqueNumber";
import silverBoxDisableScroll from "./helpers/silverBox/disableScroll";
import removeAllSilverBoxes from "./helpers/silverBox/removeAllSilverBoxes";
import silverBoxRemoveLoadings from "./helpers/silverBox/removeLoadings";
import silverBoxTimerBar from "./helpers/silverBox/timerBar";
import applyAnimation from "./helpers/silverBox/applyAnimation";
import silverBoxClose from "./helpers/closeButtonOnClick";

/**
 * SilverBox function that creates silverBox by provided config.
 * @param {Object} config - object of related keys to silverBox settings.
 */
function silverBox(config = {}) {
	try {
		// Logs out an error if silverBox config is empty.
		if (Object.keys(config).length === 0) {
			throw new Error("You can't create silverBox with an empty config.");
		}

		// Calls the "removeAllSilverBoxes" function to remove silverBox by provided config.
		if ("removeSilverBox" in config) {
			removeAllSilverBoxes(config.removeSilverBox);
		}

		// Calls the "silverBoxRemoveLoadings" function to remove silverBox button loadings by provided config.
		if ("removeLoading" in config) {
			silverBoxRemoveLoadings(config.removeLoading);
		}

		// Object of all silverBox components.
		const components = {};

		// Object of body wrapper related components.
		const bodyComponents = {};

		// Create input wrapper for all inputs in provided config.
		const inputWrapper = document.createElement("div");

		// Add default className for "inputWrapper".
		inputWrapper.classList = "silverBox-input-container";

		// Create button wrapper for all buttons provided in config.
		const buttonWrapper = document.createElement("div");

		// Add default className for "buttonWrapper".
		buttonWrapper.classList = "silverBox-button-wrapper";

		// Create a function that returns icon related properties provided in config.
		const iconsConfig = () => {
			return {
				alertIcon: config.alertIcon,
				customIcon: config.customIcon,
				isCentred: config.centerContent,
				customIconClassName: config.customIconClassName,
				customIconId: config.customIconId,
				customSvgIcon: config.customSvgIcon,
				customSvgIconClassName: config.customSvgIconClassName,
				customSvgIconId: config.customSvgIconId,
			};
		};

		// Assign "silverBoxHeaderComponent" to a constant to put it inside "components" object.
		const headerLayout = silverBoxHeaderComponent({
			titleConfig: config.title,
			icon: silverBoxIconsComponent(iconsConfig()),
			showCloseButton: config.showCloseButton,
			centerContent: config.centerContent,
			onCloseConfig: config.onClose,
		});

		// Assign "headerLayout" constant as header key in "components" object.
		if (headerLayout.childElementCount !== 0) components.header = headerLayout;

		if ("input" in config) {
			/**
			 * Returns an object with specified configuration properties for an input element.
			 * @param {Object} selector - The selector object containing input configuration properties.
			 * @returns {Object} - The input configuration object.
			 */
			const inputConfig = (selector) => {
				return {
					type: "type" in selector ? selector.type : "",
					select: selector.select,
					numberOnly: selector.numberOnly,
					hint: selector.hint,
					label: selector.label,
					placeHolder: selector.placeHolder,
					readOnly: selector.readOnly,
					width: selector.width,
					height: selector.height,
					maxLength: selector.maxLength,
					textAlign: selector.textAlign,
					fontSize: selector.fontSize,
					placeHolderFontSize: selector.placeHolderFontSize,
					name: selector.name,
					className: selector.className,
					id: selector.id,
					value: selector.value,
				};
			};

			const multiplyByCheck = (selector) => {
				// If there is no "multiplyBy" in config, this code is executed.
				if (!("multiplyBy" in selector)) selector.multiplyBy = 1;

				// Loops throw "multiplyBy" config to creates the given number of inputs by checking "multiplyBy" property.
				for (let i = 1; i <= selector.multiplyBy; i++) {
					inputWrapper.append(
						silverBoxInputComponent(inputConfig(selector))
					);
				}
			};

			// Loops throw "config.input" if it's an array and adds it to the input wrapper by calling
			// "multiplyByCheck". If there it's not an array it will be called only once.
			Array.isArray(config.input)
				? config.input.forEach((input) => multiplyByCheck(input))
				: multiplyByCheck(config.input);

			// Add "inputWrapper" to "component" object.
			if (inputWrapper.childElementCount) bodyComponents.input = inputWrapper;
		}

		// Array of Buttons config.
		const buttonsConfig = [
			{
				type: "confirmButton",
				text: "Confirm",
			},
			{
				type: "denyButton",
				text: "Deny",
			},
			{
				type: "cancelButton",
				text: "Cancel",
			},
			{
				type: "customButton",
				text: "Custom",
			},
		];

		// Loop over buttons config in order to create them.
		for (const button of buttonsConfig) {
			if (button.type in config && config[button.type].showButton !== false) {
				buttonWrapper.append(
					silverBoxButtonComponent(
						config[button.type],
						`silverBox-${button.text.toLowerCase()}-button`,
						button.text,
						config.onClose
					)
				);
			}
		}

		// Sets "buttonWrapper" direction.
		if ("buttonsDirection" in config) {
			buttonWrapper.style.direction = config.buttonsDirection;
		}

		// Pushes the "buttonWrapper" inside the "bodyComponents" for appending it to silverBox.
		if (buttonWrapper.childElementCount) bodyComponents.button = buttonWrapper;

		// Create "bodyComponent" variable config for "silverBoxBodyComponent".
		const bodyLayoutConfig = silverBoxBodyComponent({
			htmlText: config.html,
			bodyText: config.text,
			components: bodyComponents,
			isInput: config.input,
		});

		// Adds "bodyComponentConfig" to "components" object to append it inside silverBox if it's not empty.
		if (bodyLayoutConfig.childElementCount) components.body = bodyLayoutConfig;

		// Adds "footer" config as "footer" key in "components" Object.
		if (config.footer) {
			components.footer = silverBoxFooterComponent({
				footerContent: config.footer,
			});
		}

		/**
		 * This function adds a sample modal configuration to the document body.
		 * @param {String} className - The class name used for positioning the modal box.
		 * @param {Boolean} isInputValue - Determines if the modal box contains an input field.
		 * @returns {void}
		 */
		const modalSampleConfig = (className) => {
			if (Object.keys(components).length === 0) return null;

			const createdSilverBox = createSilverBox({
				components: components,
				positionClassName: className,
				theme: config.theme,
				direction: config.direction,
				centerContent: config.centerContent,
			});

			document.body.append(createdSilverBox);

			return createdSilverBox;
		};

		// If "position" exists in "config",sets the "position" variable to "silverBox-${config.position}"
		// otherwise, it sets it to the value `"silverBox-overlay"`.
		const position =
			"position" in config
				? `silverBox-${config.position}`
				: "silverBox-overlay";

		// Calls "modalSampleConfig" with value provided from "position" to create silverBox.
		// Store it to be used in the returned methods at the end.
		const silverBoxElement = modalSampleConfig(position);

		// Select "silverBoxWrapper"
		let silverBoxWrapper = document.querySelectorAll(".silverBox-container");

		// Reassign silverBoxWrapper value with the last element in NodeList to set timer.
		silverBoxWrapper = silverBoxWrapper[silverBoxWrapper.length - 1];

		// Create silverBox uniqueID by calling "silverBoxUniqueNumberMaker" to remove silverBox.
		const uniqueID = silverBoxUniqueNumberMaker(1_000_000);

		// Set the unique ID as an attribute to the modal.
		if (silverBoxWrapper) {
			silverBoxWrapper.setAttribute("data-unique-id", uniqueID);
		}

		// If "timer" is provided in config, the modal will be removed after the given time.
		if ("timer" in config) {
			// changes the title config to an object if the given value is a number, so as a result we can use this config as either an object or a number.
			if (typeof config.timer === "number" || "ُstring")
				config.timer = { timer: config.timer };

			// Handle the timerBar functionalities
			silverBoxTimerBar({
				uniqueID,
				timerConfig: config.timer,
				pauseTimerOnHover: config.pauseTimerOnHover,
				showTimerBar: config.showTimerBar,
				onClose: config.onClose,
			});
		}

		// Select silverBox overlay to give it an eventListener.
		let silverBoxOverlay = document.querySelectorAll(".silverBox-overlay");

		// if the clicked element has classList of silverBox-overlay this code will be executed.
		if (silverBoxOverlay) {
			for (const overlay of silverBoxOverlay) {
				overlay.addEventListener("click", (e) => {
					// closes the modal if the user clicks on the overlay (outside of the modal).
					if (e.target === overlay) {
						silverBoxClose({
							onClose: config.onClose,
							element: overlay,
						});
					}
					// checks for silverBox after removing wrapper.
					silverBoxDisableScroll(".silverBox-overlay");
				});
			}
		}

		// Checks for silverBox after it's created.
		silverBoxDisableScroll(".silverBox-overlay");

		// If silverBoxId is in config
		if ("silverBoxId" in config) silverBoxWrapper.id = config.silverBoxId;

		// Add silverBox className
		if ("silverBoxClassName" in config) {
			silverBoxWrapper.classList += ` ${config.silverBoxClassName}`;
		}

		// Add animation to silverBox
		if ("animation" in config) {
			// Select "silverBox" to give it animation
			const silverBox = document.querySelector(
				`.silverBox-container[data-unique-id="${uniqueID}"] .silverBox`
			);

			if (!!silverBox) {
				// Set animation for the silverBox element based on the configuration provided.
				// If "animation" is an array, each animation value will be added to silverBox as part of the animation sequence.
				// If "animation" is an object, it will be called once and its values will be applied as an animation to silverBox.
				silverBox.style.animation = Array.isArray(config.animation)
					? config.animation
							.map((animation) => applyAnimation(animation))
							.join(", ")
					: applyAnimation(config.animation);
			}
		}

		if (silverBoxElement === null) return null;

		return {
			remove: () => {
				document.body.removeChild(silverBoxElement);
			},
			removeLoading: (selector = "") => {
				const buttons = silverBoxElement.querySelectorAll(
					`button${selector}`
				);
				buttons.forEach((button) => {
					button.classList.remove("silverBox-loading-button");
				});
			},
		};
	} catch (error) {
		throw error;
	}
}

export default silverBox;
