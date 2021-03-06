import React from 'react';

export default ({exit, children}) => {
    return (
        <div className='my-modal'>
            <div className='my-modal-container'>
                <div onClick={e => {e.preventDefault(); exit()}} className='exit-X'>X</div>
                {children}
            </div>
        </div>
    )
}