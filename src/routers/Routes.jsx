import React from 'react';
import { Switch, Route } from 'react-router';
import Home from 'views/Home';
import Checkout from 'views/Checkout';
import Template from 'components/Template';
import staticProducts from 'data/products';

const Routes = () => {
  return (
    <Template>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/checkout" render={props => <Checkout {...props} section={0} />} />
        <Route path="/checkout/shipping" render={props => <Checkout {...props} section={1} />} />
        <Route path="/checkout/payment" render={props => <Checkout {...props} section={2} />} />
        <Route path="/checkout/confirmation" render={props => <Checkout {...props} section={3} />} />
        { staticProducts.map(p => (
          <Route
            key={`route_${p.id}`}
            path={`/${p.slug}`}
            render={props => <Home {...props} product={p} />}
          />
        ))}
      </Switch>
    </Template>
  );
};

export default Routes;
