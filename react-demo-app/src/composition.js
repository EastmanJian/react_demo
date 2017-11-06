import React from 'react'

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }

    render() {
        return (
            <div>
                <p>The Dialog component don’t know its children ahead of time until SignUpDialog pass the title,
                    message, and the children props to it. <br/>
                    The SignUpDialog is "special cases" of Dialog. React achieves this by composition, where a more
                    "specific" component renders a more “generic” one and configures it with props.</p>
                <Dialog title="Mars Exploration Program"
                        message="How should we refer to you?">
                    <input value={this.state.login}
                           onChange={this.handleChange}/>

                    <button onClick={this.handleSignUp}>
                        Sign Me Up!
                    </button>
                </Dialog>
            </div>
        );
    }

    handleChange(e) {
        this.setState({login: e.target.value});
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }
}

export default SignUpDialog