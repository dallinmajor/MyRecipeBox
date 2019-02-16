import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../components/modal';
import setRecipeDisplay from '../store/actions/set_display_recipe_action';
import EditDropDown from './editDropDown';
import RecipeForm from './recipeForm';

class DisplayRecipe extends Component {
    state = {
        edit: false
    }

    handleEditClick = () => {
        this.setState({
            edit: true
        })
    }

    createMarkup(recipe) {
        return { __html: "<p>" + recipe.recipe + "</p>" };
    }

    exit = () => {
        this.setState({
            edit: false
        })
        this.props.setRecipeDisplay();
    }

    render() {
        
        if (this.props.displayRecipe) {
            const recipe = this.props.displayRecipe;

            return !this.state.edit ? (
            <Modal exit={this.props.setRecipeDisplay}>
                <EditDropDown id={recipe._id} exit={this.props.setRecipeDisplay} edit={this.handleEditClick}/>
                <div className='recipe-card'>
                    <h2 className='center'>{recipe.name}</h2>
                    <h4>{recipe.description}</h4>
                    <br />
                    <div dangerouslySetInnerHTML={this.createMarkup(recipe)} />
                </div>
            </Modal>) : (
                <RecipeForm recipe={[this.props.displayRecipe]} exitCard={this.exit}/>
            )
        }

        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        displayRecipe: state.displayRecipe
    }
}

export default connect(mapStateToProps, { setRecipeDisplay })(DisplayRecipe);