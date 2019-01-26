import React from 'react';

const Card_1 = ({ addClass = '',cardTitle = '', xClicked, children}) => {


    return (
        <div className={'card-1' + addClass}>
        <div className='card-head'>
            <div className='card-title'>{cardTitle}</div>
            <div className='card-exit' onClick={() => xClicked ? xClicked(): null}>X</div>
        </div>
            
            {children}
        </div>
    )
};

export default Card_1;