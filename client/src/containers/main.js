import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '../components/card';
import setRecipeDisplay from '../store/actions/set_display_recipe_action';
import Head from './head';
import _ from 'lodash';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCreating: false,
            filter: false
        }
    }
    handleNewRecipeClick = () => {
        this.setState({ isCreating: true })
    }

    exitNewRecipe = () => {
        this.setState({ isCreating: false })
    }

    handleRecipeFilter = (filter) => {
        this.setState({filter});
    }

    renderRecipeCard = (recipe) => {
        return <Card
        key={recipe._id}
        title={recipe.name}
        description={recipe.description}
        recipe={[recipe]}
        recipeClicked={this.props.setRecipeDisplay}
        />
    }

    filterRecipes = (recipe) => {
        return recipe.category === this.state.filter ? this.renderRecipeCard(recipe) : null;
    }

    renderRecipes = (recipes) => {
        return _.map(recipes, recipe => {
            return this.state.filter ? this.filterRecipes(recipe) : this.renderRecipeCard(recipe);
        })
    }

    render() {
        return (
            <div>
                <Head/>
                <main className='grid main'>
                    {this.props.recipes ? this.renderRecipes(this.props.recipes) : null}
                </main>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
};

function mapDipsatchToProps(dispatch) {
    return bindActionCreators({
        setRecipeDisplay: setRecipeDisplay
    }, dispatch);
}

export default connect(mapStateToProps, mapDipsatchToProps)(Main);
