import { Redirect, Route, Switch } from 'react-router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { HomePage, Wrapper, LivePage } from './views';
import { SideNav } from './components'

const Routes = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={ queryClient }>
            <Wrapper>
                <SideNav />
                <Switch>
                    <Redirect from="/" to="/live" />
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Routes path="/live">
                        <LivePage />
                    </Routes>
                </Switch>
            </Wrapper>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default Routes;