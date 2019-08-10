//3rd party dependencies
import React from 'react';
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
//my code
import App from './components/App'
import reducers from './reducers'//here since we called the file inside the reducers folder index.js
                                //webpack will automatically look for it, this is a common directory design pattern


ReactDom.render(
    <Provider store = {createStore(reducers)}>
      <App />
    </Provider>,
    document.querySelector('#root')
);