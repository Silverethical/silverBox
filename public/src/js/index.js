import silverBox from "./silverBox";
silverBox({
	// timer: 1000,
	// position: 'top-right', //
	theme: "light",
	// alertIcon: "warning",
	userIcon: "../src/images/anya.png",
	title: "AYAYA", //
	centerContent: true,
	html: "<p>weebs</p>", //
	text: "simple text",
	footer: "<p>Abjim footer AYAYA</p>",
	showCloseButton: true,
	
	// confirm button
	confirmButton: {
		bgColor: "#3085d6",//
		borderColor: "#3085d6",
		textColor: "#fff",
		text: "Confirm", //
		iconRight: "../src/images/anya.png",//
		iconLeft: "../src/images/anya.png",//
		closeOnClick: false,
	},

	// cancel button
	// cancelButton: {
	// 	bgColor: "#fff",//
	// 	// borderColor: "#000",
	// 	textColor: "#000",
	// 	text: "Cancel", //
	// 	iconRight: "/path/to/icon",//
	// 	iconLeft: "/path/to/icon",//
	// 	closeOnClick: false,
	// },
	
	// deny button
	// denyButton: {
	// 	bgColor: "#d23",
	// 	borderColor: "#d23",
	// 	textColor: "#fff",
	// 	text: "Deny", //
	// 	iconRight: "/path/to/icon", //
	// 	iconLeft: "/path/to/icon", //
	// 	closeOnClick: false,
	// },

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
	// 	// {
	// 	// 	label: "Email",
	// 	// 	type: "text",
	// 	// 	// placeHolder: "Enter your email",
	// 	// 	// hint: 'input hint',
	// 	// 	readOnly: false,
	// 	// 	inputWidth: '50px',
	// 	// 	inputHeight: '50px',
	// 	// 	inputMaxLength: 1,
	// 	// 	// textAlign: 'center',
	// 	// 	fontSize: '20px',
	// 	// 	multiplyBy: 1


	// 	// },
	// 	// {
	// 	// 	label: "Password",
	// 	// 	type: "password",
	// 	// 	// placeHolder: "Create a password",
	// 	// 	// hint: 'Must be at least 8 characters',
	// 	// 	readOnly: false,
	// 	// 	inputWidth: '50px',
	// 	// 	inputHeight: '50px',
	// 	// 	// inputMaxLength: 1,
	// 	// 	// textAlign: 'center',
	// 	// 	fontSize: '20px',
	// 	// 	multiplyBy: 1


	// 	// }
	// ]
});
