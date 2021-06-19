const express = require('express');

// Initialize express and define a port
const app = express();
const PORT = 4000;

// Tell express to use express JSON parsing
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Welcome to 25DMPD!");
});

// Start express on the defined port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))