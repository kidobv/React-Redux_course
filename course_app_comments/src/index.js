import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import Clock from './Clock';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';


//Component class definition
class APP extends React.Component {
    render() {
        return (
            <div className="ui container comments">                
                <h3 className="ui dividing header"><Clock /> </h3>
                <ApprovalCard>
                    <div>
                        <h4>Warning!</h4>
                        Are you sure you want to approve?
                    </div>
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail author="Kidany" image={faker.image.avatar()} text = "Hello there!" />
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail author="Amelia" image={faker.image.avatar()} text = "nice post mate!" />
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail author="Mika" image={faker.image.avatar()} text="pipi caca!" />
                </ApprovalCard>
            </div>
        );
    }
}

ReactDOM.render(<APP />, document.querySelector('#root'));


// Component Functional definitions
// function APP () {
//     return <div><h1>Hello world!</h1></div>
// }

// const APP = () => {    
//         return <div><h1>Hello world!</h1></div>
// }

