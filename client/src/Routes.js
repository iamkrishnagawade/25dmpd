import { Route, Switch } from 'react-router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { HomePage } from './views';
import { TopNav } from './components';

const Routes = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={ queryClient }>
            <TopNav />
            <div className="wrapper">
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                </Switch>
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default Routes;