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
import EssayForm from './formTextArea'
import FlavorForm from './formSelect'
import Reservation from './formMultipleInput'
import PreventInput from './formPreventInput'
import Calculator from './liftStateUp'
import SignUpDialog from './composition'
import ProductTable from './thinkingInReact'

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
            <Route path="/react_demo/form_textarea" component={EssayForm}/>
            <Route path="/react_demo/form_select" component={FlavorForm}/>
            <Route path="/react_demo/form_multi_input" component={Reservation}/>
            <Route path="/react_demo/form_prevent_input" component={PreventInput}/>
            <Route path="/react_demo/lift_state_up" component={Calculator}/>
            <Route path="/react_demo/composition" component={SignUpDialog}/>
            <Route path="/react_demo/thinking_in_react" component={ProductTable}/>
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
            <li><Link to="/react_demo/form_textarea">Controlled Component - a form with textarea</Link></li>
            <li><Link to="/react_demo/form_select">Controlled Component - a form with select dropdown</Link></li>
            <li><Link to="/react_demo/form_multi_input">Controlled Component - a form with multiple input</Link></li>
            <li><Link to="/react_demo/form_prevent_input">Prevent user changing the data in a form input, and release</Link></li>
            <li><Link to="/react_demo/lift_state_up">A temperature calculator demonstrates the Lifting State Up design rule</Link></li>
            <li><Link to="/react_demo/composition">Using composition instead of inheritance, a Dialog and a SignUpDialog</Link></li>
            <li><Link to="/react_demo/thinking_in_react">A Filterable Product Table App demonstrate the React Design Process</Link></li>
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