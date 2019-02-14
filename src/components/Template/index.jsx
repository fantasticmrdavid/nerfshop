import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import ProductDrawerContainer from 'containers/ProductDrawerContainer';
import * as styles from './styles';

const { NODE_ENV } = process.env;

const Template = ({ children }) => {
  const {
    Container,
    Content,
  } = styles;

  if (NODE_ENV === 'production') return 'Coming soon...';

  return (
    <Container>
      <Nav />
      <Content>
        {children}
      </Content>
      <Footer />
      <ProductDrawerContainer />
    </Container>
  );
};

Template.propTypes = {
  children: PropTypes.node,
};

export default Template;
