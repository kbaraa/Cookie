import { Route, Switch, Redirect } from 'react-router-dom';

import AllCookies from './pages/AllCookies';
import CookieDetail from './pages/CookieDetail';
import NewCookie from './pages/NewCookie';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/Cookies' />
        </Route>
        <Route path='/Cookies' exact>
          <AllCookies />
        </Route>
        <Route path='/Cookies/:CookieId'>
          <CookieDetail />
        </Route>
        <Route path='/new-Cookie'>
          <NewCookie />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
