import React from 'react';

export default ({name, className, children}) => (
    <div className='my-dropdown'>
        <div className={className}>{name}</div>
        <div className={`my-dropdown-content`}>
            {children}
        </div>
    </div>
);
