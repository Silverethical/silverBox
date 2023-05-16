const documentation = [
	{
		configName: "alertIcon",
		defaultValue: "",
		type: "string",
		explanation: `Predefined icons including: "success", "error", "warning", "info", "question".`,
	},
	{
		configName: "direction",
		defaultValue: "",
		type: "string",
		explanation: "SilverBox HTML direction.",
	},
	{
		configName: "customIcon",
		defaultValue: "",
		type: "string",
		explanation: `Path to a customIcon. For example customIcon: "path/to/icon"; .`,
	},
	{
		configName: "timer",
		defaultValue: undefined,
		type: "string",
		explanation: "SilverBox closes after given time in milliseconds.",
	},
	{
		configName: "position",
		defaultValue: "",
		type: "string",
		explanation: `Position SilverBox in: "top-right", "top-center", "top-left", "bottom-right", "bottom-center", "bottom-left".`,
	},
	{
		configName: "theme",
		defaultValue: '"light"',
		type: "string",
		explanation: `Changes SilverBox theme. Predefined themes: "light", "dark".`,
	},
	{
		configName: "title",
		defaultValue: "",
		type: "object",
		explanation: "SilverBox title.",
		config: [
			{
				configName: "text",
				defaultValue: "",
				type: "string",
				explanation: "Title text",
			},
			{
				configName: "alertIcon ",
				defaultValue: "",
				type: "string",
				explanation: `Predefined title icons including: "success", "error", "warning", "info", "question".`,
			},
			{
				configName: "customIcon",
				defaultValue: "",
				type: "string",
				explanation: `Path to a title custom icon. For example customIcon: "path/to/icon"; .`,
			},
			{
				configName: "customIconId",
				defaultValue: "",
				type: "string",
				explanation: "SilverBox title custom icon id.",
			},
			{
				configName: "customIconClassName",
				defaultValue: "",
				type: "string",
				explanation: "SilverBox title custom icon class.",
			},
			{
				configName: "customSvgIcon",
				defaultValue: "",
				type: "string",
				explanation:
					'SilverBox custom svg icon element. For example: "&lt;svg&gt; (your svg config here) &lt;/svg&gt;".',
			},
			{
				configName: "customSvgIconId",
				defaultValue: "",
				type: "string",
				explanation: "SilverBox custom svg icon element id.",
			},
			{
				configName: "customSvgIconClassName",
				defaultValue: "",
				type: "string",
				explanation: "SilverBox custom svg icon element class name.",
			},
		],
	},
	{
		configName: "centerContent",
		defaultValue: false,
		type: "boolean",
		explanation: `Aligns the content center. "true" or "false".`,
	},
	{
		configName: "html",
		defaultValue: "",
		type: "string",
		explanation: `HTML as SilverBox body. If "text" parameter is given at the same time as "HTML" parameter, "text" will be ignored. example: <br>"&lt;a href='/recovery'&gt;recover password&lt;/a&gt;".`,
	},
	{
		configName: "text",
		defaultValue: "",
		type: "string",
		explanation: `Text as SilverBox body. If "text" parameter is given at the same time as "HTML" parameter, "text" will be ignored.`,
	},
	{
		configName: "footer",
		defaultValue: "",
		type: "string",
		explanation: "HTML as SilverBox footer.",
	},
	{
		configName: "showCloseButton",
		defaultValue: false,
		type: "boolean",
		explanation: "Shows a small 'x' on the top of SilverBox.",
	},
	{
		configName: "removeSilverBox",
		defaultValue: "",
		type: "string",
		explanation: `Remove previous silverBoxes. It can take "first", "last", "all", "number of the SilverBox" (like "'1'").`,
	},
	{
		configName: "removeLoading",
		defaultValue: "",
		type: "string",
		explanation: `Remove button loading animations. It can take "first", "last", "all", "number of the SilverBox" (like "'1'").`,
	},
	{
		configName: "buttonsDirection",
		defaultValue: "",
		type: "string",
		explanation: "Button wrapper HTML direction.",
	},
	{
		configName: "silverBoxId",
		defaultValue: "",
		type: "string",
		explanation: "SilverBox custom ID.",
	},
	{
		configName: "silverBoxClassName",
		defaultValue: "",
		type: "string",
		explanation: "SilverBox custom class name.",
	},
	{
		configName: "customIconId",
		defaultValue: "",
		type: "string",
		explanation: "SilverBox custom icon id.",
	},
	{
		configName: "customIconClassName",
		defaultValue: "",
		type: "string",
		explanation: "SilverBox custom icon class name.",
	},
	{
		configName: "customSvgIcon",
		defaultValue: "",
		type: "string",
		explanation:
			'SilverBox custom svg icon element. For example: "&lt;svg&gt; (your svg config here) &lt;/svg&gt;".',
	},
	{
		configName: "customSvgIconId",
		defaultValue: "",
		type: "string",
		explanation: "SilverBox custom svg icon element id.",
	},
	{
		configName: "customSvgIconClassName",
		defaultValue: "",
		type: "string",
		explanation: "SilverBox custom svg icon element class name.",
	},
	{
		configName: "input",
		defaultValue: "emptyDefaultValue",
		type: "object | array",
		explanation: `Input configuration. Can be an "object" or an "array" of "objects".`,
		config: [
			{
				configName: "label",
				defaultValue: "",
				type: "string",
				explanation: "Input label.",
			},
			{
				configName: "type",
				defaultValue: '"text"',
				type: "string",
				explanation: `Input type. It can be "text", "number", "textarea", ...`,
			},
			{
				configName: "placeHolder",
				defaultValue: "",
				type: "string",
				explanation: "Input place holder.",
			},
			{
				configName: "placeHolderFontSize",
				defaultValue: "",
				type: "string",
				explanation: "Input placeHolder font size.",
			},

			{
				configName: "hint",
				defaultValue: "",
				type: "string",
				explanation: "Input hint at the bottom.",
			},
			{
				configName: "readOnly",
				defaultValue: false,
				type: "boolean",
				explanation: "Input readonly attribute.",
			},
			{
				configName: "width",
				defaultValue: '"100%"',
				type: "string",
				explanation: "Input width.",
			},
			{
				configName: "height",
				defaultValue: '"100%"',
				type: "string",
				explanation: "Input height.",
			},
			{
				configName: "maxLength",
				defaultValue: "",
				type: "string",
				explanation: "Input maxlength attribute.",
			},
			{
				configName: "textAlign",
				defaultValue: "",
				type: "string",
				explanation: "Input text align.",
			},
			{
				configName: "fontSize",
				defaultValue: "",
				type: "string",
				explanation: "Input font size.",
			},
			{
				configName: "multiplyBy",
				defaultValue: "",
				type: "number",
				explanation: "Multiplies the input.",
			},
			{
				configName: "numberOnly",
				defaultValue: false,
				type: "boolean",
				explanation: "Accept only numbers from user.",
			},
			{
				configName: "name",
				defaultValue: "",
				type: "string",
				explanation: "Input name attribute.",
			},
			{
				configName: "className",
				defaultValue: "",
				type: "string",
				explanation: "Input class.",
			},
			{
				configName: "id",
				defaultValue: "",
				type: "string",
				explanation: "Input id.",
			},
			{
				configName: "value",
				defaultValue: "",
				type: "string",
				explanation: "Input value.",
			},

			// {
			//     configName: "select",
			//     defaultValue: "",
			//     type:"object",
			//     explanation: `gets an array of objects that have 2 keys: "text" and "value". "text" is the textContent of the option, "value" is the value of option. If value is not given, the "text"'s value will be set as the value.`,
			// },
		],
	},
];

