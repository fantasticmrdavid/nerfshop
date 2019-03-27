import React from 'react';
import { Switch, Route } from 'react-router';
import Home from 'views/Home';
import Checkout from 'views/Checkout';
import OrderConfirmation from 'views/OrderConfirmation';
import Products from 'views/Products';
import Template from 'components/Template';
import staticProducts from 'data/products';

const blasters = staticProducts.filter(p => p.type === 'blaster');
const accessories = staticProducts.filter(p => p.type === 'accessory');

const Routes = () => {
  return (
    <Template>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" render={props => <Checkout {...props} section={0} />} />
        <Route path="/checkout/shipping" render={props => <Checkout {...props} section={1} />} />
        <Route path="/checkout/payment" render={props => <Checkout {...props} section={2} />} />
        <Route path="/order/:id/confirmation" component={OrderConfirmation} />
        { staticProducts.map(p => (
          <Route
            key={`route_${p.id}`}
            path={`/${p.slug}`}
            render={props => <Home {...props} product={p} />}
          />
        ))}
        <Route exact path="/blasters" render={props => <Products {...props} category="blaster" />} />
        { blasters.map(p => (
          <Route
            key={`route_blaster_${p.id}`}
            path={`/blasters/${p.slug}`}
            render={props => <Products {...props} category="blaster" product={p} />}
          />
        ))}
        <Route exact path="/accessories" render={props => <Products {...props} category="accessory" />} />
        { accessories.map(p => (
          <Route
            key={`route_accessory_${p.id}`}
            path={`/accessories/${p.slug}`}
            render={props => <Products {...props} category="accessory" product={p} />}
          />
        ))}
      </Switch>
    </Template>
  );
};

export default Routes;
