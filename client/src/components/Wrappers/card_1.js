import React from 'react';
import OverLay from '../Overlays/overlay';

const Card_1 = ({children}) => {
    return (
        <OverLay>
            <div className='card_1'>
                {children}
            </div>  
        </OverLay>
    )
}