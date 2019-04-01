import React from 'react';
import { connect } from 'react-redux';
import NavDrawer from 'components/NavDrawer';
import { hideNavDrawer } from 'actions/nav';

const NavDrawerContainer = (props) => {
  return <NavDrawer {...props} />;
};

const mapStateToProps = (state) => {
  const { cart, nav } = state;
  const { drawerActive } = nav;
  return {
    active: drawerActive,
    cartCount: cart.contents.length > 0 ? cart.contents.reduce((a, p) => { return a + p.qty; }, 0) : 0,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeDrawer: () => {
      dispatch(hideNavDrawer());
    },
    onOutsideClick: () => {
      dispatch(hideNavDrawer());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavDrawerContainer);
