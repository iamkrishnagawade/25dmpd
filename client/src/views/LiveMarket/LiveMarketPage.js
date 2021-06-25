import { CompaniesList } from '../../components';
import { Switch } from 'react-router-dom';
import RouteWithSubRoutes from '../../RouteWithSubRoutes';

const LiveMarketPage = ({ routes }) => {
    return (
        <div className="live-market">
            <CompaniesList />
            <Switch>
                {
                    routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)
                }
            </Switch>
        </div>
    )
}

export default LiveMarketPage;