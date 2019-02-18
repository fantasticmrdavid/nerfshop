import React from 'react';
import { render } from 'react-dom';
import { store, history } from 'store';
import Client from 'routers/Client';

render(
  <Client store={store} history={history} />,
  document.getElementById('app'),
);
