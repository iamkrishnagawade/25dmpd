import { Redirect, Route, Switch } from 'react-router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import {  LivePage } from './views';
import { 
    Wrapper, 
    SideNav, 
    Content 
} from './components'

const Routes = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={ queryClient }>
            <Wrapper>
                <SideNav />
                <Content>
                    <Switch>
                        <Route path="/" exact>
                            <Redirect to="/live" />
                        </Route>
                        <Route path="/live">
                            <LivePage />
                        </Route>
                    </Switch>
                </Content>
            </Wrapper>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default Routes;