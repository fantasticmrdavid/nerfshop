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
        <Route exact path="/checkout" component={Checkout} />
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
