import getTeamMembersInfo from "./getTeamMembersInfo";

/**
 * Adds team members to the DOM.
 * @param {Array} teamMembers - An array of objects representing team members.
 */
async function renderTeamMembers(teamMembers) {
	// Select the parent element where team members will be added.
	const teamMembersParent = document.querySelector(
		"#theTeamSection .teamMembers"
	);

	// Iterate over each team member object and create the necessary elements to display their information.
	for (const teamMember of teamMembers) {
		// Destructure the properties we need from the team member object.
		const { githubUsername, position } = teamMember;

		// Get the avatar URL of the team member from their GitHub profile.
		const { avatar_url, login } = await getTeamMembersInfo(githubUsername);

		// if user exists
		if (login) {
			// Create a new anchor element to hold the team member information.
			const newTeamMember = document.createElement("a");
			newTeamMember.classList.add("teamMember");
			newTeamMember.href = `//github.com/${githubUsername}`;
			newTeamMember.target = "_blank";

			// Use template literals to create the HTML structure of the team member information.
			newTeamMember.innerHTML = `
				  <img class="memberImage" src="${avatar_url}">
				  <div class="memberInfo">
					  <p class="memberName">${githubUsername}</p>
					  <p class="memberPosition">${position}</p>
				  </div>`;

			// Add the new team member to the parent element.
			teamMembersParent.appendChild(newTeamMember);
		}
	}
}

export default renderTeamMembers;
