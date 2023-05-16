// disables scroll
function silverBoxDisableScroll(select) {
    // selector 
    let silverBoxWrapper = document.querySelectorAll(select);
    // if the class node list is empty this code will be executed
    if (silverBoxWrapper.length <= 0) {
        document.body.classList.remove("stop-scrolling");
    }
     // if the class node list is not empty this code will be executed
    else {
        document.body.classList.add("stop-scrolling");
    }
}

// import
/** selects the silverBox container and closes the element*/
function silverBoxCloseButtonOnClick({ uniqueID, timer }) {
	// if the modal doesn't have a timer, the modal will be closed on click
	if (!timer) {
		// selects the all silverBox-container classes in the page
		const silverBox = document.querySelectorAll(".silverBox-container");

		if (silverBox[silverBox.length - 1]) silverBox[silverBox.length - 1].remove();
		// checks for silverBoxAfter removing the wrapper
		silverBoxDisableScroll(".silverBox-overlay");

	}
	// else, THE specific modal will be removed from page
	else {
		silverBoxCloseAfterTimeout(uniqueID, timer);
	}
}
// this function will remove a specific element with the unique ID and after a specific timeout
function silverBoxCloseAfterTimeout(elementID, timeOut) {
	// selects the element by the unique ID
	const uniqueTimeOutElement = document.querySelector(`[uniqueID="${elementID}"]`);

	setTimeout(() => {
		if (uniqueTimeOutElement) uniqueTimeOutElement.remove();
		silverBoxDisableScroll(".silverBox-overlay");
	}, timeOut);
}

/**
 * Creates loading animation element
 * @returns {Element} - loading animation element
 */
function silverBoxLoadingAnimation() {
    let loadingEl = document.createElement("span");
    loadingEl.classList.add("silverBox-button-loading-animation");
    return loadingEl
}

/**
 *
 * @param {object} buttonName - button config
 * @param {string} uniqClass - button classList
 * @returns
 */
function silverBoxButtonComponent(buttonName, uniqClass, defaultText) {

	// button
	let button = document.createElement("button");
	button.style.background = buttonName.bgColor;

	// button data attributes
	if (buttonName.dataAttribute) {
		for (const [key, value] of Object.entries(buttonName.dataAttribute)) {
			// sets the data attr
			button.setAttribute(`data-${key}`, value);
		}
	}

	// inline styles
	if (buttonName.bgColor) button.style.backgroundColor = buttonName.bgColor;
	if (buttonName.borderColor) button.style.borderColor = buttonName.borderColor;
	if (buttonName.textColor) button.style.color = buttonName.textColor;
	if (buttonName.disabled) button.disabled = buttonName.disabled;


	button.classList.add("silverBox-button", uniqClass);

	// adds an ID that user wants
	if (buttonName.id) button.id = buttonName.id;
	// adds a Class that user wants	
	if (buttonName.className) buttonName.className.split(' ').forEach(className => button.classList.add(className));

	// if closeOnClick in config is true the code will be executed
	if (buttonName.closeOnClick === true || !("closeOnClick" in buttonName)) {
		button.onclick = silverBoxCloseButtonOnClick;
	}
	// if closeOnClick in config is false the code will be executed
	else {
		// loading animation
		if (buttonName.loadingAnimation !== false && !buttonName.loadingAnimation) {
			buttonName.loadingAnimation = true;
		}
		if (buttonName.loadingAnimation === true) {
			button.addEventListener("click", () => {
				button.classList.add('silverBox-loading-button');
			});
		}
	}


	// button left icon
	if (buttonName.iconStart) {
		let buttonLeftIcon = document.createElement("img");
		buttonLeftIcon.setAttribute("src", buttonName.iconStart);
		buttonLeftIcon.classList.add('silverBox-button-icon');
		button.appendChild(buttonLeftIcon);
	}
	// button text
	let buttonTextSpan = document.createElement("span");
	buttonTextSpan.classList.add("silverBox-button-text");
	buttonTextSpan.textContent = buttonName.text ? buttonName.text : defaultText;
	button.appendChild(buttonTextSpan);
	button.append(silverBoxLoadingAnimation());
	// button right icon
	if (buttonName.iconEnd) {
		let buttonRightIcon = document.createElement("img");
		buttonRightIcon.setAttribute("src", buttonName.iconEnd);
		buttonRightIcon.classList.add('silverBox-button-icon');
		button.appendChild(buttonRightIcon);
	}
	// appends everything into button
	return button;
}

