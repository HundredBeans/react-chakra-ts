import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppLayout } from '../layouts';
import routes from './routes';

export const AppRouter: React.FC = () => {
  return (
    <AppLayout>
      <Router>
        <Switch>
          {routes.map((item, index) => (
            <Route key={index} path={item.path} exact={item.exact}>
              {item.children}
            </Route>
          ))}
        </Switch>
      </Router>
    </AppLayout>
  );
};
