import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import Home from 'views/Home';
import Products from 'views/Products';

const ProductRoutes = ({ products }) => {
  const blasters = products.filter(p => p.type === 'blaster');
  const accessories = products.filter(p => p.type === 'accessory');

  return (
    <Fragment>
      { products.map(p => (
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
    </Fragment>
  );
};

ProductRoutes.propTypes = {
  products: PropTypes.array,
};

const mapStateToProps = (state) => {
  const { products } = state;
  const { listing } = products;
  return {
    products: listing,
  };
};

export default connect(
  mapStateToProps,
)(ProductRoutes);
