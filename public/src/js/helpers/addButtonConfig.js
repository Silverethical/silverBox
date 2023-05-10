/**
 * creates an object of button's configs explanation and pushes it into documentation
 * @param {Array} buttonTypeArr - array of button names
 * @param {Array} configName - config name
 */
function addButtonConfig(buttonTypeArr,configName) {
    for (const buttonType of buttonTypeArr) {
        configName.push({
            configName: `${buttonType.toLowerCase()}Button`,
            defaultValue: "emptyDefaultValue",
            type: "object",
            explanation: `${buttonType} button configuration`,
            config: [
                {
                    configName: "text",
                    defaultValue: "Confirm",
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
                    explanation: "SilverBox button Class.",
                },
                {
                    configName: "id",
                    defaultValue: "",
                    type: "string",
                    explanation: "SilverBox button ID.",
                },
                {
                    configName: "disabled",
                    defaultValue: false,
                    type: "boolean",
                    explanation: `SilverBox button disabled attribute. 'true' or 'false'.`,
                },
                {
                    configName: "loadingAnimation",
                    defaultValue: "",
                    type: "string",
                    explanation: `SilverBox button loading animation. 'true' or 'false'.`,
                },
                {
                    configName: "dataAttribute",
                    defaultValue: "",
                    type: "string",
                    explanation: "SilverBox button data attributes.",
                },
            ],
        });
    }
}
export default addButtonConfig;