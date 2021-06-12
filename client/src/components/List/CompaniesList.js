import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './CompaniesList.scss';
import {
    Link
} from 'react-router-dom';
import { useQuery } from 'react-query';
import {
    getCompanies,
    getPrices
} from '../../services/live';
import { useState } from 'react';
import classNames from 'classnames';

const CompaniesList = () => {
    const [ companiesList, setCompaniesList ] = useState([]),
    [ pricesList, setPricesList ] = useState([]),
    { 
        status: statusCompaniesList
    } = useQuery('companies', getCompanies, { onSuccess: setCompaniesList }),
    {
        status: statusPrices
    } = useQuery('prices', getPrices, { onSuccess: setPricesList, refetchInterval: 2000 }),
    filterPrice = (disp_id, se_type) => pricesList.filter(price => price.disp_id === disp_id && price.se_type === se_type);

    if(statusCompaniesList === 'loading') {
        return (
            <div className="companies-list">
                <span className="loading">Fetching Data...</span>
            </div>
        );
    }

    if(statusCompaniesList === 'error') {
        return (
            <div className="companies-list">
                <span className="error">Some error occurred while retrieving Companies..</span>
            </div>
        )
    }

    return (
        <div className="companies-list">
            {
                companiesList.map((company, i) => {
                    const nse_price = filterPrice(company.disp_id, 'NSE')[0],
                    bse_price = filterPrice(company.disp_id, 'BSE')[0],
                    setArrow = (pricechange) => {
                        if (pricechange >= 0) {
                            return <FontAwesomeIcon icon={ faArrowUp } />
                        } else {
                            return <FontAwesomeIcon icon={ faArrowDown } />
                        }
                    } 

                    return (
                        <Link key={i} to={`/live/${company.disp_id}`}>
                            <span className="title">{ company.company }</span>
                            <div className="companies-list__details d-flex justify-content-between">
                                <span>NSE <span className={ 
                                    classNames({
                                        'success': nse_price?.pricechange >= 0,
                                        'danger': nse_price?.pricechange <= 0
                                    })
                                    }>{ nse_price?.pricecurrent.toFixed(2) } { setArrow(nse_price?.pricechange) }</span></span>
                                <span>BSE <span className={
                                    classNames({
                                        'success': bse_price?.pricechange >= 0,
                                        'danger': bse_price?.pricechange <= 0
                                    })
                                }>{ bse_price?.pricecurrent.toFixed(2) } { setArrow(bse_price?.pricechange) }</span></span>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default CompaniesList;