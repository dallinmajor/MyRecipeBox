import React, { Component } from 'react';
import { Input, TextArea, FormBtn, SelectInput } from "../components/Form";
import { connect } from 'react-redux';
import HTMLeditor from './HTMLeditor';
// import { setUser } from '../store/actions';
// import { bindActionCreators } from 'redux';


class RecipeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeName: '',
            category: '',
            description: '',
            recipe: '',
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleHTMLeditChange = (edit) => {
        this.setState({
            recipe: edit
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const newRecipeObj = {
            recipe: this.state.recipe,
            name: this.state.recipeName,
            description: this.state.description,
            category: this.state.category,
            user: "Dallin Major"
        }

    }

    render() {
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
                    onChange={this.handleInputChange}
                    options={this.props.categories}
                />
                <TextArea
                    value={this.state.description}
                    name='description'
                    onChange={this.handleInputChange}
                    placeholder='Description (optional)'
                    rows="3"
                />
                <HTMLeditor
                    onEditChange={this.handleHTMLeditChange}
                />
                <FormBtn
                    onClick={this.handleSubmit}
                >
                    Submit
                    </FormBtn>
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
