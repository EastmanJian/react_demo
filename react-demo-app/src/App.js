import React from 'react'
import InitApp from './InitApp'
import RouterBasic from './RouterBasic'
import JsxJsExpression from './jsxJsExpression'
import {WelcomeFunction, WelcomeClass} from './componentFuntionOrClass'
import Clock from './clock'

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
            <Route path="/react_demo/component_function" component={WelFunction}/>
            <Route path="/react_demo/component_class" component={WelClass}/>
            <Route path="/react_demo/clock" component={Clock}/>
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
            <li><Link to="/react_demo/component_function">Component Function</Link></li>
            <li><Link to="/react_demo/component_class">Component Class</Link></li>
            <li><Link to="/react_demo/clock">A Clock component demonstrate state, lifecycle hook</Link></li>
        </ul>
    </div>
)

const WelFunction = () => (
    <WelcomeFunction name="I'm rendered by a function component"/>
)

const WelClass = () => (
    <WelcomeClass name="I'm rendered by a class component"/>
)


export default DemoRouter