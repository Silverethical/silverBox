// import
import silverBoxDocumentationTableComponent from "./components/documentationTableComponent";

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

// all versions of documentation
const allVersions = ["1.0.0"];
// version number from query string url
let versionNumber = getParameterByName("v");

// if version number from query string is not given or does not exists in allVersions array
if (!versionNumber || !allVersions.includes(versionNumber)) {
	// set the versionNumber to latest version
	versionNumber = allVersions[allVersions.length - 1];
}

// on DOM load
document.addEventListener("DOMContentLoaded", async () => {
	const { default: docs } = await import(`/public/src/js/data/documentations/${versionNumber}.js`);
	silverBoxDocumentationTableComponent(".silverBox-tableWrapper", docs);
});

// get query string value from URL
function getParameterByName(name, url = window.location.href) {
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return "";
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}
