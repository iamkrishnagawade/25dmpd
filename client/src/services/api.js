import axios from 'axios';

const URLS = {
    APP: '/api/v1/app',
    COMPANIES: '/companies',
    PRICE_FEEDS: '/price-feeds',
    DETAILS: '/details',
    PRICE_DETAILS: '/price-details'
},
APIGetCall = async url => {
    const res = await axios.get(url);

    // console.log('axioooooos---', res);
    return res?.data;
}

export const getCompanies = async () => await APIGetCall(`${URLS.APP}${URLS.COMPANIES}`);

export const getPriceFeeds = async disp_id => await APIGetCall(
    `${URLS.APP}${URLS.COMPANIES}${URLS.PRICE_FEEDS}/${disp_id}`
);

export const getCompanyDetails = async disp_id => await APIGetCall(
    `${URLS.APP}${URLS.COMPANIES}${URLS.PRICE_FEEDS}/${disp_id}${URLS.DETAILS}`
);

export const getCompanyPriceDetails = async disp_id => await APIGetCall(
    `${URLS.APP}${URLS.COMPANIES}${URLS.PRICE_FEEDS}/${disp_id}${URLS.PRICE_DETAILS}`
);