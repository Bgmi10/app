import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      }).catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  }
  
root.render( 
    <Auth0Provider  
      domain="dev-mmj882fndwuek5sn.us.auth0.com"
      clientId="eUzF60BiynXVtHCXpAqI1iLtJShbzvST"
      redirectUri={window.location.origin}>

      <App />

    </Auth0Provider>

);


reportWebVitals();
