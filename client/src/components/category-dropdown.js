import React from 'react';
import DropDown from './dropdown';

export default ({categories, handleCategoryClick}) => (
    <DropDown className='category-dropdown' name='Categories'>
        {categories.map(category => {
            <span>{category}</span>
        })}
        <span onClick={handleCategoryClick} className='catgory-item'></span>
    </DropDown>
)