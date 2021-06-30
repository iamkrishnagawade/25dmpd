import { ProgressBar } from 'react-bootstrap';

const QtyProgressBar = () => {
    return (
        <ProgressBar style={{
            marginTop: '15px',
            height: '0.3rem'
        }}>
            <ProgressBar variant="success" now={35} key={1} />
            <ProgressBar variant="danger" now={75} key={2} />
        </ProgressBar>
    )
}

export default QtyProgressBar;