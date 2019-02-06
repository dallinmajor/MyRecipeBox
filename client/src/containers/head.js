import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ButtonToolbar, Button } from 'react-bootstrap';
import setRecipe from '../store/actions/recipeActions';
import RecipeForm from '../containers/recipeForm';

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCreating: false
        }
    }
    handleNewRecipeClick = () => {
        this.setState({ isCreating: true })
    }

    exitNewRecipe = () => {
        this.setState({ isCreating: false })
    }

    recipeClicked = (recipe) => {
        console.log(recipe);
    }

    render() {
        return (
            <header>
                <ButtonToolbar>
                    <Button
                        onClick={this.handleNewRecipeClick}
                        bsStyle="primary"
                        bsSize="large" active
                    >New Recipe
                    </Button>
                </ButtonToolbar>
                {this.state.isCreating ? <RecipeForm exitCard={this.exitNewRecipe} /> : null}
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        recipes: state.recipes,
        recipeOnDisplay: state.recipeOnDisplay
    }
};

function mapDipsatchToProps(dispatch) {
    return bindActionCreators({ setRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDipsatchToProps)(Head);