/**
 * Returns inputWrapper element based on given arguments from config
 * @param {string} type - type of input
 * @param {string} placeHolder - placeHolder of input
 * @param {boolean} readOnly - value of input readonly attribute which is either true or false
 * @param {string} label - label name of input
 * @param {string} hint - hint of input
 * @param {string} width - width of input
 * @param {string} height - height of input
 * @param {string} maxLength - maxLength attribute of input
 * @param {string} textAlign - specifies the position of texts in input
 * @param {string} fontSize - text fontSize of input
 * @param {string} placeHolderFontSize - placeHolder fontSize of input
 * @returns {Element} - inputWrapper element
 */
function silverBoxInputComponent({ type, select, numberOnly, placeHolder, readOnly, label, hint, width, height, maxLength, textAlign, fontSize, placeHolderFontSize, name, className, id, value }) {
	// changing the type case to lowerCase to avoid case conflict problem
	type = type.toLowerCase();

	// parent and children element creation
	let inputWrapper = document.createElement('div');
	inputWrapper.classList.add('silverBox-input');

	// label
	let labelEl = document.createElement("label");
	labelEl.textContent = label;

	// select
	let selectEl = document.createElement('select');
	selectEl.classList.add('silverBox-select');

	// checks if the select config exists
	if (select) {
		let optionsArray = [];
		// creates option elements based on the given configs
		select.forEach(option => {
			// each option element creation
			let optionEl = document.createElement('option');
			// sets the option value
			optionEl.setAttribute('value', option.value ? option.value : '');
			// sets the option text (if text doesn't exist, the text value will be the option value )
			optionEl.textContent = option.text ? option.text : option.value;
			// gives the option element a disabled attr if the config exists
			if (option.disabled) optionEl.setAttribute('disabled', '');
			// gives the option element a selected attr if the config exists
			if (option.selected) optionEl.setAttribute('selected', '');

			// pushes each new config to the array
			optionsArray.push(optionEl);


		});
		// appends the option into the selectEl
		optionsArray.forEach(optionEl => {
			selectEl.append(optionEl);
		});

	}
	// input or textArea selection conditions
	let inputEl;

	if (type !== "textarea") {
		inputEl = document.createElement('input');
		if (type) inputEl.setAttribute('type', type);
	}
	else {
		inputEl = document.createElement('textArea');
	}
	// sets the value for the input
	if (value) inputEl.value = value;

	// hint
	let hintEl = document.createElement('span');
	hintEl.classList.add('silverBox-input-hint');
	hintEl.textContent = hint;

	// general input/textArea configs
	if (placeHolder) inputEl.setAttribute('placeholder', placeHolder);
	if (maxLength) inputEl.setAttribute('maxlength', maxLength);
	if (textAlign) inputEl.style.textAlign = textAlign;

	// add input elements custom height and width and fontSize if their given
	inputEl.style.width = width;
	inputEl.style.height = height;
	inputEl.style.fontSize = fontSize;

	// converts text input to numberOnly input
	if (numberOnly) {

		inputEl.addEventListener('input', () => {
			// first, replaces the persian digits to english, then only allows the numeric characters
			inputEl.value = inputEl.value.replace(/[۰-۹]/g, digit => '۰۱۲۳۴۵۶۷۸۹'.indexOf(digit)).replace(/[^0-9]/g, '');
		});

	}
	if (!placeHolderFontSize) {
		if (fontSize) inputEl.style.setProperty('--silverBox-placeHolder-fontSize', fontSize);
	}
	else {
		if (placeHolderFontSize) inputEl.style.setProperty('--silverBox-placeHolder-fontSize', placeHolderFontSize);

	}

	// giving inputs id/class and name attribute
	// name
	if (name) inputEl.setAttribute("name", name);
	if (className) className.split(" ").forEach(className => inputEl.classList.add(className));
	if (id) inputEl.id = id;
	// restart the inputs/textArea parent's width if the width exist
	if (width) inputWrapper.style.width = 'fit-content';

	// readOnly condition for inputs
	if (readOnly) inputEl.setAttribute('readonly', '');

	// appending label,hint and input/select to the inputWrapper
	if (label) inputWrapper.append(labelEl);
	// checks if the select config is given, if it's true the select element will be replaced as the input
	if (select) {

		inputWrapper.append(selectEl);

	}
	else {
		inputWrapper.appendChild(inputEl);
	}
	if (hint) inputWrapper.appendChild(hintEl);

	return inputWrapper


}

