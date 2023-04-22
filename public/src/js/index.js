import silverBox from "./silverBox";
import examples from "./data/example";
import teamMembers from "./data/teamMembers";
import renderTeamMembers from "./helpers/renderTeamMembers";
import customStringify from "./helpers/customStringify";
import renderExample from "./components/renderExample";
import renderNavBarLinks from "./components/renderNavBarLinks";
import silverBoxDocumentationTableComponent from "./components/documentationTableComponent";

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
	const button = document.querySelectorAll(".silverBox-showExample");

	button[i].addEventListener("click", () => {
		silverBox(examples[i].config);
	});
}

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
silverBoxDocumentationTableComponent()

// appending the created ul of the documentation keys ID's to the navBar
let documentationInNavBar = document.querySelector('#drop-down');

documentationInNavBar.append(renderNavBarLinks());

// highlight codes (highlightJS library)
hljs.highlightAll();