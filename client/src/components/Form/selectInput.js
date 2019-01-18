import React from 'react';

export const SelectInput = ({label, handleOnChange, options, value, name}) => (
    <div className="form-group">
        <label for="exampleFormControlSelect1">{label}</label>
        <select className="form-control" name={name} onChange={handleOnChange} value={value}>
        {options.map(option => (
            <option>{option}</option>
        ))}
        </select>
    </div>
);