/**
 * Returns silverBox overlay based on given argument from config
 * @param {string} direction - html direction value
 * @param {object} elementsArray - array of elements
 * @param {string} overlayClass - overlay of silverBox className
 * @param {boolean} isInput - boolean value
 * @param {string} theme - html data-theme attribute value which is either light or dark
 * @param {boolean} centerContent - specifies wether the content is centered or not
 * @returns {Element} - silverBox overlay
 */
function silverBoxModalSample({ direction, elementsArray, overlayClass, isInput, theme = 'light', centerContent }) {

    // form 
    let form = document.createElement('form');
    form.classList.add('silverBox-form');

    // form preventDefault
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });
    // main overlay
    let overlay = document.createElement('div');
    overlay.classList.add("silverBox-container");
    overlay.classList.add(overlayClass);
    overlay.setAttribute("data-theme", theme);

    // the modalBox
    let silverBoxModal = document.createElement('div');
    silverBoxModal.classList.add('silverBox');
    if (direction) silverBoxModal.setAttribute('dir', direction);
    // centers the modal contents if the config is given
    if (centerContent) silverBoxModal.style.textAlign = "center";

    // checks if we have inputs in the given config, if true the elements will be added to a form elements, else there will be no form elements
    if (isInput) {

        elementsArray.forEach(element => {
            form.append(element);
        });
        silverBoxModal.append(form);

    }
    else {
        elementsArray.forEach(element => {
            silverBoxModal.append(element);
        });
    }
    if (silverBoxModal.childElementCount !== 0) overlay.append(silverBoxModal);
    // returns the whole thing
    if (overlay.childElementCount !== 0) return overlay

}

/**
 * Returns an icon based on the alert icon type and custom icon URL. If a custom icon URL is provided,
 * the function will create a user icon using the provided URL. Otherwise, it retrieves the requested icon
 * from the icons object and optionally centers it if the isCentred parameter is true.
 *
 * @param {string} alertIcon - The name of the alert icon to retrieve from the icons object (e.g. "warning").
 * @param {string} customIcon - The URL of a custom icon, if one is specified.
 * @param {string} customSvgIcon - The URL of a custom svg icon, if one is specified.
 * @param {boolean} isCentred - Determines whether to center the icon or not (default is false).
 *
 * @returns {Element|null} - The requested icon element or null if no matching icon was found.
 */
