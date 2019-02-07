import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ButtonToolbar, Button } from 'react-bootstrap';
import setRecipe from '../store/actions/set_recipe_action';
import RecipeForm from '../containers/recipeForm';
import CategoryDropdown from '../components/category-dropdown';

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCreatingRecipe: false,
            isAddingCategory: false,
        }
    }
    
    handleNewRecipeClick = () => {
        this.setState({ isCreating: true })
    }

    handleNewCategoryClick = () => {
        this.setState({isCreating: true})
    }

    exit = () => {
        this.setState({ 
            isCreatingRecipe: false,
            isAddingCategory: false
        })
    }

    

    render() {
        return (
            <header className='main-header'>
                <CategoryDropdown
                    categories={this.props.categories}
                    handleCategoryClick={this.handleCategoryClick}
                    handleNewCategoryClick={this.handleNewCategoryClick}
                />
                <Button
                    onClick={this.handleNewRecipeClick}
                    bsStyle="primary"
                    bsSize="large" active
                >
                New Recipe
                </Button>
                    

                {this.state.isCreatingRecipe ? <RecipeForm exitCard={this.exit} /> : null}
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
