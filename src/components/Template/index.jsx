import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Footer from 'components/Footer';
import NavContainer from 'containers/NavContainer';
import NavDrawerContainer from 'containers/NavDrawerContainer';
import ProductDrawerContainer from 'containers/ProductDrawerContainer';
import GlobalStyles from 'styles/global';
import * as styles from './styles';

const { NODE_ENV } = process.env;

const Template = ({ children }) => {
  const {
    Container,
    Content,
  } = styles;

  if (NODE_ENV === 'production') return 'Coming soon...';

  return (
    <Fragment>
      <GlobalStyles />
      <Container>
        <NavContainer />
        <Content>
          {children}
        </Content>
        <Footer />
        <NavDrawerContainer />
        <ProductDrawerContainer />
      </Container>
    </Fragment>
  );
};

Template.propTypes = {
  children: PropTypes.node,
};

export default Template;
