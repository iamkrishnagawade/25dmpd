import classNames from 'classnames';

const StatCompanyPrice = ({ se_type, pricecurrent, pricechange }) => {
    return (
        <span>{ se_type } <span className={
            classNames({
                'success': pricechange >= 0,
                'danger': pricechange <= 0
            })
        }>{pricecurrent.toFixed(2)} ({pricechange.toFixed(2)})</span></span>
    )
}

export default StatCompanyPrice;