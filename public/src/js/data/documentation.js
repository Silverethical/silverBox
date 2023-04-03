const documentation = [
    {
        alertIcon: {
            defaultValue: "null",
            explanation: "Displays Icons according to given values from following list: 'success', 'error', 'warning', 'info', 'question'.",
        }
    },
    {
        userIcon: {
            defaultValue: "null",
            explanation: "Path to user's Icon. example: userIcon:'../src/images/image.png'; .",
        }
    },
    {
        timer: {
            defaultValue: "null",
            explanation: "SilverBox closes after given time in milliseconds. example: timer:3000; timer will be closed after 3s with this given value."
        }
    },
    {
        position: {
            defaultValue: "null",
            explanation: "Positions the box according to given values from following list:'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'."
        }
    },
    {
        theme: {
            defaultValue: "light",
            explanation: "Changes the box theme according to given value from following list: 'light', 'dark'."
        },
    },
    {
        title: {
            defaultValue: "null",
            explanation: "Title of the box"
        }
    },
    {
        centerContent: {
            defaultValue: "false",
            explanation: "Positions the contents based on given value which Is either 'true' or 'false'. If true Is given as the value, all content will be centered."
        }
    },
    {
        html: {
            defaultValue: "null",
            explanation: "Gets a HTML tag and puts It under the title. example: html: <p> I am a text </p>. If this value Is given with text key, html key will be shown."
        }
    },
    {
        text: {
            default: "null",
            explanation: "Get a text and puts It under the tile. If this value Is given with html key, html key will be shown."
        }
    },
    {
        footer: {
            default: "null",
            explanation: "Gets a HTML tag and puts It Into a footer tag at the very end of the box with a horizontal line above it."
        }
    },
    {
        showCloseButton: {
            default: "false",
            explanation: "Shows the close button at top of the box based on given value which Is either 'true' or 'false'. If true Is given as the value, the button will be shown."
        }
    },
    {
        showConfirmButton: {
            default: "true",
            explanation: "If the value is 'true' the button will be created, If the value Is 'false', the button won't be created, If the config Is not given, It depends on wether the Config for the button exists or not."
        }
    },
    {
        showDenyButton: {
            default: "true",
            explanation: "If the value is 'true' the button will be created, If the value Is 'false', the button won't be created, If the config Is not given, It depends on wether the Config for the button exists or not."
        }
    },
    {
        showCancelButton: {
            default: "true",
            explanation: "If the value is 'true' the button will be created, If the value Is 'false', the button won't be created, If the config Is not given, It depends on wether the Config for the button exists or not."
        }
    },
    {
        confirmButton: {
            defaultValue: "shown",
            explanation: "Creates a confirm button based on given config.",
            config: {
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
                    defaultValue: "null",
                    explanation: "Get an Icon path and puts the Icon at the end of the button's text.",
                },
                iconLeft: {
                    defaultValue: "null",
                    explanation: "Get an Icon path and puts the Icon at the start of the button's text.",
                },
                closeOnClick: {
                    defaultValue: "false",
                    explanation: "Either closes the button on click or not based on the given values which Is either 'true' or 'false'. If It's true the button will be closed."
                }
            }
        }
    },
    {
        denyButton: {
            defaultValue: "hidden",
            explanation: "Creates a cancel button based on given config.",
            config: {
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
                    defaultValue: "null",
                    explanation: "Get an Icon path and puts the Icon at the end of the button's text.",
                },
                iconLeft: {
                    defaultValue: "null",
                    explanation: "Get an Icon path and puts the Icon at the start of the button's text.",
                },
                closeOnClick: {
                    defaultValue: "true",
                    explanation: "Either closes the button on click or not based on the given values which Is either 'true' or 'false'. If It's true the button will be closed."
                }
            }
        }
    },
    {
        input: {
            defaultValue: "null",
            explanation: "Creates Input based on given config. The value can also be given as an objects Inside of An array.",
            config: {
                label: {
                    defaultValue: "null",
                    explanation: "Gets a value and puts It as the Input's label name.",
                },
                type: {
                    defaultValue: "text",
                    explanation: "Gets a value and puts It as the Input's type.",
                },
                placeHolder: {
                    defaultValue: "null",
                    explanation: "Gets a value and puts It as the Input's placeHolder.",
                },
                hint: {
                    defaultValue: "null",
                    explanation: "Gets a value and puts It as the Input's hint under the input.",
                },
                readOnly: {
                    defaultValue: "false",
                    explanation: "Gets a value of either 'true' or 'false' and sets it as the input attribute.",
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
                    defaultValue: "null",
                    explanation: "Gets a value as number and puts It as the Inputs maxLength attribute."
                },
                textAlign: {
                    defaultValue: "start",
                    explanation: "Gets a value from the following list and puts It as the Inputs text-align value: 'start', 'center', 'end'."
                },
                fontSize: {
                    defaultValue: "14px",
                    explanation: "Gets a value and puts It as the Inputs font size."
                },
                multiplyBy: {
                    defaultValue: "1",
                    explanation: "Gets a value as number and repeats the Input based on the given value."
                }
            }
        }
    }

];

export default documentation