import streams from '../apis/streams'
import history from '../history'

import { SIGN_IN, SIGN_OUT, 
    CREATE_STREAM,
    FETCH_STREAMS, FETCH_STREAM, 
    DELETE_STREAM, EDIT_STREAM } from "./types";

export const signIn = (userId) =>{
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

//this is using redux thunk therefore we will pass the dispatch function
export const createStream = (formValues) =>{
    //we need to set a handle on the response that we get form the post, we will be getting the record that was created
    return async (dispatch, getState) =>{
        const { userId } = getState().auth;
        const response = await streams.post('/streams', {...formValues, userId}); //here we are taking all the objects inside formValues and adding the userId
        dispatch(
           {
               type: CREATE_STREAM,
               payload: response.data
        });
        history.push('/'); //this is how we change routes without a user input
    };
}

export const fetchStreams = () => {   
    return async (dispatch) => {
        const response = await streams.get('/streams');
        dispatch(
            {
                type: FETCH_STREAMS,
                payload: response.data
            });
    };
}

export const fetchStream = (id) => {
    return async (dispatch) => {
        const response = await streams.get(`/streams/${id}`);
        dispatch(
            {
                type: FETCH_STREAM,
                payload: response.data
            });
    };
};

export const editStream = (id, formValues) => {
    return async (dispatch) => {
        const response = await streams.patch(`/streams/${id}`, formValues); //the values to update
        dispatch(
            {
                type: EDIT_STREAM,
                payload: response.data
            });
        history.push('/'); //this is how we change routes without a user input
    };
};

export const deleteStream = (id) => {
    return async (dispatch) => {
        await streams.delete(`/streams/${id}`); //backticks for template string ES2015
        dispatch(
            {
                type: DELETE_STREAM,
                payload: id
            });
    };
};