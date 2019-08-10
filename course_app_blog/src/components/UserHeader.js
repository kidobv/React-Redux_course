import React from 'react'
import { connect } from 'react-redux'

class UserHeader extends React.Component {

    
    render() {
        
        if(!this.props.user){
            return null;
        }
        return (
            <div className="header">
                {this.props.user.name}   
            </div>
        );
    }
}

//we could add the mapToStateProps to it's own file same as the connect function this way we can make the component reusable
const mapStateToProps = (state, ownProps) =>{ //ownProps is a reference to the props that will be send to the component from PostList component
   return {user:state.users.find(
       (user) => { return user.id === ownProps.userId } //find returns the value of the first element in an array that pass a test (provided as a function)
        )
    };
}

export default connect(mapStateToProps)(UserHeader)