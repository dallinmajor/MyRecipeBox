import React from 'react';
import DropDown from './dropdown';

export default ({categories, handleCategoryClick}) => {
    console.log(categories);
    return (
        <DropDown className='category-dropdown' name='Categories'>
            <p className='dropdown-item' >None</p>
            {categories.map(category => {
               return <p className='dropdown-item'>{category}</p>
            })}
            <p className='dropdown-item' onClick={handleCategoryClick}>--New Category--</p>
        </DropDown>
    )
}