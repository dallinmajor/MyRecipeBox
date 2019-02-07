import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ButtonToolbar, Button } from 'react-bootstrap';
import setRecipe from '../store/actions/recipeActions';
import RecipeForm from '../containers/recipeForm';
import CategoryDropdown from '../components/category-dropdown';

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCreating: false
        }
    }
    handleCategoryClick = (category) => {
        console.log(category)
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
                    <CategoryDropdown
                        categories={this.props.categories}
                        handleCategoryClick={this.handleCategoryClick}
                    />
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
    }
};

function mapDipsatchToProps(dispatch) {
    return bindActionCreators({ setRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDipsatchToProps)(Head);
