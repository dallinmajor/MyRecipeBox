import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '../components/card';
import setRecipeDisplay from '../store/actions/set_display_recipe_action';
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

    renderRecipes = (recipes) => {
        return _.map(recipes, recipe => {
            return <Card
                key={recipe._id}
                title={recipe.name}
                description={recipe.description}
                recipe={[recipe.recipe]}
                recipeClicked={this.props.setRecipeDisplay}
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
    return bindActionCreators({ 
        setRecipeDisplay: setRecipeDisplay
     }, dispatch);
}

export default connect(mapStateToProps, mapDipsatchToProps)(Main);
