import { useParams } from 'react-router-dom';
import { getCompanyDetails } from '../../services/api';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Button } from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './LiveCompanyDetailsPage.scss';

const LiveCompanyDetailsPage = () => {
    let { id } = useParams();
    const [ details, setDetails ] = useState([]),
    {
        isLoading,
        isError
    } = useQuery(`compnay_details_${id}`, () => getCompanyDetails(id), { onSuccess: setDetails });

    if(isLoading) return null;
    if(isError) return null;
    
    return (
        <div className="live-market-details">
            <div className="header d-flex justify-content-between">
                <h1>{ details.sc_fullnm } <small className="text-muted">{ details.company }</small></h1>
                <Button variant="success"><FontAwesomeIcon icon={ faCheck } /> Active</Button>
            </div>
        </div>
    )
}

export default LiveCompanyDetailsPage;