import React from 'react';

export const SelectInput = ({onChange, options, value, name}) => (
    <div className="form-group">
        <select className="form-control" name={name} onChange={(e) => onChange(e)} value={value}>
        {options.map(option => (
            <option>{option}</option>
        ))}
        </select>
    </div>
);