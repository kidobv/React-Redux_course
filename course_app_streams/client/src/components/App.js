import React from 'react';
import { Router, Route } from 'react-router-dom'
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header"
import history from "../history" //to use it we need to use Router instead of the BrowserRouter component

const App = () => {
    return (
        <div className="ui container">            
            <Router history={history}>
                <Header />
            {/* exact prop by itself means exact = {ture} */}
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" exact component={StreamCreate} />
                <Route path="/streams/edit/:id" exact component={StreamEdit} />
                <Route path="/streams/delete/:id" exact component={StreamDelete} />
                <Route path="/streams/show/:id" exact component = {StreamShow}/>
            </Router>
        </div>
    );
};
export default App