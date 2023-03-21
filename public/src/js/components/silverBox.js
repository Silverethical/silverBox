// import components
import buttonComponent from "./button";
import inputComponent from "./input";
import modalSample from "./modalSample";
import headerComponent from "./header";

const log = console.log;
silverBox({
    timer: 1500,
    position: 'top-right', //
    icon: "warning",
    title: "Title", //
    html: "<h1>text</h1>", //
    showCancelButton: false, //
    showDenyButton: true,
    showConfirmButton: false, //
    confirmButtonColor: "#3085d6",//
    confirmButtonText: "Yes",//
    confirmButtonIconRight: "/path/to/icon",//
    cancelButtonColor: "#d33",//
    cancelButtonText: "Cancel",//
    denyButtonText: "Deny",//
    disableConfirmButton: true,//
    inputs: [
        {
            label: "label",
            type: "text",
            placeHolder: "test",
            hint: 'input hint',
            readOnly: true,
        },
        {
            label: "enter email",
            type: "textarea",
            placeHolder: "test2",
            hint: 'input hint',
            readOnly: false,

        },
    ],
})


// comments to be added.
export function silverBox(config) {
    // array of all the elements in the modal (inputs/texts/icons/buttons)
    let elementsArray = []

    // checks if the config needs an input modal or alertModal
    if (config.inputs) {
        // input modal

        config.inputs.forEach(input => {
            elementsArray.push(inputComponent({ inputType: input.type }))
        })

        elementsArray.push(headerComponent({}))

        elementsArray.push(buttonComponent({}))

        document.body.append(modalSample(elementsArray))
    }
    else {
        // alert modal
    }
}


