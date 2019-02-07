import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '../components/card';
import setRecipe from '../store/actions/set_recipe_action';
import _ from 'lodash';
class Main extends Component {
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

    renderRecipes = (recipes) => {
        return _.map(recipes, recipe => {
            return <Card
                key={recipe._id}
                title={recipe.name}
                description={recipe.description}
                recipe={[recipe.recipe]}
                recipeClicked={this.recipeClicked}
            />
        } )
    }

    render() {
        return (
            <main className='grid'>
                {this.props.recipes ? this.renderRecipes(this.props.recipes): null}
            </main>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
};

function mapDipsatchToProps(dispatch) {
    return bindActionCreators({ setRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDipsatchToProps)(Main);
