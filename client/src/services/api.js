import axios from 'axios';

const URLS = {
    DISP_ID: '',
    COMPANIES: '/api/v1/app/companies',
    PRICE_FEEDS: '/api/v1/app/companies/price-feeds',
    set dispId(disp_id) {
        this.DISP_ID = `/${disp_id}`
    },
    get priceFeeds() {
        return this.PRICE_FEEDS + this.DISP_ID
    }
}

const APIGetCall = async url => {
    const res = await axios.get(url);
    console.log('axioooooos---', res);
    return res?.data;
}

export const getCompanies = async () => {
    return await APIGetCall(URLS.COMPANIES);
}

export const getPriceFeeds = async(disp_id) => {
    URLS.dispId = disp_id;
    return await APIGetCall(URLS.priceFeeds);
}