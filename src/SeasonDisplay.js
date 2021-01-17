import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: "Let's hit the beach!",
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month >2 && month <9) {
      return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    //these are ternarys for season - we refactor them with the object seasonConfig
   // const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach'
   // const icon = season === 'winter' ? 'snowflake' : 'sun';
   const { text, iconName } = seasonConfig[season];  //destructred out text and iconName
    
   return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;

