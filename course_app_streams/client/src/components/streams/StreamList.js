import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {

    componentDidMount = () => {
        this.props.fetchStreams();

    }
    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <button className="ui button negative">
                        Delete
                    </button>
                </div>
            );
        }
    };

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    <div>{this.renderAdmin(stream)}</div>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            );
        });
    };

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui  button primary">
                        Create Stream
                    </Link>
                </div>
            );
        }
    };

    render() {
        return <div>
            <h2>Streams</h2>
            <div className="ui celled list">{this.renderList()}</div>
            <div>{this.renderCreate()}</div>
        </div>
    };
};

const mapStateToProps = state => {
    return {//here we extract what we need from the redux store object (state) to set as props to this component
        streams: Object.values(state.streams),//Object values turns all the values inside the give object into an array
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}
//using connect here will pass the state object from the redux store as an argument to the mapStateToProps
export default connect(mapStateToProps, { fetchStreams })(StreamList);