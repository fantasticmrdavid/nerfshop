import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as styles from './styles';

const Cta = (props) => {
  const { onClick, to } = props;
  const {
    Button,
  } = styles;

  const innerComp = <Button {...props} />;

  return !!to ? <Link onClick={onClick} href={to} to={to}>{innerComp}</Link> : innerComp;
};

Cta.propTypes = {
  onClick: PropTypes.func,
  to: PropTypes.string,
};

export default Cta;
