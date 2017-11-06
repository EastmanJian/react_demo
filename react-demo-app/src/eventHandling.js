import React from 'react'

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        const divStyle = {
            border: '1px dashed gray',
            width: '20rem',
        };
        return (
            <div style={divStyle}>
                <p>This is a React class component named Toggle. The toggle button's onclick event handler is defined as
                    a method in the Toggle class. The component has state isToggleOn (true or false). The label of the
                    button is rendered according to isToggleOn.</p>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

export {Toggle}