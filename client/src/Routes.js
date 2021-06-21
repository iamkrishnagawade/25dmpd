import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import { IconBar } from './components';
import { LiveMarketPage } from './views';

const Routes = () => {
    const queryClient = new QueryClient();
    const routes = [
        {
            path: '/',
            component: () => <Redirect to="/live-market" />,
            exact: true
        },
        {
            path: '/live-market',
            component: () => <LiveMarketPage />
        }
    ];

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <IconBar />
                <div style={{ marginLeft: '95px' }}>
                    <Switch>
                        {
                            routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)
                        }
                    </Switch>
                </div>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    )
}

export default Routes;