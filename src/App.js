import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Routes from './routes';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}


const MapRoutes = () =>(
  <Layout>
    <Switch>
      {Routes.map(({ component, path }, k) => <Route key={k} component={component} path={path} exact />)}
    </Switch>
  </Layout>
);

const App =  () => <Router><Route component={MapRoutes} path="/" /></Router>

export default App;