const silverBoxIconsComponent = ({ alertIcon, customIcon, customSvgIcon, isCentred = false, customIconClassName, customIconId, customSvgIconClassName, customSvgIconId }) => {
	// Check if a custom icon URL was provided.
	if (customIcon) {
		// Create a new custom icon element using the provided URL and clone it to avoid modifying the original icon.
		const clonedIcon = silverBoxCreateCustomIcon(customIcon, isCentred, customIconClassName, customIconId, false).cloneNode(
			true
		);

		return clonedIcon;
	}

	// Check if a custom svg icon URL was provided.
	if (customSvgIcon) {
		// Create a new svg icon element using the provided URL and clone it to avoid modifying the original icon.
		const clonedIcon = silverBoxCreateCustomIcon(customSvgIcon, isCentred, customSvgIconClassName, customSvgIconId, true).cloneNode(
			true
		);

		return clonedIcon;
	}

	// Check if isCentred is true and if the requested icon exists in the icons object.
	if (icons[alertIcon]) {
		// Retrieve the requested icon from the icons object and clone it to avoid modifying the original icon.
		const clonedIcon = icons[alertIcon].cloneNode(true);

		// Add the "centered-icon" class to the cloned icon element.
		if (isCentred) clonedIcon.classList.add("silverBox-centered-icon");

		// Return the cloned icon element.
		return clonedIcon;
	}

	// Return null if no matching icon was found.
	return null;
};

// Create an object to store the available icons.
const icons = {
	warning: createIcon("silverBox-warning", "!"),
	success: createIcon("silverBox-tick-mark", "", "inside"),
	info: createIcon("silverBox-info", "i"),
	error: createIcon("silverBox-error", "", "x"),
	question: createIcon("silverBox-question", "?"),
};

/**
 * Creates an icon element with the specified class name and child element (if any).
 * @param {string} className - The class name for the icon element.
 * @param {string} text - The text to display in the icon element (if any).
 * @param {string} childClass - The class name for a child element (if any).
 * @returns {Element} - The icon element.
 */
function createIcon(className, text, childClass) {

	// Create a new div element with the specified class name and class.
	const icon = document.createElement("div");
	icon.classList = className;
	icon.classList.add("silverBox-icon", "silverBox-default-icon");

	// If childClass is defined, create a child div element with the specified class name and append it to the icon element.
	if (childClass) {
		const child = document.createElement("div");
		child.classList = childClass;
		icon.appendChild(child);
	}
	// If text is defined, create a new span element with the text and append it to the icon element.
	else if (text) {
		const span = document.createElement("span");
		span.textContent = text;
		icon.appendChild(span);
	}
	// append icon into
	return icon;
}

/**
* A function that creates a user icon element with the specified url.
*
* @param {string} customIcon - The URL for the user icon.
* @param {boolean} isCentred - Whether to center the icon or not.
* @param {string} customIconClassName - A custom class to add to the icon element.
* @param {string} customIconId - A custom ID to add to the icon element.
*
* @returns {HTMLElement} The user icon element created.
*/
function silverBoxCreateCustomIcon(customIcon, isCentred, className, id, isSvg) {
	// create 
	const customIconWrapper = document.createElement("div");
	customIconWrapper.classList.add(`silverBox-image-wrapper`);

	// give wrapper a centred class if it's given
	if (isCentred) customIconWrapper.classList.add("silverBox-centered-icon");
	// Adds customIcon Id
	if (id) customIconWrapper.id = id;
	// Adds customIcon class
	if (className) className.split(' ').forEach(className => { customIconWrapper.classList.add(className); });

	// element creation

	// if there is no svg config the image element will be created
	if (isSvg === false) {
		const img = document.createElement("img");
		img.setAttribute("src", customIcon);
		img.classList.add("silverBox-icon", "silverBox-custom-icon");
		customIconWrapper.append(img);

	}
	// if there is a svg config the svg code will be added to the wrapper
	if (isSvg) {
		customIconWrapper.innerHTML += customIcon;
	}


	return customIconWrapper;
}

/** imports */

/**
 * Returns headerWrapper based on given arguments from config
 * @param {string} title - silverBox title text
 * @param {string} htmlText - silverBox html element under title
 * @param {string} simpleText - silverBox paragraph under title
 * @param {string} imageSource - silverBox icon
 * @param {string} closeButton - silverBox closeButton
 * @returns {Element} - headerWrapper element
 */
