import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class APP extends React.Component {
    // constructor(props) {
    //     super(props) // super needs to be called here to make sure we are also calling the constructor function of React.Component since there is necesary functionality there that we need
    //     this.state = { latitude: null, errorMessage: '' }; //when initializing a variable that will be a number we can do it with null value
    // }
    state = { latitude: null, errorMessage: '' }; //^ equvalent to constructor syntax Babel will convert this line into the formal constructor declaration above
  
    componentDidMount() {
        //set the state after done inside DidMount lifecycle method
        //always call setState to update the state!!
        window.navigator.geolocation.getCurrentPosition(   //success callback, callback function will be executed when the API get the location succesfully 
            position => this.setState({ latitude: position.coords.latitude })
            //^ function(position) {this.setState({ latitude: position.coords.latitude })}.bind(this)
            , error => this.setState({ errorMessage: error.message })
        );
    }

    //avoinding conditional logic inide render method
    renderContent() {
        if (!this.state.latitude && this.state.errorMessage) {
            return (
                <div>
                    <h3>Hello there was an error </h3>
                    {this.state.errorMessage}
                </div>
            );
        }
        if (this.state.latitude && !this.state.errorMessage) {
            return (
                <div>
                    <SeasonDisplay latitude={this.state.latitude} />
                </div>
            );
        }
        return (
            <div>
                <Spinner message={"Please accept location request"} />
            </div>
        );
    }

    //this render function is a requirement from React!
    render() {  
        const borderRed = { //just an example - CSS should go in a separate file
            border: '10px solid red'
        };
              
        return (//this way we make sure that no matter which jsx is returned from the helper function it will be enclosed by the red border
            <div style={borderRed}>
                {this.renderContent()}
            </div>
        );
    }

}

ReactDOM.render(<APP />, document.querySelector('#root'));