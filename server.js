const express = require("express");
const path = require("path");

// Create a new Express application
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route that responds with "Hello, world!" when accessed
app.get("/", (req, res) => {
	const filePath = path.join(__dirname, "index.html");
	res.sendFile(filePath);
});

// Start the server to listen for incoming requests
const port = 3000;
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
