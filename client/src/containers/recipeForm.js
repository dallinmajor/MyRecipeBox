import React, { Component } from 'react';
import { connect } from 'react-redux';
import HTMLeditor from './HTMLeditor';
import Modal from '../components/modal';
import addRecipe from '../store/actions/add_recipe_action';
import API from '../utils/API';

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
        console.log(event);
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
        
        API
            .Recipes
            .create(this.props.user.id, newRecipeObj)
            .then(res => console.log(res));

        this.props.exitCard();
    }

    render() {
        return this.props.categories ? (
            <div>
            <Modal exit={this.props.exitCard}>
                <form className='recipe-form'>
                    <input value={this.state.recipeName}
                        name="recipeName"
                        placeholder="Recipe Name"
                        onChange={this.handleInputChange}
                    />
                    <select
                        value={this.state.category}
                        name="category"
                        label="Category"
                        onChange={this.handleInputChange}
                        options={this.props.categories}
                    >
                        {this.props.categories.map(category => (
                            <option>{category}</option>
                        ))}
                    </select>
                    <textarea
                        value={this.state.description}
                        name='description'
                        onChange={this.handleInputChange}
                        placeholder='Description (optional)'
                        rows="3"
                    />
                    <HTMLeditor
                        onEditChange={this.handleHTMLeditChange}
                    />
                    <button onClick={this.handleSubmit}>Add</button>
                </form>
            </Modal>
            </div>
        ) : null;
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        user: state.user
    }
}

export default connect(mapStateToProps, { addRecipe })(RecipeForm);
