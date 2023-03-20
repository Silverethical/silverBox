// import components
import { confirmButton } from "./confirmButton";

// comments to be added.
export function silverBox() {

    // ---- silverBox modal START ----

    // body
    const body = document.body
    // modal box
    const modalBox = document.createElement("div")
    modalBox.classList.add("silver-box")
    // adding the box to body
    body.appendChild(modalBox)
    // ---- silverBox modal END ----

    modalBox.appendChild(confirmButton())
    return "Modal";
}
console.log(confirmButton());