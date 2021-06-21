import { ProgressBar } from 'react-bootstrap';

const QtyProgressBar = ({qty_buy, qty_sell}) => {
    const tot_qty = qty_buy + qty_sell;
    const per_buy_qty = Math.round((qty_buy / tot_qty) * 100);
    const per_sell_qty = Math.round((qty_sell / tot_qty) * 100);

    return (
        <div style={{ marginTop: '10px' }}>
            <ProgressBar style={{ height: '5px' }}>
                <ProgressBar variant="success" now={per_buy_qty} key={1} />
                <ProgressBar variant="danger" now={per_sell_qty} key={2} />
            </ProgressBar>
        </div>
    )
}

export default QtyProgressBar;