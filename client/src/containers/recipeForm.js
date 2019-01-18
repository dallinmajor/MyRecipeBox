import React, { Component } from 'react';
import { Input, TextArea, FormBtn, SelectInput } from "../components/Form";
import { connect } from 'react-redux';
// import { setUser } from '../store/actions';
// import { bindActionCreators } from 'redux';


class RecipeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeName: '',
            category: '',
            description: '',
            recipe: ''
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    sanatizeInput = (input) => {
        return input.replace(/<.*?script|style=|class=/g, '');
    }

    handleOnChange = (e) => {
        let input = this.sanatizeInput(e.target.value);
        this.setState({
            inputVal: input,
            htmlVal: '<p>' + input.replace(/(?:\r\n|\r|\n)/g, '<br/>') + '</p>'
        });
        console.log(this.state.inputVal);
        console.log(this.state.htmlVal);
    }

    render() {
        console.log(this.props)
        return this.props.categories ? (
            <form>
                <Input
                    value={this.state.recipeName}
                    name="recipeName"
                    placeholder="Recipe Name"
                    onChange={this.handleInputChange}
                />
                <SelectInput 
                    value={this.state.category}
                    name="category"
                    label="Category"
                    onChange={this.handleOnChange}
                    options={this.props.categories}
                />

            </form>
        ) : null;
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

// const mapDispatchToProps = (dispatch) => {

//     return bindActionCreators({ setUser: setUser }, dispatch);
// }

export default connect(mapStateToProps)(RecipeForm);
