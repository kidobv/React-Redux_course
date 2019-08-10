import React from 'react'
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {

    componentDidMount() {//we only want to load the google auth library when this component is rendered
        //when we try to load the client library from gapi this operation will take some time to download additional JS code from google's servers
        //so we need to get a callback for when that operation is complete. We can do this by adding a callback as a second argument
        //load only allows us to get a notification" about the call being done with a callback function, however
        //init() returns a promise so we don't need to use a callback function we can use the method .then() from the promise object
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '825951960933-4q7cbkqjauk6sjelhrrcg3ad6pv9qpif.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                //here the gapi process is done and we can save a reference to the Auth object in the component class using this
                this.authInstance = window.gapi.auth2.getAuthInstance();
                //this.setState({ isSignedIn: this.authInstance.isSignedIn.get() });//we can look at gapi documentation so look at more methods
                this.onAuthChange(this.authInstance.isSignedIn.get());//we can look at gapi documentation so look at more methods
                this.authInstance.isSignedIn.listen(this.onAuthChange);//callback function reference
            });
        });
    }
    //since this is a callback function we need to declare it as an arrow function so that it's context is bound to the component
    onAuthChange = (isSignedIn) => { // isSignedIn comes from props    
        if(isSignedIn){
        this.props.signIn(this.authInstance.currentUser.get().getId());
        } else{
            this.props.signOut();
        }
    }

    onSignInClick = () =>{//remember this.auth is a reference to the AuthInstance from gapi declared inside the then() method
        this.authInstance.signIn();
    }

    onSignOutClick = () => {//remember this.auth is a reference to the AuthInstance from gapi declared inside the then() method
        this.authInstance.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign out
                </button>
            );
        } else {
            return (//remeber!! when passing callback functions you want to pass a reference to it and not the call
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
};

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }; // passed as props
};
export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)