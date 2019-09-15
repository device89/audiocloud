import React from 'react';

const Track = ({track}) => {

    return (
        <div>
            <h3>{track.title}</h3>
            <div>{track.description}</div>
            <p></p>
        </div>
    )    
};

export default Track;