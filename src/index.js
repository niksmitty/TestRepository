import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';

import routes from './routes.jsx';
import './styles/bootstrap.css';

ReactDOM.render(
    <Router history={hashHistory} routes={routes} />,
  document.getElementById('root')
);
