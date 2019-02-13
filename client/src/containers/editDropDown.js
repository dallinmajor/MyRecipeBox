import React, { Component } from 'react';
import DropDown from '../components/dropdown';

class EditDropDown extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    render() {
        return (
            <div className='edit'>
            <DropDown name='edit'>
                <p className='dropdown-item'>edit</p>
                <p className='dropdown-item'>delete</p>
            </DropDown>
            </div>
        )
    }
}

export default EditDropDown;