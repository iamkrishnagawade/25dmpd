import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Switch } from 'react-router-dom';
import RouteWithSubRoutes from './RouteWithSubRoutes';

const Routes = () => {
    const queryClient = new QueryClient();
    const routes = [
        {
            path: '/',
            component: () => <h1>Home</h1>
        }
    ];

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Switch>
                    {
                        routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} /> )}
                </Switch>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    )
}

export default Routes;