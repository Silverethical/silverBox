const documentation = [
    {
        configName: "alertIcon",
        defaultValue: "",
        explanation: `Displays Icons according to given values from following list: "success", "error", "warning", "info", "question".`,
    },
    {
        configName: "userIcon",
        defaultValue: "",
        explanation: `Path to user's Icon. For example userIcon: "path/to/icon"; .`,
    },
    {
        configName: "timer",
        defaultValue: undefined,
        explanation: "SilverBox closes after given time in milliseconds. example: timer: 3000; timer will be closed after 3s with this given value."
    },
    {
        configName: "position",
        defaultValue: "",
        explanation: `Positions the box according to given values from following list: "top-right", "top-center", "top-left", "bottom-right", "bottom-center", "bottom-left".`
    },
    {
        configName: "theme",
        defaultValue: "light",
        explanation: `Changes the box theme according to given value from following list: "light", "dark".`
    },
    {
        configName: "title",
        defaultValue: "",
        explanation: "Get a text and puts It at the top of the box as title"
    },
    {
        configName: "centerContent",
        defaultValue: false,
        explanation: `Positions the contents based on given value which Is either "true" or "false". If true Is given as the value, all content will be centered.`
    },
    {
        configName: "html",
        defaultValue: "",
        explanation: "Gets a HTML tag and puts It under the title. If this value Is given with text key, html key will be shown."
    },
    {
        configName: "text",
        defaultValue: "",
        explanation: "Get a text and puts It under the tile. If this value Is given with html key, html key will be shown."
    },
    {
        configName: "footer",
        defaultValue: "",
        explanation: "Gets a HTML tag and puts It Into a footer tag at the very end of the box with a horizontal line above it."
    },
    {
        configName: "showCloseButton",
        defaultValue: false,
        explanation: `Shows the close button at top of the box based on given value which Is either "true" or "false". If true Is given as the value, the button will be shown.`
    },
    {
        configName: "showConfirmButton",
        defaultValue: true,
        explanation: `If the value is "true" the button will be created, If the value Is "false", the button won't be created, If the config Is not given, It depends on wether the Config for the button exists or not.`
    },
    {
        configName: "showDenyButton",
        defaultValue: false,
        explanation: `If the value is "true" the button will be created, If the value Is "false", the button won't be created, If the config Is not given, It depends on wether the Config for the button exists or not.`
    },
    {
        configName: "showCancelButton",
        defaultValue: true,
        explanation: `If the value is "true" the button will be created, If the value Is "false", the button won't be created, If the config Is not given, It depends on wether the Config for the button exists or not.`
    },
    {
        configName: "confirmButton",
        defaultValue: "shown",
        explanation: "Gets a config like confirmButton: {} and creates The button based on given keys",
        config: [
            {
                configName: "text",
                defaultValue: "Confirm",
                explanation: "Gets a value as a text and puts It as the button's text.",
            },
            {
                configName: "bgColor",
                defaultValue: "#7f56d9",
                explanation: "Get a value as a color and puts It as the button's background color.",
            },
            {
                configName: "borderColor",
                defaultValue: "#7f56d9",
                explanation: "Get a value as a color and puts It as the button's border color.",
            },
            {
                configName: "textColor",
                defaultValue: "#fff",
                explanation: "Get a value as a color and puts It as the button's text color.",
            },
            {
                configName: "iconRight",
                defaultValue: "",
                explanation: "Get an Icon path and puts the Icon at the end of the button's text.",
            },
            {
                configName: "iconLeft",
                defaultValue: "",
                explanation: "Get an Icon path and puts the Icon at the start of the button's text.",
            },
            {
                configName: "closeOnClick",
                defaultValue: false,
                explanation: `Gets values which Is either "true" or "false". If It's true the button will be closed.`
            }
        ]
    },
    {
        configName: "cancelButton",
        defaultValue: "shown",
        explanation: "Gets a config like cancelButton: {} and creates The button based on given keys",
        config: [
            {
                configName: "text",
                defaultValue: "Cancel",
                explanation: "Gets a value as a text and puts It as the button's text.",
            },
            {
                configName: "bgColor",
                defaultValue: "#fff",
                explanation: "Get a value as a color and puts It as the button's background color.",
            },
            {
                configName: "borderColor",
                defaultValue: "#d0d5dd",
                explanation: "Get a value as a color and puts It as the button's border color.",
            },
            {
                configName: "textColor",
                defaultValue: "#475467",
                explanation: "Get a value as a color and puts It as the button's text color.",
            },
            {
                configName: "iconRight",
                defaultValue: "",
                explanation: "Get an Icon path and puts the Icon at the end of the button's text.",
            },
            {
                configName: "iconLeft",
                defaultValue: "",
                explanation: "Get an Icon path and puts the Icon at the start of the button's text.",
            },
            {
                configName: "closeOnClick",
                defaultValue: false,
                explanation: `Gets values which Is either "true" or "false". If It's true the button will be closed.`
            }
        ]
    },
    {
        configName: "denyButton",
        defaultValue: "hidden",
        explanation: "Gets a config like denyButton: {} and creates The button based on given keys",
        config: [
            {
                configName: "text",
                defaultValue: "Deny",
                explanation: "Gets a value as a text and puts It as the button's text.",
            },
            {
                configName: "bgColor",
                defaultValue: "#d33",
                explanation: "Get a value as a color and puts It as the button's background color.",
            },
            {
                configName: "borderColor",
                defaultValue: "#d33",
                explanation: "Get a value as a color and puts It as the button's border color.",
            },
            {
                configName: "textColor",
                defaultValue: "#fff",
                explanation: "Get a value as a color and puts It as the button's text color.",
            },
            {
                configName: "iconRight",
                defaultValue: "",
                explanation: "Get an Icon path and puts the Icon at the end of the button's text.",
            },
            {
                configName: "iconLeft",
                defaultValue: "",
                explanation: "Get an Icon path and puts the Icon at the start of the button's text.",
            },
            {
                configName: "closeOnClick",
                defaultValue: true,
                explanation: `Gets values which Is either "true" or "false". If It's true the button will be closed.`
            }
        ]
    },
    {
        configName: "input",
        defaultValue: "",
        explanation: "Creates an Input based on given config Inside input: {}. The value can also be given as objects Inside of an array.",
        config: [
            {
                configName: "label",
                defaultValue: "",
                explanation: "Gets a value and puts It as the Input's label name.",
            },
            {
                configName: "type",
                defaultValue: "text",
                explanation: "Gets a value and puts It as the Input's type.",
            },
            {
                configName: "placeHolder",
                defaultValue: "",
                explanation: "Gets a value and puts It as the Input's placeHolder.",
            },
            {
                configName: "hint",
                defaultValue: "",
                explanation: "Gets a value and puts It as the Input's hint under the input.",
            },
            {
                configName: "readOnly",
                defaultValue: false,
                explanation: `Gets a value of either "true" or "false" and sets it as the input attribute.`,
            },
            {
                configName: "inputWidth",
                defaultValue: "100%",
                explanation: "Gets a value and puts It as the Input's width.",
            },
            {
                configName: "inputHeight",
                defaultValue: "100%",
                explanation: "Gets a value as string and puts It as the Input's height.",
            },
            {
                configName: "inputMaxLength",
                defaultValue: "",
                explanation: "Gets a value as number and puts It as the Inputs maxLength attribute."
            },
            {
                configName: "textAlign",
                defaultValue: "start",
                explanation: `Gets a value from the following list and puts It as the Inputs text-align value: "start", "center", "end" .`
            },
            {
                configName: "fontSize",
                defaultValue: "14px",
                explanation: "Gets a value and puts It as the Inputs font size."
            },
            {
                configName: "multiplyBy",
                defaultValue: 1,
                explanation: "Gets a value as number and repeats the Input based on the given value."
            },
            {
                configName: "numberOnly",
                defaultValue: false,
                explanation: `Gets either "true" or "false" and determines wether the input in numberOnly or not.`
            },
            {
                configName: "select",
                defaultValue: "",
                explanation: `gets an array of objects that have 2 keys: "text" and "value". "text" is the textContent of the option, "value" is the value of option. If value is not given, the "text"'s value will be set as the value.`,
            },
        ]
    }
];

export default documentation