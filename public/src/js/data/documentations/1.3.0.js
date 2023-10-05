import addButtonConfig from "./chunks/buttons_1.1.0.js";
import sortDocumentation from "../../helpers/sortDocumentation.js";

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
		explanation: `Path to a customIcon. For example "customIcon: path/to/icon;" .`,
	},
	{
		configName: "timer",
		defaultValue: "emptyDefaultValue",
		type: "number | string | object",
		explanation: `Timer config to close silverBox after a given time. It can be treated as "duration" if you do not need other configs. For example: "timer: 1000ms" <br> and <br> "timer: { duration:'1000ms' , pauseOnHover: false} `,
		config: [
			{
				configName: "duration",
				defaultValue: 0,
				type: "number | string",
				explanation:
					'Timer duration in milliseconds (300ms) or seconds (0.3s) to close silverBox. The default unit is "ms" if no unit is provided.',
			},
			{
				configName: "pauseOnHover",
				defaultValue: true,
				type: "boolean",
				explanation: "Pause timer when mouse hovers on SilverBox.",
			},
			{
				configName: "showBar",
				defaultValue: true,
				type: "boolean",
				explanation: "Show timer bar bellow SilverBox.",
			},
		],
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
		defaultValue: "emptyDefaultValue",
		type: "string | object",
		explanation: "SilverBox title. It can be a string or an object.",
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
				explanation: `Path to a title custom icon. For example "customIcon: path/to/icon;" .`,
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
		type: "string | HTMLElement",
		explanation: `HTML as SilverBox body. If "text" parameter is given at the same time as "HTML" parameter, "text" will be ignored. examples: <br>"&lt;a href='/recovery'&gt;recover password&lt;/a&gt;". <br> or <br> "inputElement".`,
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
				defaultValue: 1,
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
	{
		configName: "animation",
		defaultValue: "emptyDefaultValue",
		type: "object | array",
		explanation: "Custom animation. It can ba an object or an array of objects.",
		config: [
			{
				configName: "name",
				defaultValue: "popUp",
				type: "string",
				explanation: "Animation name.",
			},
			{
				configName: "duration",
				defaultValue: "300ms",
				type: "string | number",
				explanation: "Animation duration in milliseconds or seconds.",
			},
			{
				configName: "timingFunction",
				defaultValue: "1",
				type: "string",
				explanation: "Animation timing function.",
			},
			{
				configName: "delay",
				defaultValue: "0ms",
				type: "string | number",
				explanation: "Animation delay in milliseconds or seconds.",
			},
			{
				configName: "iterationCount",
				defaultValue: "1",
				type: "string | number",
				explanation: "Animation iteration count.",
			},
			{
				configName: "direction",
				defaultValue: "normal",
				type: "string",
				explanation: "Animation direction.",
			},
			{
				configName: "fillMode",
				defaultValue: "none",
				type: "string",
				explanation: "Animation fill mode.",
			},
		],
	},
	{
		configName: "onClose",
		defaultValue: "",
		type: "function",
		explanation: "Function to run when silverBox closes.",
	},
	{
		configName: "didOpen",
		defaultValue: "",
		type: "function",
		explanation: "Function to run after silverBox is rendered.",
	},
	{
		configName: "preOpen",
		defaultValue: "",
		type: "function",
		explanation: "Function to run before silverBox is rendered.",
	},
	{
		configName: "closeOnOverlayClick",
		defaultValue: true,
		type: "boolean",
		explanation:
			"Determines whether the modal should be closed after the overlay click.",
	},
];

// add confirm/deny/cancel button to documentation
addButtonConfig(["Confirm", "Deny", "Cancel", "Custom"], documentation);

// sort documentation alphabetically
const sortedDocs = sortDocumentation(documentation);

export default sortedDocs;
