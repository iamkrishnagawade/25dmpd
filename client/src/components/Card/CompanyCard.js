import { NavLink } from "react-router-dom";
import './CompanyCard.scss';
import StatCompanyPrice from "../Statistics/StatCompanyPrice";
import { getPriceFeeds } from '../../services/api';
import { useQuery } from 'react-query';
import { useState } from 'react';
import QtyProgressBar from '../ProgressBar/QtyProgressBar';

const CompanyCard = ({ disp_id, company }) => {
    const [ prices, setPrices ] = useState([]),
    {
        isLoading,
        isError
    } = useQuery(`prices_${disp_id}`, () => getPriceFeeds(disp_id), { onSuccess: setPrices, refetchInterval: 2000 }),
    filterSeType = (se_type) => prices.filter(price => price.se_type === se_type);

    if(isLoading) return null;
    if(isError) return null;

    return (
        <NavLink to={`/live-market/${disp_id}`}>
            <span className="compnaies-list__header">{ company }</span>
            <div className="compnaies-list__body d-flex justify-content-between">
                {
                    prices.map((price, i) => <StatCompanyPrice key={i} se_type={price.se_type} spying={price.spying} pricecurrent={price.pricecurrent} pricechange={price.pricechange} />)
                }
            </div>
            {
                (filterSeType('BSE')[0].spying !== 0) && <QtyProgressBar qty_buy={filterSeType('BSE')[0].tot_buy_qty} qty_sell={filterSeType('BSE')[0].tot_sell_qty} />
            }
        </NavLink>
    )
}

export default CompanyCard;