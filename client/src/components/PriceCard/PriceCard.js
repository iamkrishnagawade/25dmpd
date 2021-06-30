import './PriceCard.scss';
import QtyProgressBar from '../ProgressBar/QtyProgressBar';

const PriceCard = () => {
    return (
        <div className="price-card shadow-sm">
            <div className="price-card__header">Tata Consultancy Services</div>
            <div className="price-card__price-feeds d-flex justify-content-between">
                <span>NSE <span>2104.50 (16.70)</span></span>
                <span>BSE <span>2104.50 (16.70)</span></span>
            </div>
            <QtyProgressBar />
        </div>
    )
}

export default PriceCard;