import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';
import setRecipe from '../store/actions/set_recipe_action';
import deleteCategory from '../store/actions/delete_category_action';
import RecipeForm from '../containers/recipeForm';
import CategoryDropdown from '../components/category-dropdown';
import CategoryForm  from './categoryForm';

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCreatingRecipe: false,
            isAddingCategory: false,
        }
    }
    
    handleNewRecipeClick = () => {
        this.setState({ isCreatingRecipe: true })
    }

    handleNewCategoryClick = () => {
        this.setState({isAddingCategory: true})
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
                    arr={[this.props.categories]}
                    handleCategoryClick={this.props.handleRecipeFilter}
                    handleNewCategoryClick={this.handleNewCategoryClick}
                    handleCategoryDelete={this.props.deleteCategory}
                />
                <Button
                    onClick={this.handleNewRecipeClick}
                    bsStyle="primary"
                    bsSize="large" active
                >
                New Recipe
                </Button>
                    

                {this.state.isCreatingRecipe ? <RecipeForm exitCard={this.exit} /> : null}
                {this.state.isAddingCategory ? <CategoryForm exitCard={this.exit}/> : null}
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
    return bindActionCreators(
        { 
            setRecipe: setRecipe,
            deleteCategory: deleteCategory

        }, dispatch);
}

export default connect(mapStateToProps, mapDipsatchToProps)(Head);
