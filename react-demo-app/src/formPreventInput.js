import React from 'react'

function ReadOnlyInput(props) {
    return <input type="text" value="Cannot input here"/>
}

function EditableInput(props) {
    return <input type="text" value={null}/>
}


class PreventInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'read only'};
        this.inputElement = <ReadOnlyInput />
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    handleSubmit(event) {
        alert('A name was submitted:');
        event.preventDefault();
    }

    handleClick() {
        this.inputElement = <EditableInput />
        this.setState({value: 'editable'}); //setState just for re-render
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>This component prevents user input by setting the value. Set null to the value to allow user
                        input.</p>
                    <label>
                        Name:
                        {this.inputElement}
                    </label>
                </form>
                <button onClick={this.handleClick}>Release</button>
            </div>
        );
    }
}

export default PreventInput