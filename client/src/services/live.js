import axios from 'axios';

const URLS = { 
    COMPANIES: '/api/v1/companies',
    PRICES: '/api/v1/prices'
}

const APIGetCall = async url => {
    const res = await axios.get(url);
    console.log('axioooooos---', res);
    return res?.data;
}

export const getCompanies = async () => {
    return await APIGetCall(URLS.COMPANIES);
}

export const getPrices = async () => {
    return await APIGetCall(URLS.PRICES);
}