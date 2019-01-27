import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Container } from '../components/Grid';
import RecipeForm from '../containers/recipeForm';
import Card from '../components/card';

class Page extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isCreating: false
        }
    }
    handleNewRecipeClick = () => {
        this.setState({isCreating: true})
    }

    exitNewRecipe = () => {
        this.setState({isCreating: false})
    }

    recipeClicked = (recipe) => {
        console.log(recipe);
    }

    render() {
        return (
            <div>
                <Container>
                <ButtonToolbar>
                    <Button onClick={this.handleNewRecipeClick} bsStyle="primary" bsSize="large" active>
                        New Recipe
                    </Button>
                    <Button bsSize="large" active>
                        Search by name
                    </Button>
                </ButtonToolbar>
                {this.props.recipes ? this.props.recipes.map(recipe => {
                    return <Card
                                title={recipe.name}
                                description={recipe.description}
                                recipe={[recipe.recipe]}
                                recipeClicked={this.recipeClicked}
                            />
                }) : null}
            </Container>
            {this.state.isCreating ? <RecipeForm exitCard={this.exitNewRecipe}/> : null}
            </div>
            
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

export default connect(mapStateToProps)(Page);
