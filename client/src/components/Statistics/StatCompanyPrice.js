import classNames from 'classnames';
import './StatCompanyPrice.scss';

const StatCompanyPrice = ({ se_type, spying, pricecurrent, pricechange }) => {     
    return (
        <span className={ classNames({ 'disabled': spying === 0 }) }>{ se_type } <span className={
            classNames({
                'success': pricechange > 0 && spying === 1,
                'danger': pricechange < 0 && spying === 1
            })
        }>{
            (spying === 0) ? 0.00 : pricecurrent.toFixed(2)
        } ({
            (spying === 0) ? 0.00 : pricechange.toFixed(2)
        })</span></span>
    )
}

export default StatCompanyPrice;