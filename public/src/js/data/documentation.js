const documentation = [
    {
        configName: "alertIcon",
        defaultValue: "",
        type:"string",
        explanation: `Predefined icons including: "success", "error", "warning", "info", "question".`,
    },
    {
        configName: "customIcon",
        defaultValue: "",
        type:"string",
        explanation: `Path to a customIcon. For example customIcon: "path/to/icon"; .`,
    },
    {
        configName: "timer",
        defaultValue: undefined,
        type:"string",
        explanation: "SilverBox closes after given time in milliseconds."
    },
    {
        configName: "position",
        defaultValue: "",
        type:"string",
        explanation: `Position SilverBox in: "top-right", "top-center", "top-left", "bottom-right", "bottom-center", "bottom-left".`
    },
    {
        configName: "theme",
        defaultValue: "light",
        type:"string",
        explanation: `Changes SilverBox theme. Predefined themes: "light", "dark".`
    },
    {
        configName: "title",
        defaultValue: "",
        type:"string",
        explanation: "SilverBox title"
    },
    {
        configName: "centerContent",
        defaultValue: false,
        type:"boolean",
        explanation: `Aligns the content center. "true" or "false".`
    },
    {
        configName: "html",
        defaultValue: "",
        type:"sting",
        explanation: `HTML as SilverBox body. If "text" parameter is given at the same time as "html" parameter, "text" will be ignored. example: "&lt;a href='/recovery'&gt;recover password&lt;/a&gt;" `
    },
    {
        configName: "text",
        defaultValue: "",
        type:"sting",
        explanation: `Text as SilverBox body. If "text" parameter is given at the same time as "html" parameter, "text" will be ignored.`
    },
    {
        configName: "footer",
        defaultValue: "",
        type:"sting",
        explanation: "HTML as SilverBox footer."
    },
    {
        configName:"showCloseButton",
        defaultValue:"",
        type:"sting",
        explanation:"havasam nabode in key ro pak karde bodam :D"
    },
    {
        configName: "confirmButton",
        defaultValue: "emptyDefaultValue",
        type:"object",
        explanation: "Gets a config like confirmButton: {} and creates The button based on given keys",
        config: [
            {
                configName: "text",
                defaultValue: "Confirm",
                type:"sting",
                explanation: "Gets a value as a text and puts It as the button's text.",
            },
            {
                configName: "bgColor",
                defaultValue: "#7f56d9",
                type:"sting",
                explanation: "Get a value as a color and puts It as the button's background color.",
            },
            {
                configName: "borderColor",
                defaultValue: "#7f56d9",
                type:"sting",
                explanation: "Get a value as a color and puts It as the button's border color.",
            },
            {
                configName: "textColor",
                defaultValue: "#fff",
                type:"sting",
                explanation: "Get a value as a color and puts It as the button's text color.",
            },
            {
                configName: "iconEnd",
                defaultValue: "",
                type:"sting",
                explanation: "Get an Icon path and puts the Icon at the end of the button's text.",
            },
            {
                configName: "iconStart",
                defaultValue: "",
                type:"sting",
                explanation: "Get an Icon path and puts the Icon at the start of the button's text.",
            },
            {
                configName: "closeOnClick",
                defaultValue: false,
                type:"boolean",
                explanation: `Gets values which Is either "true" or "false". If It's true the button will be closed.`
            },
            {
                configName: "showButton",
                defaultValue: true,
                type:"boolean",
                explanation: `If the value is "true" the button will be created, If the value Is "false", the button won't be created, If the config Is not given, It depends on wether the Config for the button exists or not.`
            },
        ]
    },
    {
        configName: "cancelButton",
        defaultValue: "emptyDefaultValue",
        type:"object",
        explanation: "Gets a config like cancelButton: {} and creates The button based on given keys",
        config: [
            {
                configName: "text",
                defaultValue: "Cancel",
                type:"sting",
                explanation: "Gets a value as a text and puts It as the button's text.",
            },
            {
                configName: "bgColor",
                defaultValue: "#fff",
                type:"sting",
                explanation: "Get a value as a color and puts It as the button's background color.",
            },
            {
                configName: "borderColor",
                defaultValue: "#d0d5dd",
                type:"sting",
                explanation: "Get a value as a color and puts It as the button's border color.",
            },
            {
                configName: "textColor",
                defaultValue: "#475467",
                type:"sting",
                explanation: "Get a value as a color and puts It as the button's text color.",
            },
            {
                configName: "iconEnd",
                defaultValue: "",
                type:"sting",
                explanation: "Get an Icon path and puts the Icon at the end of the button's text.",
            },
            {
                configName: "iconStart",
                defaultValue: "",
                type:"sting",
                explanation: "Get an Icon path and puts the Icon at the start of the button's text.",
            },
            {
                configName: "closeOnClick",
                defaultValue: false,
                type:"boolean",
                explanation: `Gets values which Is either "true" or "false". If It's true the button will be closed.`
            },
            {
                configName: "showButton",
                defaultValue: true,
                type:"boolean",
                explanation: `If the value is "true" the button will be created, If the value Is "false", the button won't be created, If the config Is not given, It depends on wether the Config for the button exists or not.`
            },
        ]
    },
    {
        configName: "denyButton",
        defaultValue: "emptyDefaultValue",
        type:"object",
        explanation: "Gets a config like denyButton: {} and creates The button based on given keys",
        config: [
            {
                configName: "text",
                defaultValue: "Deny",
                type:"string",
                explanation: "Gets a value as a text and puts It as the button's text.",
            },
            {
                configName: "bgColor",
                defaultValue: "#d33",
                type:"string",
                explanation: "Get a value as a color and puts It as the button's background color.",
            },
            {
                configName: "borderColor",
                defaultValue: "#d33",
                type:"string",
                explanation: "Get a value as a color and puts It as the button's border color.",
            },
            {
                configName: "textColor",
                defaultValue: "#fff",
                type:"string",
                explanation: "Get a value as a color and puts It as the button's text color.",
            },
            {
                configName: "iconEnd",
                defaultValue: "",
                type:"string",
                explanation: "Get an Icon path and puts the Icon at the end of the button's text.",
            },
            {
                configName: "iconStart",
                defaultValue: "",
                type:"string",
                explanation: "Get an Icon path and puts the Icon at the start of the button's text.",
            },
            {
                configName: "closeOnClick",
                defaultValue: true,
                type:"boolean",
                explanation: `Gets values which Is either "true" or "false". If It's true the button will be closed.`
            },
            {
                configName: "showButton",
                defaultValue: false,
                type:"boolean",
                explanation: `If the value is "true" the button will be created, If the value Is "false", the button won't be created, If the config Is not given, It depends on wether the Config for the button exists or not.`
            },
        ]
    },
    {
        configName: "input",
        defaultValue: "emptyDefaultValue",
        type:"object",
        explanation: "Creates an Input based on given config Inside input: {}. The value can also be given as objects Inside of an array.",
        config: [
            {
                configName: "label",
                defaultValue: "",
                type:"string",
                explanation: "Gets a value and puts It as the Input's label name.",
            },
            {
                configName: "type",
                defaultValue: "text",
                type:"string",
                explanation: "Gets a value and puts It as the Input's type.",
            },
            {
                configName: "placeHolder",
                defaultValue: "",
                type:"string",
                explanation: "Gets a value and puts It as the Input's placeHolder.",
            },
            {
                configName: "hint",
                defaultValue: "",
                type:"string",
                explanation: "Gets a value and puts It as the Input's hint under the input.",
            },
            {
                configName: "readOnly",
                defaultValue: false,
                type:"boolean",
                explanation: `Gets a value of either "true" or "false" and sets it as the input attribute.`,
            },
            {
                configName: "inputWidth",
                defaultValue: "100%",
                type:"string",
                explanation: "Gets a value and puts It as the Input's width.",
            },
            {
                configName: "inputHeight",
                defaultValue: "100%",
                type:"string",
                explanation: "Gets a value as string and puts It as the Input's height.",
            },
            {
                configName: "inputMaxLength",
                defaultValue: "",
                type:"string",
                explanation: "Gets a value as number and puts It as the Inputs maxLength attribute."
            },
            {
                configName: "textAlign",
                defaultValue: "start",
                type:"string",
                explanation: `Gets a value from the following list and puts It as the Inputs text-align value: "start", "center", "end" .`
            },
            {
                configName: "fontSize",
                defaultValue: "14px",
                type:"string",
                explanation: "Gets a value and puts It as the Inputs font size."
            },
            {
                configName: "multiplyBy",
                defaultValue: 1,
                type:"number",
                explanation: "Gets a value as number and repeats the Input based on the given value."
            },
            {
                configName: "numberOnly",
                defaultValue: false,
                type:"boolean",
                explanation: `Gets either "true" or "false" and determines wether the input in numberOnly or not.`
            },
            {
                configName: "select",
                defaultValue: "",
                type:"object",
                explanation: `gets an array of objects that have 2 keys: "text" and "value". "text" is the textContent of the option, "value" is the value of option. If value is not given, the "text"'s value will be set as the value.`,
            },
        ]
    }
];

export default documentation