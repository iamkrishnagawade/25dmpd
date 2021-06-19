const express = require('express');

// Initialize express and define a port
const app = express();
const PORT = 5000;

// Tell express to use express JSON parsing
app.use(express.json());

app.post('/hook', (req, res) => {
    console.log(req.body);
    res.status(200).end();
});

// Start express on the defined port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))