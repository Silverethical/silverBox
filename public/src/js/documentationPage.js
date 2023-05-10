const allVersions = ["1.0.0"];

let versionNumber = getParameterByName("v");

if (!versionNumber || !allVersions.includes(versionNumber)) {
	versionNumber = allVersions[allVersions.length - 1];
}

document.addEventListener("DOMContentLoaded", async () => {
	// renderTable("#tableWrapperSelector", await getDocData())
});

async function getDocData() {
	try {
		return await fetch(`/src/js/data/allDocs/${versionNumber}.json`)
			.then((data) => {
				return data.json();
			})
			.then((res) => {
				return res;
			});
	} catch (error) {
		console.error(error);
		return false;
	}
}

function getParameterByName(name, url = window.location.href) {
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return "";
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}
