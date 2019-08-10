import React from 'react';

class SearchBar extends React.Component {

    state = {term:''};
       
    onInputChange = (event) =>{
        this.setState({term : event.target.value});
    };

    onFormSubmit = (event) => { //this arrow function is making sure that this" is alway equal to the SearchBar intance, if we declare it as a regular function we lose the "this" binding
        event.preventDefault();
        //passing the state term as a param to the callback on the parent class
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Youtube Video Search</label>
                        <input type="text" value={this.state.term}//controlled input
                               onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;