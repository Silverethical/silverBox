const customStringify = (obj) => {
	const jsonString = JSON.stringify(obj, null, 7);
	const pattern = /"([^"]+)"\s*:/g;
	const newString = jsonString.replace(pattern, "$1:");
	return newString;
};

export default customStringify;
