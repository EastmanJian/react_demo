import React from 'react'

function WelcomeFunction(props) {
    return <h1>Hello, {props.name}</h1>;
}

class WelcomeClass extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    };
}

export {WelcomeFunction, WelcomeClass};

