import { Route, Switch } from 'react-router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const Routes = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={ queryClient }>
            <Switch>
                <Route path="/">
                    <h1>Home Page</h1>
                </Route>
            </Switch>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default Routes;