function silverBoxHeaderComponent({
    titleConfig,
    htmlText,
    simpleText,
    imageSource,
    closeButton,
    centerContent,

}) {
    // header wrapper
    let headerWrapper = document.createElement("div");
    headerWrapper.classList.add('silverBox-header-wrapper');
    // icon and closeButton wrapper
    let iconWrapper = document.createElement('div');
    iconWrapper.classList.add('silverBox-icon-wrapper');

    // title 
    //title wrapper
    let title = document.createElement("h2");
    title.classList.add("silverBox-header-title");

    // titleText
    let titleSpan = document.createElement('span');
    if (titleConfig?.text) titleSpan.textContent = titleConfig.text;


    // title Icons conditions   
    if ((titleConfig?.customIcon && titleConfig?.alertIcon) || (titleConfig?.customIcon && titleConfig?.customSvgIcon) || titleConfig?.customIcon) {
        // stores returned customIcon element into a variable
        let customIcon = silverBoxIconsComponent({ customIcon: titleConfig?.customIcon });

        // if titleCustomIcon id exists, the img element of the customIcon Wrapper will receive given Id
        if (titleConfig?.customIconId) customIcon.children[0].parentElement.id = titleConfig?.customIconId;

        // if titleCustomIcon class exists, the img element of the customIcon Wrapper will receive given class
        if (titleConfig?.customIconClassName) titleConfig?.customIconClassName.split(" ").forEach(className => { customIcon.children[0].parentElement.classList.add(className); });



        // if customIcon exists due to iconComponent conditions, it will be added to the titleWrapper
        if (customIcon) {
            title.append(customIcon);
        }
    }
    else if (titleConfig?.alertIcon) {
        // stores returned alertIcon element into a variable
        let alertIcon = silverBoxIconsComponent({ alertIcon: titleConfig?.alertIcon });

        // if alertIcon exists due to iconComponent conditions, it will be added to the titleWrapper
        if (alertIcon) {
            title.append(alertIcon);
        }

    }
    // customSvgIcon

    else if ((titleConfig?.customSvgIcon)) {

        let customSvgIcon = silverBoxIconsComponent({ customSvgIcon: titleConfig?.customSvgIcon });

        // if titleCustomIcon id exists, the img element of the customIcon Wrapper will receive given Id
        if (titleConfig?.customSvgIconId) customSvgIcon.children[0].parentElement.id = titleConfig?.customSvgIconId;

        // if titleCustomIcon class exists, the img element of the customIcon Wrapper will receive given class
        if (titleConfig?.customSvgIconClassName) titleConfig?.customSvgIconClassName.split(" ").forEach(className => { customSvgIcon.children[0].parentElement.classList.add(className); });

        // if customSvgIcon exists due to iconComponent conditions, it will be added to the titleWrapper
        if (customSvgIcon) {
            title.append(customSvgIcon);
        }
    }
    // checks if parentELement has a icon, if true the has-icon class will be given 
    if (title.childElementCount >= 1) title.classList.add('silverBox-title-has-icon');

    // if centerContent is true the title children will be centred
    if (centerContent) title.classList.add('silverBox-title-centred');



    // appending text to the wrapper
    title.append(titleSpan);


    // htmlStructure    
    let htmlStructure = document.createElement("div");
    htmlStructure.classList.add("silverBox-header-description");
    htmlStructure.innerHTML = htmlText;

    // textStructure
    let textStructure = document.createElement("p");
    textStructure.textContent = simpleText;
    textStructure.classList.add("silverBox-header-description");

    // svg of closeButton button
    let closeButtonEl = document.createElement("span");
    closeButtonEl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><line x1="368" y1="368" x2="144" y2="144" style="fill:none;stroke:#667085;stroke-linecap:round;stroke-linejoin:round;stroke-width:33px"/><line x1="368" y1="144" x2="144" y2="368" style="fill:none;stroke:#667085;stroke-linecap:round;stroke-linejoin:round;stroke-width:33px"/></svg>';
    closeButtonEl.onclick = silverBoxCloseButtonOnClick;
    closeButtonEl.classList.add("silverBox-close-button");

    // add icon to iconWrapper
    if (imageSource) iconWrapper.appendChild(imageSource);
    // add closeButton to iconWrapper
    if (closeButton) iconWrapper.appendChild(closeButtonEl);

    // appends the icon Wrapper to headerWrapper
    if (iconWrapper.childElementCount !== 0) headerWrapper.append(iconWrapper);
    // add title to headerWrapper
    if (titleConfig) headerWrapper.appendChild(title);


    // add htmlStructure/text to headerWrapper
    if (htmlText && simpleText) {
        headerWrapper.appendChild(htmlStructure);
    } else if (htmlText) {
        headerWrapper.appendChild(htmlStructure);
    } else if (simpleText) {
        headerWrapper.appendChild(textStructure);
    }
    // checks if header Element is empty or not
    return headerWrapper.childElementCount !== 0 ? headerWrapper : ''


}

