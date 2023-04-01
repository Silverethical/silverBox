/**
 * Retrieves information about a GitHub user from the GitHub API.
 * @async
 * @param {string} username - The GitHub username to retrieve information for.
 * @returns {Promise<object|boolean>} - A promise that resolves to an object containing the user information if successful, or false if unsuccessful.
 */
async function getTeamMembersInfo(username) {
	try {
		// Make a request to the GitHub API to retrieve information about the user.
		const response = await fetch(`//api.github.com/users/${username}`);

		// Check if the response was successful, throwing an error if not.
		if (!response.ok) {
			throw new Error(response.statusText);
		}

		// Parse the response body as JSON and return it.
		const data = await response.json();
		return data;
	} catch (error) {
		// Log the error to the console and return false.
		console.error(`Request failed: ${error}`);
		return false;
	}
}

export default getTeamMembersInfo;
