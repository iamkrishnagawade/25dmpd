import { ProgressBar } from 'react-bootstrap';

const QtyProgressBar = ({ totBuyQty, totSellQty }) => {
    const totQty = totBuyQty + totSellQty,
    perBuyQty = Math.round(totBuyQty / totQty * 100),
    perSellQty = Math.round(totSellQty / totQty * 100);
    
    return (
        <ProgressBar style={{
            marginTop: '15px',
            height: '0.3rem'
        }}>
            <ProgressBar variant="success" now={perBuyQty} key={1} />
            <ProgressBar variant="danger" now={perSellQty} key={2} />
        </ProgressBar>
    )
}

export default QtyProgressBar;