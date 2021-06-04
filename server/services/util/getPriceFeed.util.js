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

const many = async (companyList) => {
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
                DISPID,
                SC_SUBSEC,
                SC_FULLNM,
                symbol,
                NSEID,
                company
             } = obj.data.data;

            return {
                dispId: companyList[i].dispId,
                seType: companyList[i].seType.toUpperCase(),
                price: {
                    pricecurrent,
                    priceprevclose,
                    pricechange,
                    pricepercentchange
                },
                vol: {
                    vol: VOL
                },
                qty: {
                    tot_buy_qty,
                    tot_sell_qty
                },
                details: {
                    dispId: DISPID,
                    sc_subsec: SC_SUBSEC,
                    sc_fullnm: SC_FULLNM,
                    symbol,
                    nseId: NSEID,
                    company
                },
                pe: PE
            }
        })
    }));
}

module.exports = {
    many
}