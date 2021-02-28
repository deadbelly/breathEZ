import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

const router = <BrowserRouter> <App /> </BrowserRouter>;

ReactDOM.render(router, document.getElementById('root'));

// serviceWorker.register();
