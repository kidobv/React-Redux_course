export default (state =[], action) =>{ 
    //I can call the first arg something like postsList .. doesn't need to be state
    //however when using React-Redux it is better to call it state since I will be referencing this object in the mapStateToProps function
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }    
};