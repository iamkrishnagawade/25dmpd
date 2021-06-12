module.exports = {
    services: {
        spy: {
            timeout: 2000,
            companyList: [
                { dispId: 'RI', seType: 'BSE' },
                { dispId: 'TCS', seType: 'BSE' },
                { dispId: 'MM', seType: 'BSE' },
                { dispId: 'SBI', seType: 'BSE' },
                { dispId: 'RI', seType: 'NSE' },
                { dispId: 'TCS', seType: 'NSE' },
                { dispId: 'MM', seType: 'NSE' },
                { dispId: 'SBI', seType: 'NSE' }
            ],
            indexList: [
                { name: 'NIFTY 50', indexId: 9 },
                { name: 'SENSEX', indexId: 4 }
            ]
        }
    }
}