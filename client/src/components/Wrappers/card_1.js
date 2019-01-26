import React from 'react';
import OverLay from '../Overlays/overlay';

const Card_1 = ({addClass = '', children}) => {


    return (
        <OverLay>
            <div className={'card_1' + addClass}>
                {children}
            </div>  
        </OverLay>
    )
};

export default Card_1;