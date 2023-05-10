import sortDocumentation from "../helpers/sortDocumentationArray";
import addButtonConfig from "../helpers/addButtonConfig";

const documentation = [
    {
        configName: "alertIcon",
        defaultValue: "",
        type: "string",
        explanation: `Predefined icons including: "success", "error", "warning", "info", "question".`,
    },
    {
        configName: "customIcon",
        defaultValue: "",
        type: "string",
        explanation: `Path to a customIcon. For example customIcon: "path/to/icon"; .`,
    },
    {
        configName: "titleAlertIcon ",
        defaultValue: "",
        type: "string",
        explanation: `Predefined title icons including: "success", "error", "warning", "info", "question".`,
    },
    {
        configName: "titleCustomIcon",
        defaultValue: "",
        type: "string",
        explanation: `Path to a customIcon. For example customIcon: "path/to/icon"; .`,
    },
    {
        configName: "timer",
        defaultValue: undefined,
        type: "string",
        explanation: "SilverBox closes after given time in milliseconds."
    },
    {
        configName: "position",
        defaultValue: "",
        type: "string",
        explanation: `Position SilverBox in: "top-right", "top-center", "top-left", "bottom-right", "bottom-center", "bottom-left".`
    },
    {
        configName: "theme",
        defaultValue: "light",
        type: "string",
        explanation: `Changes SilverBox theme. Predefined themes: "light", "dark".`
    },
    {
        configName: "title",
        defaultValue: "",
        type: "string",
        explanation: "SilverBox title."
    },
    {
        configName: "centerContent",
        defaultValue: false,
        type: "boolean",
        explanation: `Aligns the content center. "true" or "false".`
    },
    {
        configName: "html",
        defaultValue: "",
        type: "string",
        explanation: `HTML as SilverBox body. If "text" parameter is given at the same time as "html" parameter, "text" will be ignored. example: <br>"&lt;a href='/recovery'&gt;recover password&lt;/a&gt;".`
    },
    {
        configName: "text",
        defaultValue: "",
        type: "string",
        explanation: `Text as SilverBox body. If "text" parameter is given at the same time as "html" parameter, "text" will be ignored.`
    },
    {
        configName: "footer",
        defaultValue: "",
        type: "string",
        explanation: "HTML as SilverBox footer."
    },
    {
        configName: "showCloseButton",
        defaultValue: false,
        type: "boolean",
        explanation: "Shows a small 'x' on the top of SilverBox."
    },
    {
        configName: "removeBox",
        defaultValue: "",
        type: "string",
        explanation: `Predefined values to remove previous silverBoxes: "first", "last", "all", "number of box" (a number instead of "'number of box'". example: "'1'") .`
    },
    {
        configName: "removeLoading",
        defaultValue: "",
        type: "string",
        explanation: `Predefined values to remove buttons loading animation in silverBoxes: "first", "last", "all", "number of box" (a number instead of "'number of box'". example: "'1'") .`
    },
    {
        configName: "buttonsDirection",
        defaultValue: "",
        type: "string",
        explanation: 'Predefined values to change direction of buttonWrapper: "rtl", "ltr".'
    },
    {
        configName: "silverBoxId",
        defaultValue: "",
        type: "string",
        explanation: 'SilverBox custom ID.'
    },
    {
        configName: "silverBoxClassName",
        defaultValue: "",
        type: "string",
        explanation: 'SilverBox custom Class.'
    },
    {
        configName: "customIconId",
        defaultValue: "",
        type: "string",
        explanation: 'SilverBox customIcon ID.'
    },
    {
        configName: "customIconClassName",
        defaultValue: "",
        type: "string",
        explanation: 'SilverBox customIcon Class.'
    },
    {
        configName: "titleCustomIconId",
        defaultValue: "",
        type: "string",
        explanation: 'SilverBox title customIcon id.'
    },
    {
        configName: "titleCustomIconClassName",
        defaultValue: "",
        type: "string",
        explanation: 'SilverBox title customIcon Class.'
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
                defaultValue: "text",
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
                defaultValue: "100%",
                type: "string",
                explanation: "Input width.",
            },
            {
                configName: "height",
                defaultValue: "100%",
                type: "string",
                explanation: "Input height.",
            },
            {
                configName: "maxLength",
                defaultValue: "",
                type: "string",
                explanation: "Input maxlength attribute."
            },
            {
                configName: "textAlign",
                defaultValue: "",
                type: "string",
                explanation: "Input text align."
            },
            {
                configName: "fontSize",
                defaultValue: "",
                type: "string",
                explanation: "Input font size."
            },
            {
                configName: "multiplyBy",
                defaultValue: "",
                type: "number",
                explanation: "Multiplies the input."
            },
            {
                configName: "numberOnly",
                defaultValue: false,
                type: "boolean",
                explanation: "Accept only numbers from user."
            },
            {
                configName: "name",
                defaultValue: "",
                type: "string",
                explanation: "Input name attribute."
            },
            {
                configName: "class",
                defaultValue: "",
                type: "string",
                explanation: "Input class."
            },
            {
                configName: "id",
                defaultValue: "",
                type: "string",
                explanation: "Input Id."
            },
            {
                configName: "value",
                defaultValue: "",
                type: "string",
                explanation: "Input value."
            },

            // {
            //     configName: "select",
            //     defaultValue: "",
            //     type:"object",
            //     explanation: `gets an array of objects that have 2 keys: "text" and "value". "text" is the textContent of the option, "value" is the value of option. If value is not given, the "text"'s value will be set as the value.`,
            // },
        ]
    }
];

// add confirm/deny/cancel button to documentation

addButtonConfig(["Confirm", "Deny", "Cancel"],documentation);
export default sortDocumentation(documentation)