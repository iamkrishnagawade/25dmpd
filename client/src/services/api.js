import axios from 'axios';

const URLS = {
    COMPANIES: '/api/v1/app/companies',
    PRICE_FEEDS: '/api/v1/app/price-feeds'
},
APIGetCall = async url => {
    const res = await axios.get(url);

    console.log('axioooooos---', res);
    return res?.data;
}

export const getCompanies = async () => await APIGetCall(URLS.COMPANIES);

export const getPriceFeeds = async disp_id => await APIGetCall(`${URLS.PRICE_FEEDS}/${disp_id}`);