/**
 * Returns footer element based on arguments as text
 * @param {string} footerInside - footer element textContent
 * @returns {Element} footer element
 */
function silverBoxFooterComponent({ footerInside }) {
    // creates footer
    let footerEl = document.createElement("div");
    // creates footer inside div
    let footerInsideEl = document.createElement("div");
    footerEl.classList.add("silverBox-footer");
    // creates hr line
    let line = document.createElement("hr");
    // adds given argument as HTML element to footerInsideEl
    footerInsideEl.innerHTML = footerInside;

    // appends elements to footerEl
    footerEl.append(line);
    footerEl.append(footerInsideEl);
    // returns the footer
    return footerEl
}

// creates a random Number
// uniqueNumber
let uniqueNumber = 0;

function silverBoxUniqueNumberMaker(maxVal) {

    // randomNumber
    const randomNumber = Math.floor((Math.random() * maxVal) + 1);
    // checks if the number exists in the array, if true it will pushed into the array and also will be returned
    if (uniqueNumber !== randomNumber) {
        uniqueNumber = randomNumber;
        return uniqueNumber;
    }
    // if it's false, the function will be called once again
    else {
        silverBoxUniqueNumberMaker(maxVal);
    }

}

/**
 * removes all silverBox's
 * @param {string} - value of silverBox that wants to be removed
 */
function removeAllSilverBoxes(index) {
    // converts the index to lowercase
    index = index.toLowerCase();
    // selector
    const silverBoxes = document.querySelectorAll('.silverBox-container');

    // changes the indexes
    if (index === "first") index = 1;
    if (index === "last") index = silverBoxes.length;

    // all
    if (index === "all") {
        for (let i = 0; i < silverBoxes.length; i++) {
            silverBoxes[i].remove();
        }
    }
    // number
    else if (Number(index) > 0) {
        silverBoxes[Number(index) - 1].remove();
    }
}

function silverBoxRemoveLoadings(animationIndex) {
    // select SilverBox buttonWrapper
    let silverBoxButtonWrapper = document.querySelectorAll('.silverBox-button-wrapper');

    // converts the given value to lowerCase
    animationIndex.toLowerCase();

    // covert the indexes 
    if (animationIndex === 'first') animationIndex = 1;
    if (animationIndex === 'last') animationIndex = silverBoxButtonWrapper.length;

    // removes all modal's button's loading
    if (animationIndex === 'all') {
        for (let i = 0; i < silverBoxButtonWrapper.length; i++) {
            silverBoxButtonWrapper[i].childNodes.forEach(button => {
                button.classList.remove('silverBox-loading-button');
            });

        }

    }
    // removes the nth modal's button's loading
    else if (Number(animationIndex) > 0) {
        silverBoxButtonWrapper[Number(animationIndex) - 1].childNodes.forEach(button => {
            button.classList.remove('silverBox-loading-button');
        });
    }

}

// import components

/**
	* SilverBox modal
	* @param {object} config - object of related keys to silverBox settings
	* puts the config keys as component arguments and creates a component based on given keys from object
	*/
