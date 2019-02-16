import React, { Component } from 'react';
import { connect } from 'react-redux';
import HTMLeditor from './HTMLeditor';
import Modal from '../components/modal';
import addRecipe from '../store/actions/add_recipe_action';
import _ from 'lodash';
import API from '../utils/API';

class RecipeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            set: false,
            edit: false,
            recipeName: '',
            category: '',
            description: '',
            recipe: '',
            id: ''
        }
    }

    componentDidMount() {
        this.props.recipe ? this.setEditInfo(this.props.recipe[0]) : this.setUp();
    }

    setUp() {
        this.setState({set: true})
    }

    replaceHtmltags(input) {
        return input.replace(/(<br*?>)/g, '\n');
    }

    setEditInfo = (input) => {
        const { name, recipe, description, category, _id} = input;

        const cleansedRecipe= this.replaceHtmltags(recipe);
        console.log(cleansedRecipe, 'did this work?')

        this.setState({
            set: true,
            edit: true,
            recipeName: name,
            category: category,
            description: description,
            recipe: cleansedRecipe,
            id: _id
        })
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

    createRecipeObject() {
        return {
            recipe: this.state.recipe,
            name: this.state.recipeName,
            description: this.state.description,
            category: this.state.category,
            user: this.props.user.id
        }
    }

    handleEditRecipe = (e) => {
        e.preventDefault();

        const editedRecipe = this.createRecipeObject();

        API
            .Recipes
            .update(this.state.id, editedRecipe)
            .then(res => console.log(res))
    }


    handleAddRecipe = (e) => {
        e.preventDefault();

        API
            .Recipes
            .create(this.props.user.id, this.createRecipeObject())
            .then(res => this.props.addRecipe(res.data));

        this.props.exitCard();
    }

    render() {
        return this.state.set ? (
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
                    >   <option>Categories</option>
                        {_.map(this.props.categories, category => (
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
                        string={this.state.recipe}
                        onEditChange={this.handleHTMLeditChange}
                    />
                    {!this.state.edit ? (<button className='form-btn' onClick={this.handleAddRecipe}>Add Recipe</button>) : (
                        <button className='form-btn' onClick={this.handleEditRecipe}>Edit Recipe</button>
                    )}
                    
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
