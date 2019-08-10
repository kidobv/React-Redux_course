import React from 'react';
import unsplash from '../api/unsplash'; // by convention we want put the 3rd party imports above the project Component imports
import SearchBar from './SearchBar';
import ImageList from './ImageList'

class App extends React.Component {

    state = {images:[]}; 

    onSearchSubmit = async (term) =>{
        //This is a sample  syntax for calling axios inside the APP, however it is cleaner to do API config outside the App files
        // const response = await axios.get('https://api.unsplash.com/search/photos', {
        //     params: {
        //         query: term
        //     },
        //     headers: {
        //         Authorization: 'Client-ID eca10f34d3ac8c233aa95b8aae59d936a1e002ca2a4698d3e73c73681ff4de1c'
        //     }
        // });  
        // this.setState({images: response.data.results}); 

        // we could add this whole function inside the unsplash.js and make it cleaner but then it is not as generic if we want another endpoint we can't reuse it
        const response = await unsplash.get('/search/photos', { 
               params: {query: term}           
        });  
        this.setState({images: response.data.results}); 
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                {/* here the we are passing onSubmit as a prop, we can call it anything but to be consistent with our intent for this prop/function we call it the same as the event in the searchBar class */}
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}
export default App;