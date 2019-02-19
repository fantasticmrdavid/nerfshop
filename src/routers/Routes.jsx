import React from 'react';
import { Switch, Route } from 'react-router';
import Home from 'views/Home';
import Checkout from 'views/Checkout';
import Template from 'components/Template';

const Routes = () => {
  return (
    <Template>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </Template>
  );
};

export default Routes;
