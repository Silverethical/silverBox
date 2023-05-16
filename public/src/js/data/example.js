const examples = [
	{
		explanation: "Simple success alert.",
		config: {
			title: {
				text: "Success",
				alertIcon: "success",
			},
			text: "Your task has been completed.",
		},
	},
	{
		explanation: "Error modal with a button.",
		config: {
			alertIcon: "error",
			text: "Operation failed.",
			centerContent: true,
			cancelButton: {
				text: "OK",
			},
		},
	},
	{
		explanation: "Small informative message on top-right of the screen.",
		config: {
			position: "top-right",
			alertIcon: "info",
			text: "changes has been saved!",
			centerContent: true,
			showCloseButton: true,
		},
	},
	{
		explanation: "Auto closing pop-up message with a timer.",
		config: {
			timer: 2000,
			customIcon: "/public/src/images/lightTimeout.png",
			title: {
				text: "You are so cute",
			},
			centerContent: true,
		},
	},
	{
		explanation: "A dark theme pop-up message.",
		config: {
			alertIcon: "info",
			theme: "dark",
			text: "Welcome to the dark side",
			centerContent: true,
			showCloseButton: true,
		},
	},
	{
		explanation:
			"A login modal with a custom icon, a footer, and 2 different types of inputs.",
		config: {
			customIcon: "/public/src/images/loginExample.png",
			title: {
				text: "Login",
			},
			centerContent: true,
			text: "Enter your account information",
			footer: "<a href='#'>Forgot your password?</a>",
			showCloseButton: true,
			confirmButton: {
				text: "Login",
				closeOnClick: false,
			},
			cancelButton: {},
			input: [
				{
					label: "Username",
					type: "text",
					placeHolder: "Enter your username",
					maxLength: 30,
				},
				{
					label: "Password",
					type: "password",
					placeHolder: "Enter your password",
					hint: "Pick a strong password.",
				},
			],
		},
	},
];

export default examples;
