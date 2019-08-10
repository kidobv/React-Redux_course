import './SeasonDisplay.css'
import React from 'react'

const seasonConfig = { //configuration object pattern
    summer: {
        text: "So hot let's go to the beach",
        iconName: 'sun'
    },
    winter: {
        text: "It's cold as fuck",
        iconName: 'snowflake'
    }
}
//Determine current season, separete all logic from the components
const getSeason = (lat,month) => {
    if (month > 2 && month < 9){
       return lat > 0 ? 'summer' : 'winter';
    }
    else
       return lat > 0 ? 'winter' : 'summer';
}



const SeasonDisplay = (props) => {
   let season = getSeason(props.latitude, new Date().getMonth()); 
    // const seasonText = season === 'winter' ? "It's cold as fuck" : "So hot let's go to the beach";
    // const icon = season === 'winter' ? 'snowflake':'sun';
    //^ We can use the season configuration object instead of these Ternary expresions ^
    // this is extremely useful in case we need to modify the text or icon for the season, instead of going to each line in the ternary expresion we can just update the season config object
   const {text, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>  {/*this is the syntax (String template) to get the value of icon variable declared as the class name for the icon */}
            <h2>
                {text}
            </h2>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    );
}
export default SeasonDisplay;