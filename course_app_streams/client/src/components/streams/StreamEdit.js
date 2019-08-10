import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm';


class StreamEdit extends React.Component {

    componentDidMount = () => {
        this.props.fetchStream(this.props.match.params.id);
    }
    //formValues
    onSubmit = (formValues) => { //this parameter (formValues in this case) gets passed on by reduxForm to the callback function of onSubmit, it will have an object with the field values unless initialValues are given, in that case whatever object is the initial value that's what gets passed on
        this.props.editStream(this.props.match.params.id, formValues)
    }
    
    render() {
        if (!this.props.stream) {
            return <div>Loading....</div>
        }
        // passing the full stream object as initialValues can be problematic if we get more values as (formValues argument) inside onSubmit because we may edit them by accident on the server side 
        //so here we suppress the values we don't want to pass
        const { id, userId, ...initialValues } = this.props.stream;
        return (
            <div>
                <h3>Edit Stream</h3>
                {/*  //initialValues is a special prop from reduxForm we need to pass down the initialValues as a prop with the same name and same form value names in order for reduxForm to map them */}
                {/*not great if we need to pass more than two property <StreamForm initialValues={{ title: this.props.stream.title, description: this.props.stream.description }} onSubmit={this.onSubmit} /> */}
                <StreamForm initialValues={initialValues} onSubmit = {this.onSubmit} /> 
            </div>
        );

    }
}



//remember mapStateToProps function gets called with two given arguments one is the application level state from redux store and the own props (the props that get passed to this component)
const mapStateToProps = (state, ownProps) => {
    return {//here we extract what we need from the redux store object (state) to set as props to this component
        stream: state.streams[ownProps.match.params.id]
        
    };
};
//using connect here will pass the state object from the redux store as an argument to the mapStateToProps
export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);