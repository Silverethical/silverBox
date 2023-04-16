import silverBox from "./silverBox";
import examples from "./data/example";
import teamMembers from "./data/teamMembers";
import renderTeamMembers from "./helpers/renderTeamMembers";
import customStringify from "./helpers/customStringify";
import renderExample from "./components/renderExample";
import renderNavBarLinks from "./components/renderNavBarLinks";
import tableComponent from "./components/tableComponent";
// silverBox({
// 	// direction: 'rtl',
// 	// timer: 1000,
// 	// position: 'top-right', //
// 	theme: "light",
// 	// alertIcon: "warning",
// 	userIcon: "../src/images/anya.png",
// 	title: "AYAYA", //
// 	centerContent: true,
// 	html: "<p>weebs</p>", //
// 	text: "simple text",
// 	footer: "<p>Abjim footer AYAYA</p>",
// 	showCloseButton: true,

// 	// confirm button
// 	confirmButton: {
// 		showButton: false,
// 		bgColor: "#3085d6",//
// 		borderColor: "#3085d6",
// 		textColor: "#fff",
// 		text: "Confirm", //
// 		iconRight: "../src/images/anya.png",//
// 		iconLeft: "../src/images/anya.png",//
// 		closeOnClick: false,
// 	},

// 	// cancel button
// 	cancelButton: {
// 		showButton: false,
// 		bgColor: "#fff",//
// 		// borderColor: "#000",
// 		textColor: "#000",
// 		text: "Cancel", //
// 		iconRight: "/path/to/icon",//
// 		iconLeft: "/path/to/icon",//
// 		closeOnClick: false,
// 	},

// 	// deny button
// 	denyButton: {
// 		showButton: false,
// 		bgColor: "#d23",
// 		borderColor: "#d23",
// 		textColor: "#fff",
// 		text: "Deny", //
// 		iconRight: "/path/to/icon", //
// 		iconLeft: "/path/to/icon", //
// 		closeOnClick: false,
// 	},

// 	// input: [
// 	// 	{
// 	// 		label: "Name",
// 	// 		type: "text",
// 	// 		// placeHolder: "Enter your name",
// 	// 		// hint: 'input hint',
// 	// 		readOnly: false,
// 	// 		inputWidth: '50px',
// 	// 		inputHeight: '50px',
// 	// 		inputMaxLength: 10,
// 	// 		textAlign: 'center',
// 	// 		fontSize: '20px',
// 	// 		multiplyBy: 1
// 	// 	},
// 	// 	// {
// 	// 	// 	label: "Email",
// 	// 	// 	type: "text",
// 	// 	// 	// placeHolder: "Enter your email",
// 	// 	// 	// hint: 'input hint',
// 	// 	// 	readOnly: false,
// 	// 	// 	inputWidth: '50px',
// 	// 	// 	inputHeight: '50px',
// 	// 	// 	inputMaxLength: 1,
// 	// 	// 	// textAlign: 'center',
// 	// 	// 	fontSize: '20px',
// 	// 	// 	multiplyBy: 1

// 	// 	// },
// 	// 	// {
// 	// 	// 	label: "Password",
// 	// 	// 	type: "password",
// 	// 	// 	// placeHolder: "Create a password",
// 	// 	// 	// hint: 'Must be at least 8 characters',
// 	// 	// 	readOnly: false,
// 	// 	// 	inputWidth: '50px',
// 	// 	// 	inputHeight: '50px',
// 	// 	// 	// inputMaxLength: 1,
// 	// 	// 	// textAlign: 'center',
// 	// 	// 	fontSize: '20px',
// 	// 	// 	multiplyBy: 1

// 	// 	// }
// 	// ]
// });

/** selectors */
const sidebar = document.querySelector("aside.sidebar"),
	hamMenu = document.querySelector(".hamburger-menu"),
	hamMenuInput = document.querySelector(".hamburger-menu > input");

hamMenuInput.addEventListener("change", () => {
	if (hamMenuInput.checked) {
		sidebar.classList.add("show-sidebar");
		hamMenu.classList.add("show-x");
	} else {
		sidebar.classList.remove("show-sidebar");
		hamMenu.classList.remove("show-x");
	}
});

document.addEventListener("DOMContentLoaded", () => {
	hamMenuInput.checked = true;

	setTimeout(() => {
		hamMenuInput.click();
	}, 300);

	renderTeamMembers(teamMembers);
});

// example section

// example's parent
const exampleSection = document.querySelector("#exampleSection");

// adding each new example to it's parent

for (let i = 0; i < examples.length; i++) {
	// new example structure (filled)
	let newExample = renderExample(
		examples[i].explanation,
		`silverBox(${customStringify(examples[i].config)})`
	);
	// appending the newExample to example section
	exampleSection.append(newExample);

	// selecting showConfig buttons
	const button = document.querySelectorAll(".showExample");

	button[i].addEventListener("click", () => {
		silverBox(examples[i].config);
	});
}
tableComponent()
// usage section
const usageCode1 = document.querySelector("#usageInstructions code.step1");
usageCode1.textContent += `<link rel="stylesheet" href="silverBox.min.css">`;
usageCode1.textContent += `\n<script src="silverBox.min.js"></script>`;

const usageCode2 = document.querySelector("#usageInstructions code.step2");
usageCode2.textContent = `silverBox({
	alertIcon: "success",
	text: "Your task has been completed.",
	centerContent: true,
	confirmButton: {
		   showButton: true,
		   bgColor: "#3085d6",
		   borderColor: "#3085d6",
		   textColor: "#fff",
		   text: "Confirm",
		   closeOnClick: true
	}
})`


// documentation section

// documentation parent
const tableWrapper = document.querySelector(".tableWrapper");
// loops the documentation array and renders values inside elements using renderDocumentation object

// documentation.forEach((documentConfig) => {
// 	let newDocument;
// 	// if the object doesn't have config key in it this code will be executed
// 	if (!("config" in documentConfig)) {
// 		newDocument = renderDocumentation({
// 			documentArgument: documentConfig.configName,
// 			documentExplanation: documentConfig.explanation,
// 			documentDefaultValue: documentConfig.defaultValue,
// 		});
// 	} else {
// 		// if the object has config key in it this code will be executed
// 		newDocument = renderDocumentation({
// 			documentArgument: documentConfig.configName,
// 			documentCode: customStringify(documentConfig.config),
// 			documentExplanation: documentConfig.explanation,
// 			documentDefaultValue: documentConfig.defaultValue,
// 		});
// 	}
// 	// appends the documents inside the tableWrapper
// 	tableWrapper.append(newDocument);
// });

// appending the created ul of the documentation keys ID's to the navBar
let documentationInNavBar = document.querySelector(
	'nav ul a[href="#documentationSection"] li'
);

documentationInNavBar.append(renderNavBarLinks());

// highlight codes (highlightJS library)
hljs.highlightAll();
