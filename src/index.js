import React from 'react';
import ReactDOM from 'react-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import App from './App';
import {API_WS_ROOT} from './constants';
// This readys a consumer that will connect against /cable on your backend server by default.


ReactDOM.render(
    <ActionCableProvider url={API_WS_ROOT}>
         <App />
    </ActionCableProvider>,
    document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