// add confirm/deny/cancel button to documentation
addButtonConfig(["Confirm", "Deny", "Cancel"], documentation);

const sortedDocs = sortDocumentation(documentation);

import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const currentDirPath = dirname(currentFilePath);
const jsonContent = JSON.stringify(sortedDocs);
const filePath = `${currentDirPath}/docs.json`;
fs.writeFile(filePath, jsonContent, (err) => {
	if (err) {
		console.error("Error writing JSON file:", err);
	} else {
		console.log("JSON file created successfully.");
	}
});

/**
 * creates an object of button's configs explanation and pushes it into documentation
 * @param {Array} buttonTypeArr - array of button names
 * @param {Array} configName - config name
 */
function addButtonConfig(buttonTypeArr, configName) {
	for (const buttonType of buttonTypeArr) {
		configName.push({
			configName: `${buttonType.toLowerCase()}Button`,
			defaultValue: "emptyDefaultValue",
			type: "object",
			explanation: `${buttonType} button configuration`,
			config: [
				{
					configName: "text",
					defaultValue: `"${buttonType}"`,
					type: "string",
					explanation: "Button text.",
				},
				{
					configName: "bgColor",
					defaultValue: "",
					type: "string",
					explanation: "Button background color.",
				},
				{
					configName: "borderColor",
					defaultValue: "",
					type: "string",
					explanation: "Button border color.",
				},
				{
					configName: "textColor",
					defaultValue: "",
					type: "string",
					explanation: "Button text color.",
				},
				{
					configName: "iconEnd",
					defaultValue: "",
					type: "string",
					explanation: "Button icon at the end.",
				},
				{
					configName: "iconStart",
					defaultValue: "",
					type: "string",
					explanation: "Button icon at the start.",
				},
				{
					configName: "closeOnClick",
					defaultValue: false,
					type: "boolean",
					explanation: "Whether SilverBox closes on click or not.",
				},
				{
					configName: "showButton",
					defaultValue: true,
					type: "boolean",
					explanation: "Show/Hide button.",
				},
				{
					configName: "className",
					defaultValue: "",
					type: "string",
					explanation: "Button ClassName.",
				},
				{
					configName: "id",
					defaultValue: "",
					type: "string",
					explanation: "Button ID.",
				},
				{
					configName: "disabled",
					defaultValue: false,
					type: "boolean",
					explanation: `Button disabled attribute.`,
				},
				{
					configName: "loadingAnimation",
					defaultValue: true,
					type: "boolean",
					explanation: "Button loading animation on click.",
				},
				{
					configName: "dataAttribute",
					defaultValue: "",
					type: "object",
					explanation: `Specify desired html attribute by passing an object with key-value pairs. For example: "{ hashId:'10012', lastStatus:'failed' }" will generate "data-hashId='10012'" and "data-lastStatus='failed'" for the appropriate button. `,
				},
			],
		});
	}
}

/**
 * Sorts an array of documentation objects by configName, and sorts the config array within each object by configName.
 * @param {Array} documentation - An array of documentation objects.
 * @returns {Array} - The sorted array of documentation objects.
 */

function sortDocumentation(documentation) {
	// Sort the main documentation array by configName
	documentation.sort((a, b) => {
		// Convert names to uppercase to ignore casing
		const nameA = a.configName.toUpperCase();
		const nameB = b.configName.toUpperCase();
		if (nameA < nameB) return -1;
		if (nameA > nameB) return 1;
		return 0;
	});

	// Loop through the sorted array and sort the config array within each object
	documentation.forEach((obj) => {
		if (obj.config) {
			obj.config.sort((c, d) => {
				// Convert names to uppercase to ignore casing
				const nameC = c.configName.toUpperCase();
				const nameD = d.configName.toUpperCase();
				if (nameC < nameD) return -1;
				if (nameC > nameD) return 1;
				return 0;
			});
		}
	});

	return documentation;
}
