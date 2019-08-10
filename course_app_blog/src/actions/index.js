import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

//syntax explained: fecthPostsAndUsers is an arrow function that returns an async arrow function that takes dispatch from Thunk as a parameter
//whenever we call an action creator from within another action creator we need to make sure to dispatch the result of the actionCreator being called
export const fetchPostsAndUsers = () => async (dispatch, getState) =>{
    
    await dispatch(fetchPosts()); // this await will make sure to wait for the internal await inside the fetchPosts actionCreator before moving on to addtional logic inside this actionCretor
    //console.log(getState().posts);

//now we want to get each individual userIds from the posts to call fetchUser action creator
//Using an extra action creator and the _.uniq() function we can get a list of unique user IDs and then call the fetch user action creator to fetch each user's data once
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach( id => dispatch(fetchUser(id)));

  //Alternate syntax with lodash
//   _.chain(getState().posts)
//     .map('userId')
//     .uniq()
//     .forEach(id => dispatch(fetchUser(id)))
//     .value();
};

//Action creator to fetch a list of posts from jsonPlaceholder api
export const fetchPosts = () => {
    //export const fetchPosts = async () => {
    // const response = await jsonPlaceholder.get('/posts')
    //*bad approach! When Babel converts the await and async notations into non ES2015 JS syntax the 'response' objects is not plain therefore redux doesn't accept it
    //*Also at the beginning of execution time the promise is not resolved yet
    //*since we are using async, the action creator will return the request objected in the payload not a json resposne
    //*therefore the dispatch method will get the request instead of a plain object as an action. We need a middleware framework
   //refer to lecture 166 
    return async (dispatch, getState) => {
        //thunk will intercept the action creator call and pass along the dispatch and getState functions as parameters
        //with thunk we can also return a function as an action like the one below or we can continue to return plain objects
        const response = await jsonPlaceholder.get('/posts')
        dispatch(
            {
                type: 'FETCH_POSTS',
                payload: response.data
            }
        );        
    };
};

//extra action creator approach
export const fetchUser = (id) =>{
    return async (dispatch) => {
        const response = await jsonPlaceholder.get(`/users/${id}`)
        dispatch(
            {
                type: 'FETCH_USER',
                payload: response.data
            }
        );
    };
};



//memoize approach
// export const fetchUser = (id) =>{
//     return async (dispatch) => {
//         //with thunk we can also return a function as an action like the one below, or we can continue to return plain objects
//         _fetchUser(id, dispatch);
//     };
// };

// //we need to make a private function to use memoize because if we call memoize inside the fetchUser action, Redux will create a new version of the funciton every time
// const _fetchUser = _.memoize((id,dispatch) =>{
//     const response = await jsonPlaceholder.get(`/users/${id}`)
//     dispatch(
//         {
//             type: 'FETCH_USER',
//             payload: response.data
//         }
//     );
// });

