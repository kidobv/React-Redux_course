import React from 'react';
import {createStore, combineReducers} from 'redux';

//Redux app example
//People dropping off a form (Action Creators)
const createPolicy = (name, amount) =>{
  return({// The Action (a form in the analogy)
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  });
}

const deletePolicy = (name) => {
  return ({
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  });
}

const createClaim = (name, amountOfMoneyToCollect) => {
  return ({
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  });
}

//Reducers (Departments!)
const claimsHistory = (oldListOfClaims = [], action)=> {
  if(action.type === 'CREATE_CLAIM'){
    //we care about this action (form)
    return [...oldListOfClaims, action.payload];
  }
// we don't care the actionn (form)
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) =>{ //100 initial amount of money the company starts with
  if(action.type === 'CREATE_CLAIM'){
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  }
  else if (action.type === 'CREATE_POLICY'){
    return bagOfMoney + action.payload.amount;
  }

  return bagOfMoney;
}

const policies = (oldListOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...oldListOfPolicies, action.payload.name];
  }
  else if (action.type === 'DELETE_POLICY') {
    return oldListOfPolicies.filter((name) => name !== action.payload.name);
  }

  return oldListOfPolicies;
}

//Calling Redux functions 

const ourDepartments = combineReducers({ 
  // below are the states objects and their values so they don't have to be the same
  accounting: accounting, //with ES2015 we could write the keyvalue pair with one word when they are called the same.
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments); // this store object contains the redux app, all our departments 

//using the redux store
//first we create an action with the ActionCreator
const action = createPolicy('Kido', 20);

//now we can use the dispatch funstion from redux on the newly created store with our action as a parameter
//the dispatch function will take care of distributing the action to each department.
store.dispatch(action);

//we can also call the action cretaor inside the dispatch method
store.dispatch(createPolicy('Ami', 30));
store.dispatch(createPolicy('Mika', 50));
store.dispatch(createClaim('Mika', 150));
store.dispatch(deletePolicy('Mika'));

//we can see what happend to our application data after dispatching the action by using the getState function from redux
console.log(store.getState());



function App() {
  return (
    <div>
      <h2>Testing Redux</h2>
    </div>
  );
}
export default App;
