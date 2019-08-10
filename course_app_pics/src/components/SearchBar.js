import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    // separete envent handler callback function instead of in-line arrow function, this is an uncontrolled element fumction
    // by using state we make it controlled -- in this case we are using inline arrow funciton on the input
    //onInputChange(event){
    //     console.log(event.target.value);
    // }

    onFormSubmit = (event) => { //this arrow function is making sure that this" is alway equal to the SearchBar intance, if we declare it as a regular function we lose the "this" binding
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* here we do not call the function onInputChange() with the parentheses because we don't want immediate execution when the component is rendered; we want execution only when there was change in the input field.
                         We pass a reference (without parenteses) so that the input can call the function at some point in the future because this is a callback function */}
                        {/* we do not put a set of parentheses whenever we pass a callback function to an event handler like onChange */}
                        {/* an alternate way of using a callback function is by defining an inline arrow function */}
                        {/* <input type="text" onChange={(event) => { console.log(event.target.value)}}/>  */}
                        {/* <input type="text" onChange={this.onInputChange} />... we were testing the event functionality; replaced with onFormSubmit now  */}
                       
                        {/* when we do value={this.state.term} on the input we are basically forcing it to take the value of the state param we can dynamically manipulate it */}
                        <input type="text" value={this.state.term}
                            onChange={(event) => { this.setState({ term: event.target.value }) }} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar