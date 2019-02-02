import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    componentDidMount() {
        // Automatically update the state every 3 seconds.
        setInterval(this.updateState, 3000);
        // Update the state on mouse-down.
        // --
        // NOTE: We are implementing our own event binding here - not using the
        // React Element props to manage the event handler.
        document.getElementById('span')
            .addEventListener("mousedown", this.updateState)
            ;
    }

    tick() {
        this.setState({
            date: this.state.date + 100000
        });
    }

    updateState = (event) => {
        console.log("= = = = = = = = = = = =");
        console.log("EVENT:", (event ? event.type : "timer"));
        console.log("Pre-setState:", this.state.counter);
        this.setState({
            counter: (this.state.counter + 1)
        });
        console.log("Mid-setState:", this.state.counter);
        this.setState({
            counter: (this.state.counter + 1)
        });
        console.log("Post-setState:", this.state.counter);
    }
    render() {
        return (
            <div>
                <span id="span" onClick={this.updateState} className="button">"Counter at " + {this.state.counter}</span>
                <h1>Hello, world!</h1>
            </div >
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);