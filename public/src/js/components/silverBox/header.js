/** imports */
import silverBoxIconsComponent from "./icons";
import silverBoxClose from "../../helpers/closeButtonOnClick";

/**
 * Returns headerWrapper based on given arguments from config
 * @param {Object} titleConfig - silverBox title Config
 * @param {String} icon - silverBox icon
 * @param {Boolean} showCloseButton - silverBox closeButton
 * @param {Boolean} centerContent - center silverBox header content
 * @returns {Object} - headerWrapper element
 */
function silverBoxHeaderComponent({
	titleConfig,
	icon,
	showCloseButton,
	centerContent,
	onCloseConfig,
}) {
	// header wrapper
	const headerWrapper = document.createElement("div");

	// add default className to headerWrapper
	headerWrapper.classList.add("silverBox-header-wrapper");

	// icon and closeButton wrapper
	const iconWrapper = document.createElement("div");

	// add default className to iconWrapper
	iconWrapper.classList.add("silverBox-icon-wrapper");

	// title wrapper
	const title = document.createElement("h2");

	// add default className to title
	title.classList.add("silverBox-header-title");

	/**
	 * titleConfig should be an object. So if only the 'text' has been provided,
	 * it needs to be converted to an object with a 'text' property.
	 */
	if (typeof titleConfig === "string") titleConfig = { text: titleConfig };

	// check if customIcon is needed
	if (titleConfig?.customIcon) {
		// stores returned customIcon element into a variable
		const customIcon = silverBoxIconsComponent({
			customIcon: titleConfig.customIcon,
		});

		// if titleCustomIcon id exists, the img element of the customIcon will receive given Id
		if (titleConfig?.customIconId)
			customIcon.children[0].id = titleConfig.customIconId;

		// if titleCustomIcon className exists, the img element of the customIcon will receive given class
		if (titleConfig?.customIconClassName) {
			customIcon.children[0].classList += ` ${titleConfig.customIconClassName}`;
		}

		// append the customIcon into the title
		title.append(customIcon);
	}
	// check if customSvgIcon is needed
	else if (titleConfig?.customSvgIcon) {
		// stores returned customSvgIcon element into a variable
		const customSvgIcon = silverBoxIconsComponent({
			customSvgIcon: titleConfig.customSvgIcon,
		});

		// if titleSvgCustomIcon id exists, the img element of the customIcon Wrapper will receive given Id
		if (titleConfig?.customSvgIconId)
			customSvgIcon.children[0].id = titleConfig.customSvgIconId;

		// if titleSvgCustomIcon class exists, the img element of the customIcon Wrapper will receive given class
		if (titleConfig?.customSvgIconClassName) {
			customSvgIcon.children[0].classList += ` ${titleConfig.customSvgIconClassName}`;
		}
		// append the customSvgIcon into the title
		title.append(customSvgIcon);
	}
	// check if alertIcon is needed
	else if (titleConfig?.alertIcon) {
		// stores returned alertIcon element into a variable
		const alertIcon = silverBoxIconsComponent({
			alertIcon: titleConfig.alertIcon,
		});

		// append the alertIcon into the title
		title.append(alertIcon);
	}
	// checks if parentELement has a icon, if true the has-icon class will be given
	if (title.childElementCount >= 1)
		title.classList.add("silverBox-title-has-icon");

	// if centerContent is true the title children will be centred
	if (centerContent) title.classList.add("silverBox-title-centred");

	// check if textConfig exists
	if (titleConfig?.text) {
		// create titleSpan element
		const titleSpan = document.createElement("span");

		// add a default className to the title element with some related styles
		title.classList.add("silverBox-title-text");

		// add the given text to titleSpan element
		titleSpan.textContent = titleConfig.text;

		// append the titleSpan to the title element
		title.append(titleSpan);
	}

	// create a span element for x button
	const closeButtonEl = document.createElement("span");

	// add "x" icon as a SVG to the closeButtonEl
	closeButtonEl.innerHTML = silverBoxIconsComponent({ alertIcon: "closeButton" });

	// add a default className to "x" button
	closeButtonEl.classList.add("silverBox-close-button");

	// add a onclick event for the closeButtonEl to close the Modal
	// closeButtonEl.onclick = silverBoxCloseButtonOnClick({ hasOverlay: true });
	closeButtonEl.addEventListener("click", () => {
		silverBoxClose({
			onClose: onCloseConfig,
			element: closeButtonEl,
		});
	});

	// add icon to iconWrapper
	if (icon) iconWrapper.appendChild(icon);

	// add closeButton to iconWrapper
	if (showCloseButton) iconWrapper.appendChild(closeButtonEl);

	// appends the icon Wrapper to headerWrapper
	if (iconWrapper.childElementCount >= 1) headerWrapper.append(iconWrapper);

	// add title to headerWrapper
	if (titleConfig) headerWrapper.appendChild(title);

	// return headerWrapper
	return headerWrapper;
}

export default silverBoxHeaderComponent;
