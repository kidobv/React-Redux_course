import axios from 'axios'

const KEY = 'AIzaSyB6gTUpgBcFVKQZlTaZvU8UgAkkyOniwJs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
         key: KEY,
         part: 'snippet',
         maxResults: 5
    }
});