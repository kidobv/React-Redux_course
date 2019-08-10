import {combineReducers} from 'redux'

//Reducers
const songsReducer = () =>{
    return[
        {title: 'Drive', duration:'5:09'},
        { title: 'Latinoamerica', duration: '6:07' },
        { title: 'Vuelta al mundo', duration: '4:59' }         
    ];
}

const selectedSongReducer = (selectedSong = null, action) =>{
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

//the keys in this object returned by the cobineReducers is the same keys that our state object will have
export default combineReducers({
    songs:songsReducer,
    selectedSong: selectedSongReducer
});