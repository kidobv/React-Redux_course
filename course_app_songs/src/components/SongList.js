import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

class SongList extends Component {
//this.props === {songs:state.songs}; thanks to the mapStateToProps function
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick = {() => {this.props.selectSong(song)}}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        })
    }
    render() { 
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    }
}

//this function can be called whatever we want but for convetion it is called mapStateToProps, what it does is
//it takes the state object of the application essentially all of the data inside the redux store and connect runs some computations on it
// that will allow this data to be shown as props inside the connected component
const mapStateToProps = (state) => {
    return { songs: state.songs };
}
export default connect(mapStateToProps, { selectSong })(SongList); 
//passing the object selectSong:selectSong (key:actionCreator)
//the connect function will automatically look at all the functoins inside the object in second param  (the Action Creators)
//and wraps them up in another function, when this new function is called the connect function is going to call the action creaors
//is going to automatically take the action that gets returned and call the dispatch method with it
//So whenever we call props.'ActionCreator' the connect function will take the action returned and pass it into the dispatch function
