// import components
import buttonComponent from "./button";
import inputComponent from "./input";
import modalSample from "./modalSample";
import headerComponent from "./header";

const log = console.log;
silverBox({
    // timer: 5000,
    // position: 'bottom-center', //
    icon: "warning",
    title: "Title", //
    html: "<h1>text</h1>", //
    // confirom button
    showConfirmButton: true, //
    confirmButtonColor: "#3085d6",//
    confirmButtonText: "Confirm",//
    confirmButtonIconRight: "/path/to/icon",//
    confirmButtonIconLeft: "/path/to/icon",//
    // cancel button
    showCancelButton: true, //
    cancelButtonColor: "#fff",//
    cancelButtonText: "Cancel",//
    cancelButtonIconRight: "/path/to/icon",//
    cancelButtonIconLeft: "/path/to/icon",//
    // deny button
    showDenyButton: true,
    denyButtonColor: "#d23",
    denyButtonText: "Deny",//
    denyButtonIconRight: "/path/to/icon",//
    denyButtonIconLeft: "/path/to/icon",//
    inputs: [
        {
            label: "label",
            type: "text",
            placeHolder: "test",
            hint: 'input hint',
            readOnly: true,
        },
        {
            label: "label",
            type: "text",
            placeHolder: "test",
            hint: 'input hint',
            readOnly: true,
        }]

})

// comments to be added.
export function silverBox(config) {
    // array of all the elements in the modal (inputs/texts/icons/buttons)
    let elementsArray = [],
        bodyEl = document.body,
        form = document.createElement('form'),
        buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("silverBox-button-wrapper")

    // checks if the config needs an input modal or alertModal
    if (config.inputs) {
        // header
        elementsArray.push(headerComponent({ titleText: config.title, descriptionText: config.html }))

        // inputs

        // checks if the input key is array

        // if true this code will be deployed
        if (Array.isArray(config.inputs)) {
            config.inputs.forEach(input => {
                elementsArray.push(inputComponent({ inputType: input.type, hint: input.hint, label: input.label, placeHolder: input.placeHolder, readOnly: input.readOnly }))
            })
        }
        // if false, this code will be deployed
        else {
            elementsArray.push(inputComponent({ inputType: config.inputs.type, hint: config.inputs.hint, label: config.inputs.label, placeHolder: config.inputs.placeHolder, readOnly: config.inputs.readOnly }))
        }

        // buttons

        // cancel button
        if (!("showCancelButton" in config) || config.showCancelButton.valueOf() === true) {
            buttonWrapper.append(buttonComponent({ text: config.cancelButtonText, elementUniqueClassList: `silverBox-cancel-button`, buttonBgColor: config.cancelButtonColor, leftIcon: config.cancelButtonIconLeft, rightIcon: config.cancelButtonIconRight }))
        }
        // deny button
        if (("showDenyButton" in config) && config.showDenyButton.valueOf() === true) {
            buttonWrapper.append(buttonComponent({ text: config.denyButtonText, elementUniqueClassList: `silverBox-deny-button`, buttonBgColor: config.denyButtonColor, leftIcon: config.denyButtonIconLeft, rightIcon: config.denyButtonIconRight }))
        }
        // confirm button
        if (!("showConfirmButton" in config) || config.showConfirmButton.valueOf() === true) {
            buttonWrapper.append(buttonComponent({ text: config.confirmButtonText, elementUniqueClassList: `silverBox-confrim-button`, buttonBgColor: config.confirmButtonColor, leftIcon: config.confirmButtonIconLeft, rightIcon: config.confirmButtonIconRight }))
        }

        // pushes the buttonWrapper inside the elements Array     
        elementsArray.push(buttonWrapper)
        // appending the whole thing to the form
        form.append(modalSample(elementsArray, 'silver-box-overlay'))

        bodyEl.append(form)
    }
    else {
        // header component
        elementsArray.push(headerComponent({ titleText: config.title, descriptionText: config.html }))

        // cancel button
        if (!("showCancelButton" in config) || config.showCancelButton.valueOf() === true) {
            buttonWrapper.append(buttonComponent({ text: config.cancelButtonText, elementUniqueClassList: `silverBox-cancel-button`, buttonBgColor: config.cancelButtonColor, leftIcon: config.cancelButtonIconLeft, rightIcon: config.cancelButtonIconRight }))
        }
        // deny button
        if (("showDenyButton" in config) && config.showDenyButton.valueOf() === true) {
            buttonWrapper.append(buttonComponent({ text: config.denyButtonText, elementUniqueClassList: `silverBox-deny-button`, buttonBgColor: config.denyButtonColor, leftIcon: config.denyButtonIconLeft, rightIcon: config.denyButtonIconRight }))
        }
        // confirm button
        if (!("showConfirmButton" in config) || config.showConfirmButton.valueOf() === true) {
            buttonWrapper.append(buttonComponent({ text: config.confirmButtonText, elementUniqueClassList: `silverBox-confrim-button`, buttonBgColor: config.confirmButtonColor, leftIcon: config.confirmButtonIconLeft, rightIcon: config.confirmButtonIconRight }))
        }
        // pushes the buttonWrapper into the elementsArray
        elementsArray.push(buttonWrapper)
        // pushes the elementArray into the body

        // selecting silverBox overlay
        const SilverBoxOverlay = document.querySelector('.silver-box-overlay')
        // checks if timer is written in config 
        if ("timer" in config) {
            setTimeout(() => {
                SilverBoxOverlay.remove()
            }, config.timer)
        }

        // postion 
        if ("position" in config) {
            bodyEl.append(modalSample(elementsArray,`silver-box-${config.position}`))
            SilverBoxOverlay.classList.add(`silver-box-${config.position}`)
        } else {
            bodyEl.append(modalSample(elementsArray,'silver-box-overlay'))
        }
        // alert modal
    }
}

