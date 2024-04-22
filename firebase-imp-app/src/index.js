import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Firebaseprovider} from './context/Firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Firebaseprovider>
      <App />
    </Firebaseprovider>
  </React.StrictMode>
);

