import React from 'react';
import DropDown from './dropdown';

export default ({categories, handleCategoryClick, handleNewCategoryClick}) => {
    console.log(categories);
    return (
        <DropDown className='category-dropdown' name='Categories'>
            <p className='dropdown-item' onClick={(e) => {e.preventDefault(); handleCategoryClick(false)}}>None</p>
            {categories.map(category => {
               return <p onClick={(e) => {e.preventDefault(); handleCategoryClick(category)}} className='dropdown-item'>{category}</p>
            })}
            <p className='dropdown-item' onClick={(handleNewCategoryClick)}>--New Category--</p>
        </DropDown>
    )
}