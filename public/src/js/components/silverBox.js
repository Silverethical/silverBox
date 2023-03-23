// import components
import buttonComponent from "./button";
import inputComponent from "./input";
import modalSample from "./modalSample";
import headerComponent from "./header";
import closeOnClick from "./closeOnClick";
import iconsComponent from "./icons";

const log = console.log;
silverBox({
    // timer: 1500,
    // position: 'top-right', //
    icon: "warning",
    title: "Title", //
    html: "<h1>text</h1>", //
    // confirm button
    showConfirmButton: true, //
    confirmButtonColor: "#3085d6",//
    confirmButtonText: "Confirm",//
    confirmButtonIconRight: "/path/to/icon",//
    confirmButtonIconLeft: "/path/to/icon",//
    confirmButtonCloseOnClick: false,
    // cancel button
    showCancelButton: true, //
    cancelButtonColor: "#fff",//
    cancelButtonText: "Cancel",//
    cancelButtonIconRight: "/path/to/icon",//
    cancelButtonIconLeft: "/path/to/icon",//
    cancelButtonCloseOnClick: true,
    // deny button
    showDenyButton: true,
    denyButtonColor: "#d23",
    denyButtonText: "Deny",//
    denyButtonIconRight: "/path/to/icon",//
    denyButtonIconLeft: "/path/to/icon",//
    denyButtonCloseOnClick: true,

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
            buttonWrapper.append(buttonComponent({ text: (config.cancelButtonText) ? config.cancelButtonText : "Cancel", elementUniqueClassList: `silverBox-cancel-button`, buttonBgColor: config.cancelButtonColor, leftIcon: config.cancelButtonIconLeft, rightIcon: config.cancelButtonIconRight }))
        }
        // deny button
        if (("showDenyButton" in config) && config.showDenyButton.valueOf() === true) {
            buttonWrapper.append(buttonComponent({ text: (config.denyButtonText) ? config.denyButtonText : "Deny", elementUniqueClassList: `silverBox-deny-button`, buttonBgColor: config.denyButtonColor, leftIcon: config.denyButtonIconLeft, rightIcon: config.denyButtonIconRight }))
        }
        // confirm button
        if (!("showConfirmButton" in config) || config.showConfirmButton.valueOf() === true) {
            buttonWrapper.append(buttonComponent({ text: (config.confirmButtonText) ? config.confirmButtonText : "Confirm", elementUniqueClassList: `silverBox-confirm-button`, buttonBgColor: config.confirmButtonColor, leftIcon: config.confirmButtonIconLeft, rightIcon: config.confirmButtonIconRight }))
        }

        // pushes the buttonWrapper inside the elements Array     
        elementsArray.push(buttonWrapper)
        // appending the whole thing to the form
        form.append(modalSample(elementsArray, 'silver-box-overlay'))

        // form preventDefault
        form.addEventListener('submit', e => {
            e.preventDefault()
        })

        bodyEl.append(form)
    }
    else {
        // header component
        elementsArray.push(headerComponent({ titleText: config.title, descriptionText: config.html }))

        // cancel button
        if (!("showCancelButton" in config) || config.showCancelButton.valueOf() === true) {
            buttonWrapper.append(buttonComponent({ text: (config.cancelButtonText) ? config.cancelButtonText : "Cancel", elementUniqueClassList: `silverBox-cancel-button`, buttonBgColor: config.cancelButtonColor, leftIcon: config.cancelButtonIconLeft, rightIcon: config.cancelButtonIconRight }))
        }
        // deny button
        if (("showDenyButton" in config) && config.showDenyButton.valueOf() === true) {
            buttonWrapper.append(buttonComponent({ text: (config.denyButtonText) ? config.denyButtonText : "Deny", elementUniqueClassList: `silverBox-deny-button`, buttonBgColor: config.denyButtonColor, leftIcon: config.denyButtonIconLeft, rightIcon: config.denyButtonIconRight }))
        };
        // confirm button
        if (!("showConfirmButton" in config) || config.showConfirmButton.valueOf() === true) {
            buttonWrapper.append(buttonComponent({ text: (config.confirmButtonText) ? (config.confirmButtonText) : "Confirm", elementUniqueClassList: `silverBox-confirm-button`, buttonBgColor: config.confirmButtonColor, leftIcon: config.confirmButtonIconLeft, rightIcon: config.confirmButtonIconRight }))
        }
        // pushes the buttonWrapper into the elementsArray
        elementsArray.push(buttonWrapper)
        // pushes the elementArray into the body

        // selecting silverBox overlay
        let silverBox = document.querySelector('.silver-box')
        // position 
        if ("position" in config) {
            bodyEl.append(modalSample(elementsArray, `silver-box-${config.position}`))
            silverBox = document.querySelector('.silver-box')
            silverBox.parentElement.classList.add(`silver-box-${config.position}`)
        } else {
            bodyEl.append(modalSample(elementsArray, 'silver-box-overlay'))
            silverBox = document.querySelector('.silver-box')
        }

        // checks if timer is written in config 
        if ("timer" in config) {
            setTimeout(() => {
                silverBox.parentElement.remove()
            }, config.timer)
        }

    }

    // event listeners
    silverBox = document.querySelector('.silver-box')

    // confirm close on click 
    let confirmButton = document.querySelector('.silverBox-confirm-button')

    // if confirm button doesn't closes onclick
    if (!("confirmButtonCloseOnClick" in config) || config.confirmButtonCloseOnClick.valueOf() === false) {
        confirmButton.addEventListener("click", () => {
            const silverBoxText = document.querySelector('.silverBox-confirm-button .silverBox-button-text')
            silverBoxText.classList.add("silverBox-loading-button")
        })
    }

    if (!("confirmButtonCloseOnClick" in config) || config.confirmButtonCloseOnClick === true) {
        closeOnClick(confirmButton)
    }
    // deny close on click 
    if (!("denyButtonCloseOnClick" in config) || config.denyButtonCloseOnClick === true) {
        let denyButton = document.querySelector('.silverBox-deny-button')
        closeOnClick(denyButton)
    }

    // cancel close on click 
    if (!("cancelButtonCloseOnClick" in config) || config.cancelButtonCloseOnClick === true) {
        let cancelButton = document.querySelector('.silverBox-cancel-button')
        closeOnClick(cancelButton)
    }

}

