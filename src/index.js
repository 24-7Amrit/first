import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
//import '../src/comp_5_feb/Fetching_data';
//import { Fetchingdata } from '../src/comp_5_feb/Fetchingdata';
//import {Extra} from "../src/component/sort_27_1_25/Extra";
//import { Comp_1 } from './comp3/Comp_1';
import * as bootstrap from 'bootstrap';
import {CookiesProvider} from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
    <App />
    {/* <Fetchingdata/> */}
    {/* <Extra/> */}
    {/* <Comp_1/> */}
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
