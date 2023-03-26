import silverBox from "./silverBox";

showModal.addEventListener("click", () => {
	silverBox({
		// timer: 1000,
		// position: 'top-right', //
		icon: "success",
		title: "Title", //
		centerContent: true,
		html: "<p>hello sir</p>", //
		text: "simple text",
		showCloseButton: true,
		// confirm button
		showConfirmButton: true, //
		// confirmButtonColor: "#3085d6",//
		confirmButtonBorderColor: "#3085d6",
		confirmButtonTextColor: "#fff",
		confirmButtonText: "Confirm", //
		// confirmButtonIconRight: "../src/images/anya.png",//
		// confirmButtonIconLeft: "../src/images/anya.png",//
		confirmButtonCloseOnClick: false,
		// cancel button
		// showCancelButton: false, //
		// cancelButtonColor: "#fff",//
		// cancelButtonBorderColor: "#000",
		cancelButtonTextColor: "#000",
		cancelButtonText: "Cancel", //
		// cancelButtonIconRight: "/path/to/icon",//
		// cancelButtonIconLeft: "/path/to/icon",//
		cancelButtonCloseOnClick: false,
		// deny button
		showDenyButton: false,
		denyButtonColor: "#d23",
		denyButtonBorderColor: "#d23",
		denyButtonTextColor: "#fff",
		denyButtonText: "Deny", //
		denyButtonIconRight: "/path/to/icon", //
		denyButtonIconLeft: "/path/to/icon", //
		denyButtonCloseOnClick: false,
		inputs: [
			{
				label: "Name",
				type: "text",
				placeHolder: "Enter your name",
				// hint: 'input hint',
				readOnly: false,
			},
			{
				label: "Email",
				type: "text",
				placeHolder: "Enter your email",
				// hint: 'input hint',
				readOnly: false,
			},
			{
				label: "Password",
				type: "password",
				placeHolder: "Create a password",
				hint: 'Must be at least 8 characters',
				readOnly: false,
			}]
	});
});
