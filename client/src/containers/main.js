import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '../components/card';
import setRecipe from '../store/actions/recipeActions';

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

    render() {
        return (
            <main className='grid'>
                {this.props.recipes ? this.props.recipes.map(recipe => {
                    return <Card
                        title={recipe.name}
                        description={recipe.description}
                        recipe={[recipe.recipe]}
                        recipeClicked={this.recipeClicked}
                    />
                }) : null}
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
