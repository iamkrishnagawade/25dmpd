const config = require('./config');
const getPriceFeed = require('./util/getPriceFeed.util');
const companyList = [
    { dispId: 'RI', seType: 'BSE' }
]
// require('dotenv').config({ path: '../../.env' });

// console.log(process.env.DB_HOST);

setInterval(async function() {
    console.log(await getPriceFeed.many(companyList))
}, config.services.spy.timeout);