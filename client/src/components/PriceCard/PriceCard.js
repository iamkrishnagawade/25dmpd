import './PriceCard.scss';
import QtyProgressBar from '../ProgressBar/QtyProgressBar';
import { getPriceFeeds } from '../../services/api';
import { useQuery } from 'react-query';
import { useState } from 'react';
import classNames from 'classnames';

const PriceCard = ({ dispId, header }) => {
    const [ priceList, setPriceList ] = useState([]),
    { isLoading, isError } = useQuery(`${dispId}_price_list`, () => getPriceFeeds(dispId), { onSuccess: setPriceList, refetchInterval: 2000 }),
    filterBySetype = (se_type) => priceList.filter(price => price.se_type === se_type),
    seBSE = filterBySetype('BSE')[0],
    seNSE = filterBySetype('NSE')[0]

    const ShowPrice = ({se_type, pricecurrent, pricechange, spying}) => {
        if(spying === 0) {
            return <span>{se_type} <span className="disabled">...</span></span>
        }

        return (
            <span>{se_type} <span className={
                classNames({
                    'success': pricechange > 0,
                    'danger': pricechange < 0
                })
            }>{ pricecurrent } ({ pricechange })</span></span>
        )
    },
    ShowDetails = ({ opn, priceprevclose, hp, lp, vol, spying }) => {
        if(spying === 0) {
            return <span></span>
        }

        return (
            <span>
                <span>OPN { opn } | CLOSE { priceprevclose }</span>
                <span>HP { hp } | LP { lp }</span>
                <span>VOL { vol }</span>
            </span>
        )
    }

    if(isLoading) return null;
    if(isError) return null;

    return (
        <div className="price-card shadow-sm">
            <div className="price-card__header">{ header }</div>
            <div className="price-card__price-details d-flex justify-content-between">
                <ShowDetails
                    opn={ seBSE?.opn.toFixed(2) }
                    priceprevclose={ seBSE?.priceprevclose.toFixed(2) }
                    hp={ seBSE?.hp.toFixed(2) }
                    lp={ seBSE?.lp.toFixed(2) }
                    vol={ seBSE?.vol }
                    spying={ seBSE?.spying }
                />
                <ShowDetails
                    opn={ seNSE?.opn.toFixed(2) }
                    priceprevclose={ seNSE?.priceprevclose.toFixed(2) }
                    hp={ seNSE?.hp.toFixed(2) }
                    lp={ seNSE?.lp.toFixed(2) }
                    vol={ seNSE?.vol }
                    spying={ seNSE?.spying }
                />
            </div>
            <div className="price-card__price-feeds d-flex justify-content-between">
                <ShowPrice 
                    se_type="BSE" 
                    pricecurrent={ seBSE?.pricecurrent.toFixed(2) } 
                    pricechange={ seBSE?.pricechange.toFixed(2) }  
                    spying={ seBSE?.spying }
                />
                <ShowPrice 
                    se_type="NSE" 
                    pricecurrent={ seNSE?.pricecurrent.toFixed(2) } 
                    pricechange={ seNSE?.pricechange.toFixed(2) }  
                    spying={ seNSE?.spying }
                />
            </div>
            { (seBSE?.spying !== 0) && <QtyProgressBar totBuyQty={ seBSE?.tot_buy_qty } totSellQty={ seBSE?.tot_sell_qty } />}
        </div>
    )
}

export default PriceCard;