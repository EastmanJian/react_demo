import React from 'react'
import InitApp from './InitApp'
import RouterBasic from './RouterBasic'
import JsxJsExpression from './jsx_js_expression'

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
            <Route path="/react_demo/jsx_js_expression" component={JsxJsExpression}/>
        </div>
    </Router>
)

const Home = () => (
    <div>
        <h2>Demo Home</h2>
        <ul>
            <li><Link to="/react_demo/">Demo Home</Link></li>
            <li><Link to="/react_demo/init_app">Init App</Link></li>
            <li><Link to="/react_demo/router_basic">Basic Router</Link></li>
            <li><Link to="/react_demo/jsx_js_expression">JSX JavaScript Expression in curly braces</Link></li>
        </ul>
    </div>
)


export default DemoRouter