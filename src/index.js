import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./i18n"; // this must register i18n config
import i18n from './i18n'; // <-- import the actual instance
import { I18nextProvider } from 'react-i18next';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>  {/* ✅ fixed */}
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
