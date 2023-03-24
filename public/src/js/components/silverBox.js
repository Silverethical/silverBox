// import components
import buttonComponent from "./button";
import inputComponent from "./input";
import modalSample from "./modalSample";
import headerComponent from "./header";
import closeOnClick from "./closeOnClick";
import iconsComponent from "./icons";

const log = console.log;
silverBox({
    // timer: 3000,
    // position: 'top-right', //
    icon: "success",
    title: "Title", //
<<<<<<< HEAD
    html: "text", //
=======
    html: "<h1>text</h1>", //
    text: "simple Text", //
>>>>>>> development
    // confirm button
    showConfirmButton: true, //
    // confirmButtonColor: "#3085d6",//
    confirmButtonBorderColor: "#3085d6",
    confirmButtonTextColor: "#fff",
    confirmButtonText: "Confirm",//
    // confirmButtonIconRight: "/path/to/icon",//
    // confirmButtonIconLeft: "/path/to/icon",//
    confirmButtonCloseOnClick: false,
    // cancel button
    showCancelButton: true, //
    // cancelButtonColor: "#fff",//
    // cancelButtonBorderColor: "#000",
    cancelButtonTextColor: "#000",
    cancelButtonText: "Cancel",//
    // cancelButtonIconRight: "/path/to/icon",//
    // cancelButtonIconLeft: "/path/to/icon",//
    cancelButtonCloseOnClick: false,
    // deny button
    showDenyButton: false,
    denyButtonColor: "#d23",
    denyButtonBorderColor: "#d23",
    denyButtonTextColor: "#fff",
    denyButtonText: "Deny",//
    denyButtonIconRight: "/path/to/icon",//
    denyButtonIconLeft: "/path/to/icon",//
    denyButtonCloseOnClick: false,
    // inputs: [
    //     {
    //         label: "label",
    //         type: "text",
    //         placeHolder: "test",
    //         hint: 'input hint',
    //         readOnly: true,
    //     },
    //     {
    //         label: "label",
    //         type: "text",
    //         placeHolder: "test",
    //         hint: 'input hint',
    //         readOnly: true,
    //     }]

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
        elementsArray.push(headerComponent({ titleText: config.title, htmlText: config.html, simpleText: config.text, imageSource: iconsComponent(config.icon) }))

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
            buttonWrapper.append(buttonComponent({ text: (config.cancelButtonText) ? config.cancelButtonText : "Cancel", elementUniqueClassList: `silverBox-cancel-button`, buttonBgColor: config.cancelButtonColor, leftIcon: config.cancelButtonIconLeft, rightIcon: config.cancelButtonIconRight, borderColor: "cancelButtonBorderColor" in config ? config.cancelButtonBorderColor : config.cancelButtonColor, textColor: config.cancelButtonTextColor }))
        }
        // deny button
        if (("showDenyButton" in config) && config.showDenyButton.valueOf() === true) {
            buttonWrapper.append(buttonComponent({ text: (config.denyButtonText) ? config.denyButtonText : "Deny", elementUniqueClassList: `silverBox-deny-button`, buttonBgColor: config.denyButtonColor, leftIcon: config.denyButtonIconLeft, rightIcon: config.denyButtonIconRight, borderColor: "denyButtonBorderColor" in config ? config.denyButtonBorderColor : config.denyButtonColor, textColor: config.denyButtonTextColor }))
        }
        // confirm button
        if (!("showConfirmButton" in config) || config.showConfirmButton.valueOf() === true) {
            buttonWrapper.append(buttonComponent({ text: (config.confirmButtonText) ? config.confirmButtonText : "Confirm", elementUniqueClassList: `silverBox-confirm-button`, buttonBgColor: config.confirmButtonColor, leftIcon: config.confirmButtonIconLeft, rightIcon: config.confirmButtonIconRight, borderColor: "confirmButtonBorderColor" in config ? config.confirmButtonBorderColor : config.confirmButtonColor, textColor: config.confirmButtonTextColor }))
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
        elementsArray.push(headerComponent({ titleText: config.title, descriptionText: config.html, imageSource: iconsComponent(config.icon) }))

        // cancel button
        if (("showCancelButton" in config) && config.showCancelButton.valueOf() === true) {
            buttonWrapper.append(buttonComponent({ text: (config.cancelButtonText) ? config.cancelButtonText : "Cancel", elementUniqueClassList: `silverBox-cancel-button`, buttonBgColor: config.cancelButtonColor, leftIcon: config.cancelButtonIconLeft, rightIcon: config.cancelButtonIconRight, borderColor: "cancelButtonBorderColor" in config ? config.cancelButtonBorderColor : config.cancelButtonColor, textColor: config.cancelButtonTextColor }))
        }
        // deny button
        if (("showDenyButton" in config) && config.showDenyButton.valueOf() === true) {
            buttonWrapper.append(buttonComponent({ text: (config.denyButtonText) ? config.denyButtonText : "Deny", elementUniqueClassList: `silverBox-deny-button`, buttonBgColor: config.denyButtonColor, leftIcon: config.denyButtonIconLeft, rightIcon: config.denyButtonIconRight, borderColor: "denyButtonBorderColor" in config ? config.denyButtonBorderColor : config.denyButtonColor, textColor: config.denyButtonTextColor }))
        };
        // confirm button
        if (!("showConfirmButton" in config) || config.showConfirmButton.valueOf() === true) {
            buttonWrapper.append(buttonComponent({ text: (config.confirmButtonText) ? (config.confirmButtonText) : "Confirm", elementUniqueClassList: `silverBox-confirm-button`, buttonBgColor: config.confirmButtonColor, leftIcon: config.confirmButtonIconLeft, rightIcon: config.confirmButtonIconRight, borderColor: "confirmButtonBorderColor" in config ? config.confirmButtonBorderColor : config.confirmButtonColor, textColor: config.confirmButtonTextColor }))
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

    // select buttons 
    let confirmButton = document.querySelector('.silverBox-confirm-button')
    let denyButton = document.querySelector('.silverBox-deny-button')
    let cancelButton = document.querySelector('.silverBox-cancel-button')

    // confirm close on click
    if (!("confirmButtonCloseOnClick" in config) || config.confirmButtonCloseOnClick === true) {
        if (confirmButton) confirmButton.addEventListener('click', closeOnClick)
    } else {
        confirmButton.addEventListener("click", () => {
            confirmButton.classList.add("silverBox-loading-button")
            confirmButton.setAttribute("disabled", "")
        })
    };
    // deny close on click 
    if (!("denyButtonCloseOnClick" in config) || config.denyButtonCloseOnClick === true) {
        if (denyButton) denyButton.addEventListener('click', closeOnClick)
    } else {
        denyButton.addEventListener("click", () => {
            denyButton.classList.add("silverBox-loading-button")
            denyButton.setAttribute("disabled", "")
        })
    };

    // cancel close on click 
    if (!("cancelButtonCloseOnClick" in config) || config.cancelButtonCloseOnClick === true) {
        if (cancelButton) cancelButton.addEventListener('click', closeOnClick)
        cancelButton.classList.add("silverBox-loading-button")
    } else {
        cancelButton.addEventListener("click", () => {
            cancelButton.classList.add("silverBox-loading-button")
            cancelButton.setAttribute("disabled", "")
        })
    }


}

