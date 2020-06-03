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
            text: "James",
            hasLoaded: false
        };
    }

    handleInputChange = (text) => {
        this.setState({text});
    }

    handleClick = () => {
        this.setState({hasLoaded: !this.state.hasLoaded})
    }

    componentDidMount = () => {
        this.setState({hasLoaded: true})
    }
    render() {
    // return <h1>Hi, I'm {this.props.name} and this is {this.state.text}!</h1>
    if (this.state.hasLoaded === true) {
    return (
        <React.Fragment>
            <input value={this.state.text}
                onChange={(event) => { this.handleInputChange(event.target.value)}} />
            <button value={this.state.hasLoaded}
                onClick={this.handleClick}
                >Refresh</button>
        </React.Fragment>        
    )
} else {
    return (
        <React.Fragment>
        <h1> Loading...</h1>
           <button 
           value={this.state.hasLoaded}
           onClick={this.handleClick}>Click to load</button>
          
           </React.Fragment>
    )
}
    }
}

export default App;