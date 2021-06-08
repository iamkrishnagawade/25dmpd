const _ = require('lodash');

const getValues = (obj) => {
    return obj.map(value => {
        return Object.values(value);
    })
}

const filterArray = (pastArry, newArry) => {
    return newArry.filter((value, i) => {
        return _.isEqual(pastArry[i], value) === false;
    })
}

module.exports = {
    getValues,
    filterArray
}