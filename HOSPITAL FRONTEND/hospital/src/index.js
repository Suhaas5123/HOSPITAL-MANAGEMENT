import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./index.css"
import CreateReport from './Doctor/createreport';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App/>
{/* <CreateReport/> */}
  </React.StrictMode>
);

reportWebVitals();
