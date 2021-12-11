import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllQuotes from './components/pages/AllQuotes';
import NewQuotes from './components/pages/NewQuotes';
import QuoteDetail from './components/pages/QuoteDetail';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuotes />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
