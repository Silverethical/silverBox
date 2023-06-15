// import components
import silverBoxButtonComponent from "./components/silverBox/button";
import silverBoxInputComponent from "./components/silverBox/input";
import createSilverBox from "./components/silverBox/createSilverBox";
import silverBoxHeaderComponent from "./components/silverBox/header";
import silverBoxIconsComponent from "./components/silverBox/icons";
import silverBoxCloseButtonOnClick from "./helpers/closeButtonOnClick";
import silverBoxBodyComponent from "./components/silverBox/silverBoxBody";
import silverBoxFooterComponent from "./components/silverBox/footer";
import silverBoxUniqueNumberMaker from "./helpers/silverBox/uniqueNumber";
import silverBoxDisableScroll from "./helpers/silverBox/disableScroll";
import removeAllSilverBoxes from "./helpers/silverBox/removeAllSilverBoxes";
import silverBoxRemoveLoadings from "./helpers/silverBox/removeLoadings";

/**
 * SilverBox modal
 * @param {object} config - object of related keys to silverBox settings
 * puts the config keys as component arguments and creates a component based on given keys from object
 */
export default function silverBox(config) {
	// if there is removeSilverBox in config
	if ("removeSilverBox" in config) {
		removeAllSilverBoxes(config.removeSilverBox);
	}

	// remove loading animation due to given config settings
	if ("removeLoading" in config) {
		silverBoxRemoveLoadings(config.removeLoading);
	}
	if (Object.keys(config).length !== 0) {
		/** selectors(before creating elements)*/
		/** array of all the elements in the modal (inputs/texts/icons/buttons) */
		const components = {},
			bodyComponents = {},
			bodyEl = document.body,
			inputWrapper = document.createElement("div"),
			buttonWrapper = document.createElement("div");
		buttonWrapper.classList.add("silverBox-button-wrapper");
		inputWrapper.classList.add("silverBox-input-container");

		/** pushes header into the modal */
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
		// header componentConfig
		const headerComponentConfig = silverBoxHeaderComponent({
			titleConfig: config.title,
			titleAlertIcon: config.titleAlertIcon,
			titleCustomIcon: config.titleCustomIcon,
			icon: silverBoxIconsComponent(iconsConfig()),
			showCloseButton: config.showCloseButton,
			centerContent: config.centerContent,
			titleCustomIconId: config.titleCustomIconId,
			titleCustomIconClassName: config.titleCustomIconClassName,
		});

		// if headerComponent is not empty this code will be executed
		if (headerComponentConfig.length !== 0)
			components.header = headerComponentConfig;

		/** inputs */
		/** if inputs exist */
		if ("input" in config) {
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

			// checks if inputs have the multiPlyBy config or not
			const multiplyByCheck = (selector) => {
				if ("multiplyBy" in selector) {
					if (selector.multiplyBy <= 1) selector.multiplyBy = 1;
					// loops to creates the given number of inputs
					for (let i = 1; i <= selector.multiplyBy; i++) {
						inputWrapper.append(
							silverBoxInputComponent(inputConfig(selector))
						);
					}
				} else {
					inputWrapper.append(
						silverBoxInputComponent(inputConfig(selector))
					);
				}
			};

			// checks if the input key is array
			// if true this code will be deployed
			if (Array.isArray(config.input)) {
				config.input.forEach((input) => {
					multiplyByCheck(input);
				});
			}
			// if false, this code will be deployed
			else {
				multiplyByCheck(config.input);
			}
			// adding inputWrapper to components
			inputWrapper.childElementCount !== 0
				? (bodyComponents.input = inputWrapper)
				: "";
		}

		// buttons config
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
		];

		// loop over buttons config in order to create them.
		for (const button of buttonsConfig) {
			if (button.type in config && config[button.type].showButton !== false) {
				buttonWrapper.append(
					silverBoxButtonComponent(
						config[button.type],
						`silverBox-${button.text.toLowerCase()}-button`,
						button.text
					)
				);
			}
		}

		// sets buttonWrapper direction
		if ("buttonsDirection" in config)
			buttonWrapper.style.direction = config.buttonsDirection;
		// pushes the buttonWrapper inside the elements Array

		if (buttonWrapper.innerHTML != "") bodyComponents.button = buttonWrapper;

		// create "bodyComponent" variable config for "silverBoxBodyComponent"
		const bodyComponentConfig = silverBoxBodyComponent({
			htmlText: config.html,
			bodyText: config.text,
			components: bodyComponents,
		});

		// if "silverBoxBodyComponent" length is more than 0, bodyComponentConfig is added to
		// "components" object
		if (bodyComponentConfig.length !== 0) components.body = bodyComponentConfig;

		// adds footer if it is inside the config and it exists
		if (config.footer) {
			components.footer = silverBoxFooterComponent({
				footerContent: config.footer,
			});
		}

		// checks if we have inputs in config, the whole thing will be added into a form
		// else, the whole thing will be added to body w/o form tag
		// also checks for positions , if we have a position, the overlay class will be changed related to the position config

		// modalSampleConfig
		const modalSampleConfig = (className, isInputValue) => {
			return bodyEl.append(
				createSilverBox({
					components: components,
					positionClassName: className,
					isInput: isInputValue,
					theme: config.theme,
					direction: config.direction,
					centerContent: config.centerContent,
				})
			);
		};

		// if there is position in config position will be set as the given config, otherwise it will be the main overlay
		let position =
			"position" in config
				? `silverBox-${config.position}`
				: "silverBox-overlay";

		// checks if the input config exists in out given Config, due to it's output, the second argument will be set for our function
		if (Object.keys(components).length !== 0)
			modalSampleConfig(position, "input" in config);

		// Timer modal

		// silverBox wrapper select, to give it a timer
		let silverBoxWrapper = document.querySelectorAll(".silverBox-container");
		silverBoxWrapper = silverBoxWrapper[silverBoxWrapper.length - 1];

		// checks if we have time config, true => the modal will be removed after the given time
		if ("timer" in config) {
			// uniqueID
			let uniqueID = silverBoxUniqueNumberMaker(1_000_000);

			// sets the unique ID as an attr to the modal
			if (silverBoxWrapper)
				silverBoxWrapper.setAttribute("uniqueID", uniqueID);

			// removes the specific element after the given timeout
			silverBoxCloseButtonOnClick({
				uniqueID,
				timer: config.timer,
			});
		}

		// adding event listener for overlay
		// if the clicked element has classList of silverBox-overlay this code will be executed
		let silverBoxOverlay = document.querySelectorAll(".silverBox-overlay");

		if (silverBoxOverlay) {
			for (const overlay of silverBoxOverlay) {
				overlay.addEventListener("click", (e) => {
					// closes the modal if the user clicks on the overlay (outside of the modal)
					if (e.target === overlay) {
						overlay.remove();
					}
					// checks for silverBox after removing wrapper
					silverBoxDisableScroll(".silverBox-overlay");
				});
			}
		}

		// checks for silverBox after creating the box
		silverBoxDisableScroll(".silverBox-overlay");

		// if silverBoxId is in config
		if ("silverBoxId" in config) silverBoxWrapper.id = config.silverBoxId;
		// if silverBoxClass is in config
		if ("silverBoxClassName" in config)
			config.silverBoxClassName
				.split(" ")
				.forEach((className) => silverBoxWrapper.classList.add(className));
	}
}
