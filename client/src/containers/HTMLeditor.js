import React, { Component } from 'react';

class HTMLeditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: ''
        }
    }

    componentDidMount() {
        console.log(this.props.string, "is this here?")
    }

    sanatizeInput = (input) => {
        return input.replace(/<.*?script|style=|class=/g, '');
    }

    handleOnChange = (e) => {
        let input = this.sanatizeInput(e.target.value);
        this.setState({
            inputVal: input,
        });
        this.props.onEditChange((input.replace(/(?:\r\n|\r|\n)/g, '<br/>')))
    }
    render() {
        return (
            <textarea
                value={this.state.inputVal}
                onChange={this.handleOnChange}
                rows='10'
            />
        )
    }
}

export default HTMLeditor;