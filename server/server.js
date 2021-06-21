const express = require('express');
const morgan  = require('morgan');

// Initialize express and define a port
const app = express();
const PORT = 4000;

// Tell express to use express JSON parsing
app.use(express.json());

//and morgan to log in the "combined" pre-defined format
app.use(morgan('combined'))

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Welcome to 25DMPD!");
});

// required routes
const CpPriceFeedsRoutes = require('./routes/cpPriceFeeds.routes');

// using middleware
app.use('/api/v1/app', CpPriceFeedsRoutes);

// Start express on the defined port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))