import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DemoRouter from './App';
import registerServiceWorker from './registerServiceWorker';


const element = <div><hr/><h5>React JS demos, by Eastman</h5></div>;


function tick() {
    const element = (
        <div>
            <h3>Hello, there</h3>
            <h4>It is {new Date().toLocaleTimeString()} now.</h4>
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
