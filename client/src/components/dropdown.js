import React from 'react';

export default ({className, children}) => (
    <div className='dropdown'>
        <div className={`dropdown-content ${className}`}>
            {children}
        </div>
    </div>
);
