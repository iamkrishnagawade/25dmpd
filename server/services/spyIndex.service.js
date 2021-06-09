const config = require('./config');
const commonUtil = require('./util/common.util');
const getIndex = require('./util/getIndex.util');
const storeIndex = require('./db/index.db');
let pastIndex = [];

setInterval(async function() {
    const index = await getIndex.manyIndex(config.services.spy.indexList);

    if(index !== undefined) {
        if(index.length !== 0) {
            const arrIndex = getIndex.arrangeIndex(index);
            
            if(pastIndex.length !== 0) {
                const filterIndex = commonUtil.filterArray(pastIndex, arrIndex);

                if(filterIndex.length !== 0) {
                    // store index into database
                    storeIndex.createMany(commonUtil.getValues(filterIndex), (err, data) => {
                        if(err) {
                            console.log('Error', error.message);
                            return;
                        }
                    });
                }
            }

            pastIndex = arrIndex;
        }
    }
}, config.services.spy.timeout);