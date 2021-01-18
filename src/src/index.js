import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import App from './App';
import actionCable from 'actioncable';

const CableApp = {}

CableApp.cable = actionCable.createConsumer('ws://localhost:3003/cable')
// This readys a consumer that will connect against /cable on your backend server by default.


ReactDOM.render(
    <Router>
            <App CableApp={CableApp} />
    </Router>,
    document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

