const express = require('express');

// Initialize express and define a port
const app = express();
const PORT = 5000;

// Tell express to use express JSON parsing
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.post('/', (req, res) => {
    res.send("Hello World!");
});

// Start express on the defined port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))