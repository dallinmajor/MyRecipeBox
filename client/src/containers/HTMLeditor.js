import React, { Component } from 'react';
import {TextArea} from '../components/Form';

class HTMLeditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: ''
        }
    }

    sanatizeInput = (input) => {
        return input.replace(/<.*?script|style=|class=/g, '');
    }

    handleOnChange = (e) => {
        let input = this.sanatizeInput(e.target.value);
        this.setState({
            inputVal: input,
        });
        this.props.onEditChange(('<p>' + input.replace(/(?:\r\n|\r|\n)/g, '<br/>') + '</p>'))
    }
    render() {
        return (
            <TextArea
                value={this.state.inputVal}
                onChange={this.handleOnChange}
                rows='10'
            />
        )
    }
}

export default HTMLeditor;