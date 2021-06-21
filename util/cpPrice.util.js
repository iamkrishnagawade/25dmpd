const axios = require('axios');
const URLS = require('../config/urls');
const logging = require('./logging.util');
const { insertPriceFeedsIntoDB } = require('./db.util');
const common = require('./common.util');
const appConfig = require('../config/app.config');

const getByDispId = (seType, dispId) => {
    return axios.get(`${URLS.PRICE_FEED.BASE_URL}${URLS.PRICE_FEED.TYPE[seType]}/${dispId}`);
},
arrPriceFeeds = (feeds) => {
    return feeds.map(feed => {
        return {
            disp_id: feed.disp_id,
            se_type: feed.se_type,
            ...feed.data.details,
            ...feed.data.price,
            ...feed.data.vol,
            ...feed.data.qty,
            pe: feed.data.pe
        }
    })
}

// get companies price information
exports.getPriceFeeds = async (companies) => {
    logging.func('[GET PRICE FEEDS]');
    if(companies === undefined) {
        logging.warning('Return companies: undefined');
        return []
    };
    logging.info('Found companies data.');
    logging.default(`Companies: ${JSON.stringify(companies)}`);

    return await axios.all(
        companies.map(company => {
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
                disp_id: companies[i].dispId,
                se_type: companies[i].seType.toUpperCase(),
                data: {
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
            }
        })
    })).catch(err => logging.error(err));
}

exports.savePriceFeeds = async (pastFeeds, newFeeds, result) => {
    logging.func('[SAVE PRICE FEEDS]');
    logging.default(`Past Feeds: ${JSON.stringify(pastFeeds)}`);
    logging.default(`New Feeds: ${JSON.stringify(newFeeds)}`);
    const arrData = arrPriceFeeds(newFeeds);
    logging.default(`Arr data: ${JSON.stringify(arrData)}`);

    if(newFeeds.length === 0) {
        logging.warning('New feeds data is empty');
        result({ kind: 'empty_data' }, null);
        return;
    } else {
        if(pastFeeds !== 0) {
            logging.info('Found past data.');
            const filterData = common.filterArray(pastFeeds, arrData);
            logging.default(`Filter Data: ${JSON.stringify(filterData)}`);

            if(filterData.length !== 0) {
                logging.info('Start saving data into DB');
                const getValues = common.getValues(filterData);

                logging.default(`Get Values: ${JSON.stringify(getValues)}`);
                insertPriceFeedsIntoDB(getValues, (err, data) => {
                    if(err) {
                        logging.error(err);
                        result(err, null);
                        return;
                    }

                    logging.info('Data saved into DB.');
                    logging.default(`Saved Data: ${JSON.stringify(data)}`);
                })
            } else {
                logging.warning('Data not updated.');
            }
        } else {
            logging.default('Past feeds data is empty');
        }
    }

    result(null, arrData);
}