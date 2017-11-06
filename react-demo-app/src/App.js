import React from 'react'
import InitApp from './InitApp'
import RouterBasic from './RouterBasic'
import JsxJsExpression from './jsxJsExpression'
import {WelcomeFunction, WelcomeClass} from './componentFuntionOrClass'
import Clock from './clock'
import {Toggle} from './eventHandling'
import LoginControl from './conditionalRendering'
import WarningToggle from './preventRendering'
import ListWithKey from './listAndKey'
import NameForm from './formTextInput'

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
            <Route path="/react_demo/toggle" component={Toggle}/>
            <Route path="/react_demo/conditional_rendering" component={LoginControl}/>
            <Route path="/react_demo/prevent_rendering" component={WarningToggle}/>
            <Route path="/react_demo/list_key" component={ListWithKey}/>
            <Route path="/react_demo/form_input" component={NameForm}/>
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
            <li><Link to="/react_demo/clock">A Clock component demonstrates state, lifecycle hook</Link></li>
            <li><Link to="/react_demo/toggle">A button toggle demonstrates Event Handling</Link></li>
            <li><Link to="/react_demo/conditional_rendering">Login Logout control demonstrates Conditional Rendering</Link></li>
            <li><Link to="/react_demo/prevent_rendering">Prevent component rendering by returning null</Link></li>
            <li><Link to="/react_demo/list_key">List, Key, map()</Link></li>
            <li><Link to="/react_demo/form_input">Controlled Component - a form with text input</Link></li>
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