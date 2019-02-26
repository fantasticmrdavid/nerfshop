import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const Collapsible = (props) => {
  const { active } = props;
  const {
    Container,
  } = styles;

  return <Container active={active} {...props} />;
};

Collapsible.propTypes = {
  active: PropTypes.bool,
};

export default Collapsible;
