import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DemoRouter from './App';
import registerServiceWorker from './registerServiceWorker';


const element = <h5>This is an index page of React JS demos</h5>;


function tick() {
    const element = (
        <div>
            <h3>Hello, world!</h3>
            <h4>It is {new Date().toLocaleTimeString()}.</h4>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('clock')
    );
}

setInterval(tick, 1000);

ReactDOM.render(<DemoRouter />, document.getElementById('root'));
ReactDOM.render(element, document.getElementById('desc'));

registerServiceWorker();
