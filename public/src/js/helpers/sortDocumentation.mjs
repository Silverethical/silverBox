/**
 * Sorts an array of documentation objects by configName, and sorts the config array within each object by configName.
 * @param {Array} documentation - An array of documentation objects.
 * @returns {Array} - The sorted array of documentation objects.
 */

function sortDocumentation(documentation) {
	// Sort the main documentation array by configName
	documentation.sort((a, b) => {
		// Convert names to uppercase to ignore casing
		const nameA = a.configName.toUpperCase();
		const nameB = b.configName.toUpperCase();
		if (nameA < nameB) return -1;
		if (nameA > nameB) return 1;
		return 0;
	});

	// Loop through the sorted array and sort the config array within each object
	documentation.forEach((obj) => {
		if (obj.config) {
			obj.config.sort((c, d) => {
				// Convert names to uppercase to ignore casing
				const nameC = c.configName.toUpperCase();
				const nameD = d.configName.toUpperCase();
				if (nameC < nameD) return -1;
				if (nameC > nameD) return 1;
				return 0;
			});
		}
	});

	return documentation;
}

export default sortDocumentation;
