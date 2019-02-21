import React from 'react';
import Helmet from 'react-helmet';
import ProductListContainer from 'containers/ProductListContainer';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>RivalShop - Your Aussie source for Nerf Rival gear</title>
      </Helmet>
      <ProductListContainer />
    </div>
  );
};

export default Home;
