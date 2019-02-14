import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const SideDrawer = (props) => {
  const { active, children } = props;
  const {
    Drawer,
  } = styles;

  return (
    <Drawer active={active}>
      { children }
    </Drawer>
  );
};

SideDrawer.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
};

export default SideDrawer;
