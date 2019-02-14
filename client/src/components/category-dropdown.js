import React from 'react';
import DropDown from './dropdown';
import _ from 'lodash';

export default ({arr, handleCategoryClick, handleNewCategoryClick, handleCategoryDelete}) => {
    const categories = arr[0];
    return (
        <DropDown className='category-dropdown' name='Categories'>
            <p className='other-items' onClick={(e) => {e.preventDefault(); handleCategoryClick(false)}}>None</p>
            { _.map(categories, category => {
               return (
                <span className='dropdown-item' onClick={(e) => {handleCategoryClick(category)}}>
                    <p className='exit-X' onClick={() => handleCategoryDelete(category)}>x</p>
                    <p>{category}</p>
                </span>
               ) 
            })}
            <p className='other-items' onClick={() => handleNewCategoryClick()}>--New Category--</p>
        </DropDown>
    )
}