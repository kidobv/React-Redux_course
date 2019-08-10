import React from 'react';
import { connect } from 'react-redux';
//no need to create a class based component we can work with connect function using a functional component as well
const SongDetail = ({ song }) => { //this props is the object returned by the mapStateToProps function
    if (!song) {
        return (
            <div>
                <h3>Select a song.</h3>
            </div>
        );
    }
    return (
        <div>
            <h3>Details for song:</h3>
            <p>
                Title: {song.title}
                <br></br>
                Duration: {song.duration}
            </p>
        </div>
    );
}



const mapStateToProps = (state) => {
    return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);