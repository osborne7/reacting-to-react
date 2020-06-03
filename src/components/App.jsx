import React, { Component } from 'react';


//functional App component:
// const App = (props) => {
// return <h1>Hi, I'm {props.name}!</h1>
// }

//class-based App component:

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "James"
        };
    }

    handleInputChange = (text) => {
        this.setState({text});
    }
    render() {
    // return <h1>Hi, I'm {this.props.name} and this is {this.state.text}!</h1>
    return (
        <div>
            <input value={this.state.text}
            onChange={ (event) => { this.handleInputChange(event.target.value)}} />
        </div>
    )

    }
}

export default App;