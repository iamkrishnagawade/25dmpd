const axios = require('axios');
axios.defaults.baseURL = 'https://priceapi.moneycontrol.com';

const URLS = {
    PRICE_FEED: {
        BASE_URL: '/pricefeed',
        TYPE: {
            BSE: '/bse/equitycash',
            NSE: '/nse/equitycash'
        }
    }
},
getByDispId = (seType, dispId) => {
    return axios.get(`${URLS.PRICE_FEED.BASE_URL}${URLS.PRICE_FEED.TYPE[seType]}/${dispId}`);
}

/**
 * Returns Array, stock price infomraion.
 * 
 * @param {Array} companyList passed the companies
 * Example: 
 * [{ dispId: 'RI', seType: 'BSE' }]
 */

const manyPriceFeed = async (companyList) => {
    if(companyList === undefined) return [];

    return await axios.all(
        companyList.map(company => {
            return getByDispId(company.seType.toUpperCase(), company.dispId)
        })
    ).then(axios.spread((...objs) => {
        return objs.map((obj, i) => {
            const { 
                pricecurrent,
                priceprevclose,
                pricechange,
                pricepercentchange,
                VOL,
                tot_buy_qty,
                tot_sell_qty,
                PE,
                SC_SUBSEC,
                SC_FULLNM,
                symbol,
                NSEID,
                company,
                HP,
                LP,
                OPN
             } = obj.data.data;

            return {
                disp_id: companyList[i].dispId,
                se_type: companyList[i].seType.toUpperCase(),
                price: {
                    opn: OPN,
                    hp: HP,
                    lp: LP,
                    pricecurrent,
                    priceprevclose,
                    pricechange,
                    pricepercentchange,
                },
                vol: {
                    vol: VOL
                },
                qty: {
                    tot_buy_qty,
                    tot_sell_qty
                },
                details: {
                    sc_subsec: SC_SUBSEC,
                    sc_fullnm: SC_FULLNM,
                    symbol,
                    nseId: NSEID,
                    company
                },
                pe: PE
            }
        })
    })).catch(err => console.log(err));
}

const arrangePriceFeed = (priceFeed) => {
    return  priceFeed.map(feed => {
        return {
            disp_id: feed.disp_id,
            se_type: feed.se_type,
            ...feed.details,
            ...feed.price,
            ...feed.vol,
            ...feed.qty,
            pe: feed.pe
        }
    })
}

const filterPriceFeed = (pastPriceFeed, newPriceFeed) => {
    return newPriceFeed.filter((feed, i) => {
        return _.isEqual(pastPriceFeed[i], feed) === false;
    })
}

module.exports = {
    manyPriceFeed,
    arrangePriceFeed,
    filterPriceFeed
}