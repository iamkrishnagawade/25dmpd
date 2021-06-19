const _ = require('lodash');

exports.getValues = (obj) => {
    return obj.map(value => {
        return Object.values(value);
    })
}

exports.filterArray = (pastArry, newArry) => {
    return newArry.filter((value, i) => {
        return _.isEqual(pastArry[i], value) === false;
    })
}