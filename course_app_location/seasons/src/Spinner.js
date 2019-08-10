import React from 'react'

const Spinner = (props) => {
    return (
        <div className = "ui active dimmer">
            <div className = "ui text loader"> {props.message} </div>
        </div>
    );
};

Spinner.defaultProps = { 
    //defaultProps is a react property for the component and it sets a default for the props parameter of the component
    message:'Loading...'
};

export default Spinner;