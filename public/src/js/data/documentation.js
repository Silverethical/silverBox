const documentation = [
    {
        configName: "alertIcon",
        defaultValue: "",
        explanation: `Displays Icons according to given values from following list: "success", "error", "warning", "info", "question".`,
    },
    {
        configName: "userIcon",
        defaultValue: "",
        explanation: `Path to user's Icon.For example userIcon: "../src/images/image.png"; .`,
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
        explanation: "Gets a HTML tag and puts It under the title.For example html: <p> I am a text </p>. If this value Is given with text key, html key will be shown."
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
        config: {
            example: {
                showButton: false,
                bgColor: "#3085d6",//
                borderColor: "#3085d6",
                textColor: "#fff",
                text: "Confirm", //
                iconRight: "/path/to/icon",//
                iconLeft: "/path/to/icon",//
                closeOnClick: false,
            },
            text: {
                defaultValue: "Confirm",
                explanation: "Gets a value as a text and puts It as the button's text.",
            },
            bgColor: {
                defaultValue: "#7f56d9",
                explanation: "Get a value as a color and puts It as the button's background color.",
            },
            borderColor: {
                defaultValue: "#7f56d9",
                explanation: "Get a value as a color and puts It as the button's border color.",
            },
            textColor: {
                defaultValue: "#fff",
                explanation: "Get a value as a color and puts It as the button's text color.",
            },
            iconRight: {
                defaultValue: "",
                explanation: "Get an Icon path and puts the Icon at the end of the button's text.",
            },
            iconLeft: {
                defaultValue: "",
                explanation: "Get an Icon path and puts the Icon at the start of the button's text.",
            },
            closeOnClick: {
                defaultValue: false,
                explanation: `Gets values which Is either "true" or "false". If It's true the button will be closed.`
            }
        }
    },
    {
        configName: "cancelButton",
        defaultValue: "shown",
        explanation: "Gets a config like cancelButton: {} and creates The button based on given keys",
        config: {
            example: {
                showButton: false,
                bgColor: "#fff",
                borderColor: "#000",
                textColor: "#000",
                text: "Cancel",
                iconRight: "/path/to/icon",
                iconLeft: "/path/to/icon",
                closeOnClick: false,
            },
            text: {
                defaultValue: "Cancel",
                explanation: "Gets a value as a text and puts It as the button's text.",
            },
            bgColor: {
                defaultValue: "#fff",
                explanation: "Get a value as a color and puts It as the button's background color.",
            },
            borderColor: {
                defaultValue: "#d0d5dd",
                explanation: "Get a value as a color and puts It as the button's border color.",
            },
            textColor: {
                defaultValue: "#475467",
                explanation: "Get a value as a color and puts It as the button's text color.",
            },
            iconRight: {
                defaultValue: "",
                explanation: "Get an Icon path and puts the Icon at the end of the button's text.",
            },
            iconLeft: {
                defaultValue: "",
                explanation: "Get an Icon path and puts the Icon at the start of the button's text.",
            },
            closeOnClick: {
                defaultValue: false,
                explanation: `Gets values which Is either "true" or "false". If It's true the button will be closed.`
            }
        }
    },
    {
        configName: "denyButton",
        defaultValue: "hidden",
        explanation: "Gets a config like denyButton: {} and creates The button based on given keys",
        config: {
            example: {
                denyButton: {
                    showButton: false,
                    bgColor: "#d23",
                    borderColor: "#d23",
                    textColor: "#fff",
                    text: "Deny", //
                    iconRight: "/path/to/icon", //
                    iconLeft: "/path/to/icon", //
                    closeOnClick: false,
                },
            },
            text: {
                defaultValue: "Deny",
                explanation: "Gets a value as a text and puts It as the button's text.",
            },
            bgColor: {
                defaultValue: "#d33",
                explanation: "Get a value as a color and puts It as the button's background color.",
            },
            borderColor: {
                defaultValue: "#d33",
                explanation: "Get a value as a color and puts It as the button's border color.",
            },
            textColor: {
                defaultValue: "#fff",
                explanation: "Get a value as a color and puts It as the button's text color.",
            },
            iconRight: {
                defaultValue: "",
                explanation: "Get an Icon path and puts the Icon at the end of the button's text.",
            },
            iconLeft: {
                defaultValue: "",
                explanation: "Get an Icon path and puts the Icon at the start of the button's text.",
            },
            closeOnClick: {
                defaultValue: true,
                explanation: `Gets values which Is either "true" or "false". If It's true the button will be closed.`
            }
        }
    },
    {
        configName: "input",
        defaultValue: "",
        explanation: "Creates an Input based on given config Inside input: {}. The value can also be given as objects Inside of an array.",
        config: {
            label: {
                defaultValue: "",
                explanation: "Gets a value and puts It as the Input's label name.",
            },
            type: {
                defaultValue: "text",
                explanation: "Gets a value and puts It as the Input's type.",
            },
            placeHolder: {
                defaultValue: "",
                explanation: "Gets a value and puts It as the Input's placeHolder.",
            },
            hint: {
                defaultValue: "",
                explanation: "Gets a value and puts It as the Input's hint under the input.",
            },
            readOnly: {
                defaultValue: false,
                explanation: `Gets a value of either "true" or "false" and sets it as the input attribute.`,
            },
            inputWidth: {
                defaultValue: "100%",
                explanation: "Gets a value and puts It as the Input's width.",
            },
            inputHeight: {
                defaultValue: "100%",
                explanation: "Gets a value as string and puts It as the Input's height.",
            },
            inputMaxLength: {
                defaultValue: "",
                explanation: "Gets a value as number and puts It as the Inputs maxLength attribute."
            },
            textAlign: {
                defaultValue: "start",
                explanation: `Gets a value from the following list and puts It as the Inputs text-align value: "start", "center", "end".`
            },
            fontSize: {
                defaultValue: "14px",
                explanation: "Gets a value and puts It as the Inputs font size."
            },
            multiplyBy: {
                defaultValue: 1,
                explanation: "Gets a value as number and repeats the Input based on the given value."
            }
        }
    }
];

export default documentation