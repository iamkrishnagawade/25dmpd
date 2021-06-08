const _ = require('lodash');
const axios = require('axios');
axios.defaults.baseURL = 'https://appfeeds.moneycontrol.com/jsonapi/market/indices&format=json';

const URLS = {
    OVERVIEW: '&ind_id=',
    STOCKS: '&type=0&ind_id=9'
},
getByIndexId = (indexId) => {
    return axios.get(`${URLS.OVERVIEW}${indexId}`);
}

const manyIndex = async (indexList) => {
    if(indexList === undefined) return [];

    return await axios.all(
        indexList.map(index => {
            return getByIndexId(index.indexId)
        })
    ).then(axios.spread((...objs) => {
        return objs.map((obj, i) => {
            const {
                stkexchg,
                exchange,
                ind_id,
                region,
                lastprice,
                bridgesymbol,
                change,
                percentchange,
                open,
                high,
                low,
                prevclose
            } = obj.data.indices;

            return {
                price: {
                    open: parseFloat(open.replace(',', '')),
                    high: parseFloat(high.replace(',', '')),
                    low: parseFloat(low.replace(',', '')),
                    lastprice: parseFloat(lastprice.replace(',', '')),
                    prevclose: parseFloat(prevclose.replace(',', '')),
                    change,
                    percentchange
                },
                details: {
                    ind_id,
                    stkexchg,
                    exchange,
                    region,
                    bridgesymbol
                }
            }
        });
    })).catch(err => console.log(err));
}

const arrangeIndex = (indexList) => {
    return  indexList.map(index => {
        return {
            ...index.details,
            ...index.price
        }
    })
}

module.exports = {
    manyIndex,
    arrangeIndex
}