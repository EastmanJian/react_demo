import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>A Clock component demonstrate component state, lifecycle hook.</h2>
                <h1>It is {this.state.date.toLocaleTimeString()}.</h1>
            </div>
        );
    }
}

export default Clock