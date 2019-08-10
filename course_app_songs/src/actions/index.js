//Action Creator
export const selectSong = (song) =>{
    //Return an action
    return {
        type:'SONG_SELECTED',
        payload: song         // redux actually looks for action.payload key specifically eventhough the course says it's not rqueired
    }
}
//named exports allow us to export multiple functinos from the same file, to reference it simply use curly braces in importing file
