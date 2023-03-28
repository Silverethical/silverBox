import silverBox from "./silverBox";

showModal.addEventListener("click", () => {
	silverBox({
		// timer: 1000,
		// position: 'top-right', //
		theme: "light",
		alertIcon: "warning",
		userIcon: "../src/images/anya.png",
		title: "Title", //
		centerContent: true,
		html: "<p>hello sir</p>", //
		text: "simple text",
		footer: "<p>Dadasham footer</p>",
		showCloseButton: true,
		// confirm button
		showConfirmButton: true, //
		// confirmButtonColor: "#3085d6",//
		confirmButtonBorderColor: "#3085d6",
		confirmButtonTextColor: "#fff",
		confirmButtonText: "Confirm", //
		confirmButtonIconRight: "../src/images/anya.png",//
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
		// inputs: [
		// 	{
		// 		label: "Name",
		// 		type: "text",
		// 		// placeHolder: "Enter your name",
		// 		// hint: 'input hint',
		// 		readOnly: false,
		// 		inputWidth: '50px',
		// 		inputHeight: '50px',
		// 		inputMaxLength: 10,
		// 		textAlign: 'center',
		// 		fontSize: '20px',
		// 		multiplyBy: 1
		// 	},
		// 	{
		// 		label: "Email",
		// 		type: "text",
		// 		// placeHolder: "Enter your email",
		// 		// hint: 'input hint',
		// 		readOnly: false,
		// 		inputWidth: '50px',
		// 		inputHeight: '50px',
		// 		inputMaxLength: 1,
		// 		// textAlign: 'center',
		// 		fontSize: '20px',
		// 		multiplyBy: 1


		// 	},
		// 	{
		// 		label: "Password",
		// 		type: "password",
		// 		// placeHolder: "Create a password",
		// 		// hint: 'Must be at least 8 characters',
		// 		readOnly: false,
		// 		inputWidth: '50px',
		// 		inputHeight: '50px',
		// 		// inputMaxLength: 1,
		// 		// textAlign: 'center',
		// 		fontSize: '20px',
		// 		multiplyBy: 1


		// 	}
		// ]
	});
});
