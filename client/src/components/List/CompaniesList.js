import CompanyCard from '../Card/CompanyCard';
import './CompaniesList.scss';
import { getCompanies } from '../../services/api';
import { useQuery } from 'react-query';
import { useState } from 'react';

const CompaniesList = () => {
    const [ companyList, setCompanyList ] = useState([]),
    {
        isLoading,
        isError
    } = useQuery('companyList', () => getCompanies(), { onSuccess: setCompanyList });

    if(isLoading) return null;
    if(isError) return null;

    return (
        <div className="live-market__compnaies-list">
            {
                companyList.map( company => <CompanyCard key={company.disp_id} { ...company } />)
            }
        </div>
    )
}

export default CompaniesList;