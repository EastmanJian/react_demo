import React from 'react'
import InitApp from './InitApp'
import RouterBasic from './RouterBasic'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const DemoRouter = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/react_demo" component={Home}/>
            <Route path="/react_demo/init_app" component={InitApp}/>
            <Route path="/react_demo/router_basic" component={RouterBasic}/>
        </div>
    </Router>
)

const Home = () => (
    <div>
        <h2>Demo Home</h2>
        <ul>
            <li><Link to="./">Demo Home</Link></li>
            <li><Link to="./init_app">Init App</Link></li>
            <li><Link to="./router_basic">Basic Router</Link></li>
        </ul>
    </div>
)


export default DemoRouter