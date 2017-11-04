import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DemoRouter from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DemoRouter />, document.getElementById('root'));
registerServiceWorker();
