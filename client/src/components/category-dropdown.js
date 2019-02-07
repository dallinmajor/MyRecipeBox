import React from 'react';
import DropDown from './dropdown';

export default ({categories, handleCategoryClick, handleNewCategoryClick}) => {
    console.log(categories);
    return (
        <DropDown className='category-dropdown' name='Categories'>
            <p className='dropdown-item' >None</p>
            {categories.map(category => {
               return <p onClick={handleCategoryClick} className='dropdown-item'>{category}</p>
            })}
            <p className='dropdown-item' onClick={handleNewCategoryClick}>--New Category--</p>
        </DropDown>
    )
}