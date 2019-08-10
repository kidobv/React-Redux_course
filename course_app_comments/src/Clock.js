import React from 'react'

class Clock extends React.Component {
 //   constructor(props){
 //       super(props)
 // this.
        state = {
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        };
 //   }
    componentDidMount(){
        this.timerID = setInterval( 
             () => this.tick(), 1000);
        //function() {this.tick.bind(this)}, 1000);
        //function(){this.tick()}.bind(this), 1000);
                                // Here the () => means function(), since the first paramater of the setInterval 
                                //function has to be of type function we need to enlcose the return value of tick() within a function and bind the Clock class object
                                //another way to call it is with the following syntax this.tick.bind(this) instead of () => this.tick(), 
                                //because tick without () is giving a reference to the method, however in order to use the class object inside tick method we need to bind the "this" refernece
    }
    componentWillUnmount(){
        //releasing resources
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ // We can also call the setState method as the setInterval callBack function instead of tick()
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        });
    }
    render() {
        return (
            <div>
                <h2>Today is {this.state.date}</h2>
                <h2> the time is {this.state.time}</h2>
            </div>
        );
    }
}
export default Clock