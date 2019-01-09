import React from 'react';

const Display = ({display}) => {
    return (
        <div>
            <h4>Name</h4>
            <p>{display[0].name}</p>
            <h4>Occupation</h4>
            <p>{display[0].occupation}</p>
            <h4>Favorite color</h4>
            <p>{display[0].favColor}</p>
        </div>
    )
};

export default Display;