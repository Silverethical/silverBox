import silverBox from "./silverBox";
import examples from "./data/example";
import teamMembers from "./data/teamMembers";
import renderTeamMembers from "./helpers/renderTeamMembers";
import customStringify from "./helpers/customStringify";
import renderExample from "./components/renderExample";
import copyConfig from "./helpers/copyConfig";

document.addEventListener("DOMContentLoaded", () => {
	renderTeamMembers(teamMembers);
});

// navigation section
const hamburgerMenuIcon = document.querySelector("#hamburger-menu");
const silverBoxLogo = document.querySelector("#logo");
const navigationList = document.querySelector("#silverBox-header nav ul");

// opens/closes the navigation menu on hamburger menu click
hamburgerMenuIcon.addEventListener("click", () => {
	if (!navigationList.classList.contains("show")) {
		hamburgerMenuIcon.classList.add("rotate");
		navigationList.classList.add("show");
		silverBoxLogo.classList.add("hide");
	} else {
		hamburgerMenuIcon.classList.remove("rotate");
		navigationList.classList.remove("show");
		silverBoxLogo.classList.remove("hide");
	}
});

// silverBox header gets a background color whenever we scroll the page
const header = document.querySelector("#silverBox-header");

window.addEventListener("scroll", () => {
	let bodyScrollHeight = window.scrollY;

	// if the scrollHeight is more than 50, the header will get a class
	if (bodyScrollHeight > 50) {
		header.classList.add("scrolled");
	}
	// else it will be removed
	else {
		header.classList.remove("scrolled");
	}
});

// example section

// example's parent
const exampleSectionContainer = document.querySelector(
	"#silverBox-exampleSection .container"
);

// adding each new example to it's parent

for (let i = 0; i < examples.length; i++) {
	// new example structure (filled)
	let newExample = renderExample(
		examples[i].explanation,
		`silverBox(${customStringify(examples[i].config)})`
	);
	// appending the newExample to example section
	exampleSectionContainer.append(newExample);

	// selecting showConfig buttons
	const button = document.querySelectorAll(".silverBox-showExample");

	button[i].addEventListener("click", () => {
		silverBox(examples[i].config);
	});
}

// usage section

const usageCode1 = document.querySelector("#silverBox-usageInstructions code.step1");
usageCode1.textContent += `<link rel="stylesheet" href="silverBox.min.css">`;
usageCode1.textContent += `\n<script src="silverBox.min.js"></script>`;

const usageCode2 = document.querySelector("#silverBox-usageInstructions code.step2");
usageCode2.textContent = `silverBox({
	alertIcon: "success",
	text: "Your task has been completed.",
	centerContent: true,
	confirmButton: {
		bgColor: "#3085d6",
		borderColor: "#3085d6",
		textColor: "#fff",
		text: "Confirm",
		closeOnClick: true
	}
})`;

// usage example copyButton
let usageExampleCopyButton = document.querySelector(
	"#usage-example .silverBox-exampleCopyButton"
);

usageExampleCopyButton.addEventListener("click", () => {
	// calls the copyConfig
	copyConfig({
		copy: usageCode2.textContent,
		iconElement: usageExampleCopyButton.children[0],
		timeOut: 1500,
	});
});

// highlight codes (highlightJS library)
hljs.highlightAll();
