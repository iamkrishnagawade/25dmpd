import { PriceCard } from '../../components';
import { getCompanies } from '../../services/api';
import { useQuery } from 'react-query';
import { useState } from 'react';

const HomePage = () => {
    const [ companyList, setCompanyList ] = useState([]),
    { isLoading, isError } = useQuery('se_companies', () => getCompanies(), { onSuccess: setCompanyList });

    if(isLoading) return null;
    if(isError) return null;

    return (
        <div className="home-page">
            {
                companyList.map((company, i) => <PriceCard 
                    key={ company.disp_id } 
                    dispId={ company.disp_id } 
                    header={ company?.company } 
                    />)
            }
        </div>
    )
}

export default HomePage;