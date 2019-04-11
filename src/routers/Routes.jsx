import React from 'react';
import { Switch, Route } from 'react-router';
import Home from 'views/Home';
import Checkout from 'views/Checkout';
import OrderConfirmation from 'views/OrderConfirmation';
import Template from 'components/Template';
import Initializer from './Initializer';
import ProductRoutes from './ProductRoutes';

const Routes = () => {
  return (
    <Template>
      <Initializer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" render={props => <Checkout {...props} section={0} />} />
        <Route path="/checkout/shipping" render={props => <Checkout {...props} section={1} />} />
        <Route path="/checkout/payment" render={props => <Checkout {...props} section={2} />} />
        <Route path="/order/:id/confirmation" component={OrderConfirmation} />
        <ProductRoutes />
      </Switch>
    </Template>
  );
};

export default Routes;
