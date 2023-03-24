import silverBox from "./components/silverBox";

showModal.addEventListener("click", () => {
	silverBox({
		// timer: 1000,
		position: 'top-right', //
		icon: "success",
		title: "Title", //
		html: "<p>test</p>", //
		text: "simple text",
		showCloseButton: true,
		// confirm button
		showConfirmButton: true, //
		// confirmButtonColor: "#3085d6",//
		confirmButtonBorderColor: "#3085d6",
		confirmButtonTextColor: "#fff",
		confirmButtonText: "Confirm", //
		// confirmButtonIconRight: "/path/to/icon",//
		// confirmButtonIconLeft: "/path/to/icon",//
		confirmButtonCloseOnClick: true,
		// cancel button
		showCancelButton: true, //
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
	});
});