function silverBox(config) {
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
		let elementsArray = [],
			bodyEl = document.body,
			inputWrapper = document.createElement("div"),
			buttonWrapper = document.createElement("div");
		buttonWrapper.classList.add("silverBox-button-wrapper");
		inputWrapper.classList.add("silverBox-input-wrapper");

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
			}
		};
		// header componentConfig
		const headerComponentConfig = silverBoxHeaderComponent({
			titleConfig: config.title,
			htmlText: config.html,
			simpleText: config.text,
			titleAlertIcon: config.titleAlertIcon,
			titleCustomIcon: config.titleCustomIcon,
			imageSource: silverBoxIconsComponent(iconsConfig()),
			closeButton: config.showCloseButton,
			centerContent: config.centerContent,
			titleCustomIconId: config.titleCustomIconId,
			titleCustomIconClassName: config.titleCustomIconClassName,
		});

		// if headerComponent is not empty this code will be executed
		if (headerComponentConfig.length !== 0) elementsArray.push(headerComponentConfig);

		/** inputs */
		/** if inputs exist */
		if ("input" in config) {
			const inputConfig = (selector) => {
				return {
					type: "type" in selector ? selector.type : '',
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
					value: selector.value
				};
			};

			// checks if inputs have the multiPlyBy config or not 
			const multiplyByCheck = (selector) => {
				if ("multiplyBy" in selector) {
					if (selector.multiplyBy <= 1) selector.multiplyBy = 1;
					// loops to creates the given number of inputs
					for (let i = 1; i <= selector.multiplyBy; i++) {
						inputWrapper.append(silverBoxInputComponent(inputConfig(selector)));
					}
				} else {
					inputWrapper.append(silverBoxInputComponent(inputConfig(selector)));

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
			// adding inputWrapper to elementsArray
			inputWrapper.childElementCount !== 0 ? elementsArray.push(inputWrapper) : '';
		}

		// buttons config
		const buttonsConfig = [
			{
				type: "confirmButton",
				text: "Confirm"
			},
			{
				type: "denyButton",
				text: "Deny"
			},
			{
				type: "cancelButton",
				text: "Cancel"
			}
		];

		// loop over buttons config in order to create them.
		for (const button of buttonsConfig) {
			if (button.type in config && config[button.type].showButton !== false) {
				buttonWrapper.append(
					silverBoxButtonComponent(config[button.type], `silverBox-${button.text.toLowerCase()}-button`, button.text));
			}
		}

		// sets buttonWrapper direction
		if ("buttonsDirection" in config) buttonWrapper.style.direction = config.buttonsDirection;
		// pushes the buttonWrapper inside the elements Array

		if (buttonWrapper.innerHTML != '') elementsArray.push(buttonWrapper);

		// adds footer if it is inside the config and it exists
		if (config.footer) {
			elementsArray.push(silverBoxFooterComponent({
				footerInside: config.footer
			}));
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
		};


		// if there is position in config position will be set as the given config, otherwise it will be the main overlay
		let position = "position" in config ? `silverBox-${config.position}` : "silverBox-overlay";

		// checks if the input config exists in out given Config, due to it's output, the second argument will be set for our function
		if (elementsArray.length !== 0) modalSampleConfig(position, "input" in config);

		// Timer modal

		// silverBox wrapper select, to give it a timer 
		let silverBoxWrapper = document.querySelectorAll(".silverBox-container");
		silverBoxWrapper = silverBoxWrapper[silverBoxWrapper.length - 1];

		// checks if we have time config, true => the modal will be removed after the given time
		if ("timer" in config) {
			// uniqueID
			let uniqueID = silverBoxUniqueNumberMaker(1_000_000);

			// sets the unique ID as an attr to the modal
			if (silverBoxWrapper) silverBoxWrapper.setAttribute('uniqueID', uniqueID);

			// removes the specific element after the given timeout
			silverBoxCloseButtonOnClick({
				uniqueID,
				timer: config.timer
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
		if ("silverBoxClassName" in config) config.silverBoxClassName.split(" ").forEach(className => silverBoxWrapper.classList.add(className));
	}
}

export { silverBox as default };
