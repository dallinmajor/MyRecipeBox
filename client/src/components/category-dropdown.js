import React from 'react';
import DropDown from './dropdown';
import _ from 'lodash';

export default ({arr, handleCategoryClick, handleNewCategoryClick, handleCategoryDelete}) => {
    const categories = arr[0];
    return (
        <DropDown className='category-dropdown' name='Categories'>
            <p className='dropdown-item' onClick={(e) => {e.preventDefault(); handleCategoryClick(false)}}>None</p>
            { _.map(categories, category => {
               return (
                <span>
                    <p className='exit-X'>x</p>
                    <p onClick={(e) => {e.preventDefault(); handleCategoryClick(category)}} className='dropdown-item'>{category}</p>
                </span>
               ) 
            })}
            <p className='dropdown-item' onClick={(handleNewCategoryClick)}>--New Category--</p>
        </DropDown>
    )
}