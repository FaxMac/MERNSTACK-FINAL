import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Auth0Provider domain='dev-ay8u7k62z20gmoxe.us.auth0.com' clientId='hiyUy3TpbPbdqAbWO3YSzgi4viCb5nvE' redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </Router>
);
