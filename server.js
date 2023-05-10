// Import the necessary modules
const express = require("express");
const path = require("path");

// Create a new Express application
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "/")));

// Define a route for the root URL
app.get("/", (req, res) => {
	// Construct the file path for the index.html file
	const filePath = path.join(__dirname, "./index.html");
	// Send the index.html file to the client
	res.sendFile(filePath);
});

// Define a route for the documentation URL
app.get("/documentation", (req, res) => {
	// Construct the file path for the documentation html file
	const filePath = path.join(__dirname, "./documentation/index.html");
	// Send the documentation html file to the client
	res.sendFile(filePath);
});

// Define the port number for the server to listen on
const port = process.env.PORT || 3000; // Use the port specified in the environment variable or 3000 by default

// Start the server and listen on the specified port
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});

// Define an error handling middleware function
app.use(function (err, req, res, next) {
	// Log the error to the console
	console.error(err.stack);
	// Send a generic error response to the client with a 500 status code
	res.status(500).send("Something broke!");
});
